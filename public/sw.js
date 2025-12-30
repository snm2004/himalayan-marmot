// Service Worker for Himalayan Marmot Website
// Provides offline functionality and caching

const CACHE_NAME = 'himalayan-marmot-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/styles/animations.css',
  '/styles/mobile-optimizations.css',
  '/logo.png',
  '/himalayan-bike-new.jpg',
  '/manifest.json'
];

// Assets to cache on first request
const DYNAMIC_ASSETS = [
  '/package/',
  '/contact',
  '/safety',
  '/festivals',
  '/booking',
  '/payments'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
  
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (except images and CDN resources)
  if (url.origin !== location.origin &&
      !request.url.includes('images.unsplash.com') &&
      !request.url.includes('esm.sh') &&
      !request.url.includes('fonts.googleapis.com') &&
      !request.url.includes('fonts.gstatic.com')) {
    return;
  }
  
  // Skip React/TypeScript module requests - let them be handled by the browser
  if (request.url.includes('.tsx') ||
      request.url.includes('.ts') ||
      request.url.includes('react') ||
      request.url.includes('@google/genai')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache
          return cachedResponse;
        }
        
        // Fetch from network and cache dynamic content
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache if not a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic content
            if (shouldCache(request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                })
                .catch((error) => {
                  console.warn('Failed to cache resource:', request.url, error);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.warn('Network request failed:', request.url, error);
            
            // Network failed, try to serve offline fallback
            if (request.destination === 'document') {
              return caches.match('/index.html') ||
                     new Response('<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>Offline</h1><p>Please check your connection</p></body></html>',
                     { headers: { 'Content-Type': 'text/html' } });
            }
            
            // For images, return a placeholder
            if (request.destination === 'image') {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="200" height="150" fill="#f0f0f0"/><text x="100" y="75" text-anchor="middle" fill="#999">Image unavailable</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            
            // For other resources, return a network error
            return new Response('Network Error', { status: 408, statusText: 'Request Timeout' });
          });
      })
  );
});

// Helper function to determine if URL should be cached
function shouldCache(url) {
  // Don't cache React/TypeScript modules
  if (url.includes('.tsx') || url.includes('.ts') || url.includes('react') || url.includes('@google/genai')) {
    return false;
  }
  
  // Cache HTML pages
  if (url.includes('.html') || url.endsWith('/')) {
    return true;
  }
  
  // Cache images
  if (url.includes('images.unsplash.com') || url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
    return true;
  }
  
  // Cache CSS and static JS (but not modules)
  if (url.match(/\.(css)$/) || (url.match(/\.js$/) && !url.includes('esm.sh'))) {
    return true;
  }
  
  // Cache manifest and other static assets
  if (url.includes('manifest.json') || url.match(/\.(pdf|mov)$/)) {
    return true;
  }
  
  // Cache API responses (if any)
  if (url.includes('/api/')) {
    return true;
  }
  
  return false;
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmission()
    );
  }
});

async function handleOfflineFormSubmission() {
  // Implementation for handling offline form submissions
  console.log('Handling offline form submission');
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Tours',
          icon: '/action-icon.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/close-icon.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    console.log('Performance mark:', event.data.name, event.data.time);
  }
});