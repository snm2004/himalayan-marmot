// public/sw.js
// Himalayan Marmot Service Worker (Vite)
// Fixes stale index.html by using network-first for documents.

const CACHE_VERSION = 'v2'; // Change to v3, v4 etc. to trigger update
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

// Cache these immediately (keep minimal — Vite build files are hashed anyway)
const STATIC_ASSETS = [
  '/',              // will cache as navigation fallback
  '/index.html',    // fallback only
  '/manifest.json',
  '/logo.png',
  '/himalayan-bike-new.jpg',
];

// INSTALL — cache static
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => { })
  );
});

// ACTIVATE — cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) return caches.delete(key);
        })
      );
      await self.clients.claim();
    })()
  );
});

// Helper: decide what to cache
function shouldCache(url) {
  // cache images, css, js, fonts
  if (url.match(/\.(png|jpg|jpeg|webp|gif|svg)$/i)) return true;
  if (url.match(/\.(css)$/i)) return true;
  if (url.match(/\.(js)$/i)) return true;
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) return true;
  return false;
}

// FETCH
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only GET
  if (req.method !== 'GET') return;

  // ✅ IMPORTANT: HTML/documents = NETWORK FIRST (prevents old version showing)
  if (req.destination === 'document' || req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req, { cache: 'no-store' });
          const copy = fresh.clone();
          const cache = await caches.open(STATIC_CACHE);
          await cache.put(req, copy);
          return fresh;
        } catch (e) {
          const cached = await caches.match(req);
          return cached || (await caches.match('/index.html'));
        }
      })()
    );
    return;
  }

  // Allow same-origin + trusted CDNs
  const allowedExternal =
    url.origin === location.origin ||
    req.url.includes('images.unsplash.com') ||
    req.url.includes('fonts.googleapis.com') ||
    req.url.includes('fonts.gstatic.com') ||
    req.url.includes('esm.sh');

  if (!allowedExternal) return;

  // For static assets: cache-first, then network fallback
  event.respondWith(
    (async () => {
      const cached = await caches.match(req);
      if (cached) return cached;

      try {
        const res = await fetch(req);
        // cache only good responses
        if (res && res.status === 200 && shouldCache(req.url)) {
          const copy = res.clone();
          const cache = await caches.open(DYNAMIC_CACHE);
          await cache.put(req, copy);
        }
        return res;
      } catch (e) {
        // fallback image placeholder if needed
        if (req.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect width="200" height="150" fill="#f0f0f0"/><text x="100" y="75" text-anchor="middle" fill="#999">Offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
        return new Response('Offline', { status: 503 });
      }
    })()
  );
});

// Optional: handle "SKIP_WAITING" message for instant update
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});