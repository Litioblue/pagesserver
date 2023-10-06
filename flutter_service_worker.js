'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "cd7e30411e3c58c0a48bf2ce9f579a42",
"assets/AssetManifest.json": "96ded49cb40d1eaff1279bca8d2b0bf7",
"assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"assets/assets/images/divipola.json": "2f990dec14257fecb802b0a3d641bc1f",
"assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "530aa3f4ffa5df172a30ca1a1b7a437b",
"assets/NOTICES": "3f86c61612b66ddc0faddfcc4c13e987",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6861847b685d609ca681d8081d340125",
"/": "afd10073f0d5175a8469ac448ada4dba",
"main.dart.js": "aa0f99bff5a9908ff983aba371741752",
"manifest.json": "a37b37f1c3611bee1727e2d83ae07096",
"pagesserver/.git/config": "be1d366ea61156d085bcf42b148f611e",
"pagesserver/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"pagesserver/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"pagesserver/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"pagesserver/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"pagesserver/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"pagesserver/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"pagesserver/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"pagesserver/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"pagesserver/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"pagesserver/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"pagesserver/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"pagesserver/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"pagesserver/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"pagesserver/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"pagesserver/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"pagesserver/.git/index": "2845e814f86f4fbbe5fd350c73863fd4",
"pagesserver/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pagesserver/.git/logs/HEAD": "0573eee404bfb9c07bd1d08750ae818b",
"pagesserver/.git/logs/refs/heads/main": "0573eee404bfb9c07bd1d08750ae818b",
"pagesserver/.git/logs/refs/remotes/origin/HEAD": "0573eee404bfb9c07bd1d08750ae818b",
"pagesserver/.git/objects/pack/pack-debf068ea3712d84111adf1823e88c1e55817f4d.idx": "4c7c51873554b09cc57e0b4cc848ff8c",
"pagesserver/.git/objects/pack/pack-debf068ea3712d84111adf1823e88c1e55817f4d.pack": "e17c232d4a82c8005afdbae536b60b36",
"pagesserver/.git/packed-refs": "0fe89179ef2c6b960fc4d5b8dd784566",
"pagesserver/.git/refs/heads/main": "3bb35ab4e419c19962ce2bafc8d4d174",
"pagesserver/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pagesserver/assets/AssetManifest.bin": "cd7e30411e3c58c0a48bf2ce9f579a42",
"pagesserver/assets/AssetManifest.json": "96ded49cb40d1eaff1279bca8d2b0bf7",
"pagesserver/assets/AssetManifest.smcbin": "2d517a9216055b47939aa273879ae0f8",
"pagesserver/assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"pagesserver/assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"pagesserver/assets/assets/images/divipola.json": "2f990dec14257fecb802b0a3d641bc1f",
"pagesserver/assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"pagesserver/assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"pagesserver/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pagesserver/assets/fonts/MaterialIcons-Regular.otf": "dbb25068da9c5a6976ac033929c7f7c4",
"pagesserver/assets/NOTICES": "6e54d668bcb2886c50cc19a4a25aae35",
"pagesserver/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"pagesserver/assets/shaders/ink_sparkle.frag": "9851c5ed1da0cd856f0a970c4ceae2ab",
"pagesserver/canvaskit/canvaskit.js": "2530e95ad88e471d9aa975ddc1db129e",
"pagesserver/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"pagesserver/canvaskit/chromium/canvaskit.js": "3de7f403fb78f28baf27270fe5047484",
"pagesserver/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"pagesserver/canvaskit/skwasm.js": "34e34e7a2e189187d41369f3205ddb7c",
"pagesserver/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"pagesserver/canvaskit/skwasm.worker.js": "b3863a3012fce5442e482648e7f6e763",
"pagesserver/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pagesserver/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"pagesserver/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"pagesserver/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"pagesserver/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"pagesserver/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"pagesserver/index.html": "afd10073f0d5175a8469ac448ada4dba",
"pagesserver/main.dart.js": "9a6f9a10ce22ec9adf7024a3be7490cb",
"pagesserver/manifest.json": "a37b37f1c3611bee1727e2d83ae07096",
"pagesserver/version.json": "41a12e70246aaa7541289283cb211d80",
"version.json": "41a12e70246aaa7541289283cb211d80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
