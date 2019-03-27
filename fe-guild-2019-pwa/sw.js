importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "0251fdb59b82f5f8f448fca84e94f357"
  },
  {
    "url": "index.html",
    "revision": "75118c6f7c5ba2c57a11c3afa983ad76"
  },
  {
    "url": "manifest.json",
    "revision": "a4f78a215646e8e0111cd289dbd1977e"
  },
  {
    "url": "offline.html",
    "revision": "bde6c1d04697009dc38c3e5f2a5161d7"
  },
  {
    "url": "src/css/app.css",
    "revision": "e012adc9432cf2a78c06dfb79fe61074"
  },
  {
    "url": "src/css/feed.css",
    "revision": "9f8dd3dcefb55f2e47f485c20d5b1041"
  },
  {
    "url": "src/css/help.css",
    "revision": "1c6d81b27c9d423bece9869b07a7bd73"
  },
  {
    "url": "src/js/app.js",
    "revision": "7ba1f00b453bfc0ebbb830505b4c19a7"
  },
  {
    "url": "src/js/feed.js",
    "revision": "dea5bebb53f83d466c121dd7ebfbe690"
  },
  {
    "url": "src/lib/material.indigo-deep_orange.min.css",
    "revision": "a776ab54eac9a54727e007e0c92eae70"
  },
  {
    "url": "src/lib/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "sw_.js",
    "revision": "23bb3a2070dd177f40d65c1231bde89d"
  },
  {
    "url": "src/images/main-image-lg.jpg",
    "revision": "05b87e478ce30957f4e2f00b5c18f80a"
  },
  {
    "url": "src/images/main-image-sm.jpg",
    "revision": "6172dffd0848144bbc3f7504d8585058"
  },
  {
    "url": "src/images/main-image.jpg",
    "revision": "489ce4c1c7ebc7545aa528cea56e50c1"
  }
]);
  workbox.routing.registerRoute(
    /.*(?:googleapis|gstatic)\.com.*$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 3,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    }));

  workbox.routing.registerRoute(
    routeData => routeData.event.request.headers.get('accept').includes('text/html'),
    args => {
      return caches.match(args.event.request)
        .then(response => {
          if (response) {
            console.log(response);
            return response;
          }

          // Clone the request - a request is a stream and can be only consumed once
          const requestToCache = args.event.request.clone();

          // Try to make the original HTTP request as intended
          return fetch(requestToCache)
            .then(response => {
              // If request fails or server responds with an error code, return that error immediately
              if (!response || response.status !== 200) {
                return response;
              }

              // Again clone the response because you need to add it into the cache and because it's used
              // for the final return response
              const responseToCache = response.clone();

              caches.open('dynamic')
                .then(cache => {
                  cache.put(requestToCache, responseToCache);
                });

              return response;
            });
        })
        .catch(error => {
          return caches.match('/fe-guild-2019-pwa/offline.html');
        });
    }
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}