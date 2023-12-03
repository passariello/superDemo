
const CACHE_NAME = 'offline'
const OFFLINE_URL = '/offline.html'

self.addEventListener('install', function (event) {

  console.log('[WORKER] Install')

  event.waitUntil(

    (async () => {
      const cache = await caches.open(CACHE_NAME)

      await cache.add(
        new Request(OFFLINE_URL, { cache: 'reload' })
      )

      /*
      caches.open( CACHE_NAME ).then(function(cache) {
        return cache.addAll([
          '/',
          '/themes',
          '/assets',
          '/index.html',
          '/manifest.json',
          '/service-worker.js',
          '/style.css'
        ]);
      });
      */

      caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll([
          event.request.url
        ])
      })

    })()
  )

  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('[WORKER] Activate')

  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload

    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable()
    }

  })())

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  //console.log('[WORKER] Fetch', event.request.url);

  caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([
      event.request.url
    ])
  })

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse
        if (preloadResponse) {
          return preloadResponse
        }
        const networkResponse = await fetch(event.request)
        return networkResponse
      } catch (error) {
        console.log('[WORKER] Fetch failed; returning offline page instead.', error)

        const cache = await caches.open(CACHE_NAME)
        const cachedResponse = await cache.match(OFFLINE_URL)
        return cachedResponse
      }
    }
    )())
  }

})
