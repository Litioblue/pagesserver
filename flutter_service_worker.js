'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d2539148f53ea7dec7f2f49dbd391c55",
".git/config": "387fd5e4b8e5a50dfc610938fa8263f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "728f250dc140798272e7f5552a8d3f32",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "2e64eafff157fe81e3838f854f1185da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06a4b995a9921513db384919341752df",
".git/logs/refs/heads/main": "06a4b995a9921513db384919341752df",
".git/logs/refs/remotes/origin/main": "a04f8b9ceca5af473259ccc5791bbf12",
".git/objects/02/fd0097c3c0d48023084705ffb946038567463a": "d14f1ab15cfe94062be31674a228818c",
".git/objects/10/446371506eb94c1877e3c9cdd93a6f5a3aa1d1": "db2368bd4ea015b57d4242169645aec9",
".git/objects/10/48f0ba4014725d28c0d7a1a5a71a7ce726da8a": "28d2c60cedb675b504d7d92cb921c1e0",
".git/objects/19/a8e4a623ff8e79b925667a7a3e0949859ded95": "1951c84bbb885cca0db9fb849cd3b071",
".git/objects/1b/79e19b4f56bdbc23689341fab8ccca2c9b4aa4": "a6bfc4dd4dc10e7ade01060cded37989",
".git/objects/44/e92f60b02c16c5cf2ecd4495ec6420d5bca94a": "6c49805a69abde0f8c7e15fb13d3413c",
".git/objects/45/0456a6d065f08ad73684ad3e805b085dcc9e0d": "e0d7c9f2c69bff5f3f6ac944bd936b29",
".git/objects/46/acd3842e8eeee080e0f64f2109ae9b82167734": "ae6855247616f56a017b68466ae4ea06",
".git/objects/63/6044332692521dd1d024cddc1478995609ac59": "c39f407abbeb1544992b683fc7cf4e74",
".git/objects/6d/4fba9531b601d35a01f66c2491bbc48e236ac0": "6e947646539d3be0d93bf8ba4bf30a28",
".git/objects/75/8e78981541e8595cee225dd2d7a61d2ffd7c89": "9ba81fedd4b1795f59f8a16809be1224",
".git/objects/77/1e226f746f65d3d945ef739dff8e25ee0efe86": "09f89adf0795b66b93e4011700bc7085",
".git/objects/78/a71fc84608b21104990cea5a0059c623f91cc4": "4dd0c1771740f014e405e5191d74b54e",
".git/objects/7a/48e766c2e85c69bbfabb7c6d65f2d2becd10d9": "aef95a3f17fccd9c73d116f1ad7bb6a4",
".git/objects/7b/6d1423fb26e60d79ec6ae21cdb8af6cbe57287": "c51d38147f18ed1dbd8f3f3c5efb0dc8",
".git/objects/93/e937fce5c7d12dca067b598b4d606c29ee42c3": "7d04048ec4158205615ad8afdfa76312",
".git/objects/a2/8019f3cdf683c0bcfb8891a243471f63521ffe": "7e53dfe314f8869a6ab6f2a49df3f18a",
".git/objects/a3/57bfd3058c4625292e8ce2ffd234f1ffcfdf14": "3f81413ca1947a5e42ce789529a52295",
".git/objects/b4/d4616313a18ecc859e512c8230e5344b96c3b6": "51dc0d3d7475fcea5ade8f980533bd8d",
".git/objects/ea/557bc33a0fa8c19fc30edc62f91f30bf364fb1": "8e44eb05ba89d8a2eff68f591fa0864d",
".git/objects/fd/b00e7afbddda45dfcb5bcd47ab3ffcb9af84a6": "81fd06624f296b79ad754e9a5f866f3e",
".git/objects/pack/pack-b855aed33b9d6906352f1581616f5811dee4e041.idx": "0902e7d302ede95195472d5a03afc564",
".git/objects/pack/pack-b855aed33b9d6906352f1581616f5811dee4e041.pack": "dbf83d43bb345166acb6bf8ee64211a0",
".git/ORIG_HEAD": "65754ba8981787e3e8aac6ca44162ec7",
".git/refs/heads/main": "65754ba8981787e3e8aac6ca44162ec7",
".git/refs/remotes/origin/main": "65754ba8981787e3e8aac6ca44162ec7",
"assets/AssetManifest.bin": "cd7e30411e3c58c0a48bf2ce9f579a42",
"assets/AssetManifest.json": "96ded49cb40d1eaff1279bca8d2b0bf7",
"assets/AssetManifest.smcbin": "2d517a9216055b47939aa273879ae0f8",
"assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"assets/assets/images/divipola.json": "2f990dec14257fecb802b0a3d641bc1f",
"assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dbb25068da9c5a6976ac033929c7f7c4",
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
"index.html": "d51b25ed5fe616252d7acef485d58a29",
"/": "d51b25ed5fe616252d7acef485d58a29",
"main.dart.js": "ee29b7f2f2bf1be8ee42a1f68103dce2",
"manifest.json": "a37b37f1c3611bee1727e2d83ae07096",
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
