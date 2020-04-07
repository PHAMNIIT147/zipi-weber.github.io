'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "44fb7db8adc557df990c6c4bf5fe116d",
"logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"manifest.json": "ed75e0c7f0cd16aca3e0a4a6c3e2050e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/LICENSE": "ab2aa3d841e136ad7140eae36887ee32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/logos/logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "6061b7fe1826f1e5f9df61308ef400b7",
"index.html": "80476d165942bde41c2fadb50702d621",
"/": "80476d165942bde41c2fadb50702d621"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
