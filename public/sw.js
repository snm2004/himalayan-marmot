/* public/sw.js */
const VERSION = 'v2026-01-14-01'; // 👈 change this each deployment (or keep auto via build later)
const STATIC_CACHE = `static-${VERSION}`;
const DYNAMIC_CACHE = `dynamic-${VERSION}`;

const STATIC_ASSETS = [
  '/',                // important
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/himalayan-bike-new.jpg',

  // If these exist in your app:
  '/index.css',
  '/styles/animations.css',
  '/styles/mobile-optimizations.css',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// ✅ Cache strategy:
// - HTML: Network first (always try latest)
// - CSS/JS/Images: Stale-while-revalidate (fast + updates)
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // allow same-origin + some CDNs
  const allowed =
    url.origin === self.location.origin ||
    req.url.includes('images.unsplash.com') ||
    req.url.includes('fonts.googleapis.com') ||
    req.url.includes('fonts.gstatic.com') ||
    req.url.includes('esm.sh');

  if (!allowed) return;

  // HTML documents -> network first
  if (req.destination === 'document') {
    event.respondWith(networkFirst(req));
    return;
  }

  // CSS/JS/IMG/FONT -> stale while revalidate
  event.respondWith(staleWhileRevalidate(req));
});

async function networkFirst(req) {
  const cache = await caches.open(DYNAMIC_CACHE);
  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    if (cached) return cached;
    // fallback to cached index for SPA style sites
    const staticCache = await caches.open(STATIC_CACHE);
    return (await staticCache.match('/index.html')) || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(req);

  const fetchPromise = fetch(req)
    .then((fresh) => {
      // cache only valid responses
      if (fresh && fresh.status === 200) cache.put(req, fresh.clone());
      return fresh;
    })
    .catch(() => null);

  return cached || (await fetchPromise) || new Response('Offline', { status: 503 });
}