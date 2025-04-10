'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "132e938a3853cdac90f0b6641d1ba1e2",
".git/config": "be1d366ea61156d085bcf42b148f611e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "22500f89686847674600ea79a60d683f",
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
".git/index": "9ab039d880e59a386a0c998d5971425f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff52995980fdb2240815118ad82f905f",
".git/logs/refs/heads/main": "eb682416e1e1ffabe3955f3050df2152",
".git/logs/refs/remotes/origin/main": "eeb0bddb2914b257419fea407d770a23",
".git/logs/refs/remotes/origin/master": "7adbf6e2cb457fa21bdbaffc2525be6a",
".git/objects/04/16e576172726b5d32338b5da94c2bf58b2b4ea": "7cc59601a979a4be0484fa1b42c49b74",
".git/objects/07/12a1b3422fca6bba8bfa25f12571f7b8c6bf78": "03623871e6114256a7085544392e3d9f",
".git/objects/14/2ddbf1350ad0da8d6dc32c725df00f8488a1d8": "a0920792c1dd22f30efae8bc434934aa",
".git/objects/1e/6c453030f2bab14406312285f03c51d621f8a8": "cdf846f93f88981b2c3bc568cc3dc2b4",
".git/objects/23/cec48567fa3b66f97eaa14f84ea3dde962c389": "feb6edb0d0a0bffd11cddd2b8d07f631",
".git/objects/23/e9be8f1cd7712d5f496a18acc618389e4991a4": "ad94bcba4e1a0a86aec131f8cfa74c60",
".git/objects/26/77e36f015edf616e254075b91829c282d5f711": "eab308fceadd1ce29fe32b0fed718cad",
".git/objects/26/eb85da043db08001c619624e2380c77a327e04": "d95f3780d9270821628564b106a6e8e7",
".git/objects/27/057552cdda816830473f48947eaa5aae4476a6": "473b6108e268c04da866478f247a4a17",
".git/objects/27/b157dd38bc3800eab0dc8b37701f8debf8cd61": "2a7f7ee27bc6a5b18a27eb006227c59f",
".git/objects/32/1ec6e948bd3701b97bd43a3b2add155d8fa0a8": "523b767b242a1442fe257f38d79f9e11",
".git/objects/47/fd9cc618a87d7837c099af7d85ae8769dfaa65": "90b31c2d5196a5c09db1f26f71337d4f",
".git/objects/53/581f60bbd19e70a9019f2f6b312217218a180f": "404c88b2edb42be3975c410be3a427c0",
".git/objects/65/71280f3bf1d88ac459ef082f1f6509b8b88d22": "0a590789788953d8740f6bfa6fecefdf",
".git/objects/7c/6c262e406f83de086e402e71ffae6f6f69bac5": "9722eabe9f0839e865e005da99191be1",
".git/objects/8d/2d4bb56edb61e76948465c7252c285e9e770a2": "cd975997941f49226a63698a2818a792",
".git/objects/93/6af66c54173ba3fd25110565da467be43bf407": "e2182bbf5b966a8360cfb45e226bf7b3",
".git/objects/98/aba1d13a1816453e8a8bea306517cc5210e968": "787b0abb8898fc839e8a3e572eb0ffab",
".git/objects/9b/a94005e6ebf49c1bcf73f6493853ff4bfa7f25": "6181f6259b26e606130a22598afe1758",
".git/objects/b8/fa0c79a8cbd62f2d9ae2d0958450c25ed67266": "7f79bda4aaaa35068c1f0c47da44591a",
".git/objects/b9/1e8bc06a87ddf0026e7ca5e8e36fd4f2ea4510": "df7c51b156a948a96f59ec068a8f9ca9",
".git/objects/b9/2b86e47ba129fdbf7e32a6c0d36d5a1f7959f9": "6f5629f8304d67cc78054f3d1ef31873",
".git/objects/c4/8900b25071a4a8f5955e98f0439745d9c465ac": "165f24f09ce1e8c025ad49f2bb38dc7a",
".git/objects/c5/b7156f11e07fac3f5009b1c219056804c996fc": "f0b7c14aaacd3b062f4b27eb325b4b13",
".git/objects/cc/a9b1df2292d87e60e320fd411f5c50610be213": "05c806c0e2bf377a75b863e7c62d3652",
".git/objects/d1/bd213564bf09f44e56479bdc826553d3f9eb5e": "be8459ad8bbef199febd8d2992508aa4",
".git/objects/d5/89640e5dfb9381a3f5f3c239eced107182cd38": "770f843ece97b0755e2490f56b7a023d",
".git/objects/dd/23b6620b54ea7dca38c4cea0d48c510d726fba": "8b5183bcbe4a51fcb86431ff163aed37",
".git/objects/e0/498edea97beb9df9c23bf3483f18919c5b0957": "c5cac6e07aade8f313d0f85c979b734a",
".git/objects/fc/2798728ef2c510b44da9717ca5474aedb97355": "f147611c2fe201d0500d132c56ef269a",
".git/objects/pack/pack-0c2b6d720dfbb7f2cd77170ffb6d57e748fe9c27.idx": "3f6feead5c0eb0dc83232e78f1874bd6",
".git/objects/pack/pack-0c2b6d720dfbb7f2cd77170ffb6d57e748fe9c27.pack": "0d715a53ae50e4568b14157fd57d04f1",
".git/ORIG_HEAD": "1d9e5277dde2b151a529c832b5105859",
".git/refs/heads/main": "73857a0d90087800aed38750ed0f40e7",
".git/refs/remotes/origin/main": "73857a0d90087800aed38750ed0f40e7",
".git/refs/remotes/origin/master": "324a0151964c19dd33e7c92bc96f3d02",
"assets/AssetManifest.bin": "cd7e30411e3c58c0a48bf2ce9f579a42",
"assets/AssetManifest.json": "96ded49cb40d1eaff1279bca8d2b0bf7",
"assets/AssetManifest.smcbin": "2d517a9216055b47939aa273879ae0f8",
"assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"assets/assets/images/divipola.json": "2f990dec14257fecb802b0a3d641bc1f",
"assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "417698059304cd0910e454be96d5a8bb",
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
"index.html": "52ed07a5841c9f02e3d9d00e175618b7",
"/": "52ed07a5841c9f02e3d9d00e175618b7",
"main.dart.js": "99a8890ec017725fad5ac800abe7e6e4",
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
