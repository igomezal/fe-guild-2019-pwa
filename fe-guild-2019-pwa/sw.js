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
  },
  {
    "url": "src/images/icons/app-icon-144x144.png",
    "revision": "050a7610f4084f31aef3ef7404b7509b"
  },
  {
    "url": "src/images/icons/app-icon-192x192.png",
    "revision": "765f2d45ccaf4d0a1e7cb03b4fe38e85"
  },
  {
    "url": "src/images/icons/app-icon-256x256.png",
    "revision": "f4e23ce75693183534b472268c523439"
  },
  {
    "url": "src/images/icons/app-icon-384x384.png",
    "revision": "a754850be0e25239bc35596db90b5392"
  },
  {
    "url": "src/images/icons/app-icon-48x48.png",
    "revision": "f3e3765f04c3938f1b2fc0bc03da3705"
  },
  {
    "url": "src/images/icons/app-icon-512x512.png",
    "revision": "a05a7f65d7b2d8262e0177ca5509a555"
  },
  {
    "url": "src/images/icons/app-icon-96x96.png",
    "revision": "9e5ad87d6e91793eef1fafdec0947075"
  },
  {
    "url": "src/images/icons/apple-icon-114x114.png",
    "revision": "5b31744d4ff76749a7a427a7075cb7f3"
  },
  {
    "url": "src/images/icons/apple-icon-120x120.png",
    "revision": "1950c43912f8a0ba4773e36cc9e1dd53"
  },
  {
    "url": "src/images/icons/apple-icon-144x144.png",
    "revision": "c0cff6a826da19e69e4c4e488d2b424b"
  },
  {
    "url": "src/images/icons/apple-icon-152x152.png",
    "revision": "729653064d04e79961e9d6675b4d1c34"
  },
  {
    "url": "src/images/icons/apple-icon-180x180.png",
    "revision": "fe342f978eeabb3216fc378389af51a9"
  },
  {
    "url": "src/images/icons/apple-icon-57x57.png",
    "revision": "8e26f46a1b9a825bba40c41a74fc7ec3"
  },
  {
    "url": "src/images/icons/apple-icon-60x60.png",
    "revision": "30352b6919f0965bd413fcac71d6c38b"
  },
  {
    "url": "src/images/icons/apple-icon-72x72.png",
    "revision": "88897b41afe488c6702ad1a737d30507"
  },
  {
    "url": "src/images/icons/apple-icon-76x76.png",
    "revision": "14d18668b3370067e2eac68a5e1c3594"
  },
  {
    "url": "src/images/splashscreens/iphone5_splash.png",
    "revision": "b4cb492d1a71285499556b3a4db463d9"
  },
  {
    "url": "src/images/splashscreens/iphone6_splash.png",
    "revision": "94a7c37176d4a99beb457b2f4c287597"
  },
  {
    "url": "src/images/splashscreens/iphoneplus_splash.png",
    "revision": "55504707ab273b825d003a41586125e8"
  },
  {
    "url": "src/images/splashscreens/iphonex_splash.png",
    "revision": "d8173ea794dafb84f05a00cb1787bf4b"
  },
  {
    "url": "src/images/splashscreens/iphonexr_splash.png",
    "revision": "54ec9f2614768bd555120355e0eb313d"
  },
  {
    "url": "src/images/splashscreens/iphonexsmax_splash.png",
    "revision": "3bf8c1fd4113a9eb651d31b6a7d38489"
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