<<<<<<< HEAD
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f1e681f1716a87186a4a23a4cb894b3d",
".git/config": "be1d366ea61156d085bcf42b148f611e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d42941736e9a3931fcca764cb14d54d9",
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
".git/index": "abd60d67ae9213dc92324d707ceec8e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44b58b7438f668bc41503c7844ea4202",
".git/logs/refs/heads/main": "3ee2f14a11d786811184059343640fdc",
".git/logs/refs/remotes/origin/main": "fbb6ee2e3a767aa8edcbb7826032101f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/56d756eec27749bd30e42d4d52fbc7fa4bea9c": "0def2e64f2997001c887a711e698d4e0",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/57634ecb30fad787a4d25e116f2efafdb38d0b": "b71d3ec512c3d80604178f569498cde8",
".git/objects/15/4fde444122a3356361c2f901f128aad079eae5": "efd358bf873a412f076f0dfce64748c5",
".git/objects/18/f995c2eff5dee9e18c08f04bd38e1dff20a8f4": "2dea8fdb3f22e19408dcf17e819ad6c3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2b/6a3d634e555becd05aa1a397e0df14721f9426": "efd013929434c667261f8ce5f2aa8f27",
".git/objects/2d/f29e7ab7d8f9817b5a858f16cd06bb29b597d7": "b0eb652c1d3789c0311bf1593b95cefd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/93d8dd61670ab4c9a83fb1478d0226a49471d5": "92f152978ad858a93a87c63d6ee8c909",
".git/objects/3f/b87c21bf412a4419087d47496627186813827a": "7b5199540895ef8c1d59a800116738dd",
".git/objects/43/2cf1a7d578f8acafc84a3d1bbf128faff07d8a": "6954c7122452a1bb933153474e955acb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/de8c0a02ca6b928445520e9c977c653677f90d": "160f1c43d4d782232503fab1f3be63e8",
".git/objects/55/33f2f60afc941027f125c484eb01dbc4f09c9e": "e7fc6188576a8e67cee6d344fa645493",
".git/objects/55/acc0c483c6b4d90096658bf64ac3497d4d0986": "7683a8cba18ead68bcd784ad20950045",
".git/objects/60/1002a4632d2b05b3eaf47d3101999d9ac90c86": "8b85156e91bd34ed8cf51c980ba95ed1",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6d/6420ea7fa8b72f4e03fe22be1df1162b2c6253": "8bd21ee7c1771985621ec53d13b1fcaa",
".git/objects/6e/77fab43a5ffa35ec8a78e9a19c7eb8a843630a": "f22b0b2ca442151551ca4009dfb687ca",
".git/objects/6f/8495dfcfce438bd760301af87fe4bbad00683b": "19c5f9ae895bdb5f00f2c1ca7cc09ce0",
".git/objects/70/0050441c0620d3f0cd28e26cc45495562a8481": "c9398bd4aebe480bcaf96e49204bbfae",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/9467deec95072543cb3060a7717695903b0bf6": "ea219236ddb4af71025f3cddffe3a0c2",
".git/objects/75/ca9a92f8bb9560ec2d6252a38d7ca969e9b695": "15b01d9886ae9ccba912f66a3b9c0562",
".git/objects/79/7f0ef8469c022293792bf9e9a20b539417f61f": "125c54e9fde7dfd17b869161f88db63e",
".git/objects/7a/032243b655a5ab803fda4400290eb23a82b175": "75281ec45d79aa630dfabeff3c19474f",
".git/objects/7c/77acfb4a4ce35186ea16d8f37c52fd726e23d4": "b336cdabb7eae2a4b5f65c44da2877ba",
".git/objects/7e/3903371244647d81c9035302e8ebd6ed7ed2f3": "b2a8ae8749faf577ce3a69ca1e1c9cea",
".git/objects/7f/d0d310e40ff70ddd84aa879b08cd11a131cd45": "d95d93821803580e47fa09d82dac3f74",
".git/objects/81/4e89e03f641f9309f2c50862f296645a92f805": "0ab832a046a11fff496be1dca2565c34",
".git/objects/86/41c24e7526c68d27f45f82eaa31fd1b965f348": "fe903ac91dc2096cfc7e8ea01dd9b477",
".git/objects/86/ad4e2a8a45f5e350a9197a691212bf1a48480b": "42f6a6218d3c27bc51c8ad543012b71b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/57ca144f404807594613265944c18813095c1e": "a1e015fe7575e0fd486c3e1cc257efaa",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/79a720c6a8a3d69122aad9e7effad10585a69e": "5f309d8ac10e00580dbb6ebaeda4a8b8",
".git/objects/98/942b28ac26f0ef3b6c2306f91cdff77ab4755d": "a8cc42b7063be82c08907fda795017a3",
".git/objects/9c/d64ed523115f0aa883abe35e0c350e1ad45b4d": "d89a97fd2946b8cc30c871a599b5d4cc",
".git/objects/9f/0dde9df6f19accf3b6179068086660019ab4fb": "91a9190ca66607a87506745e3024fed3",
".git/objects/a0/cf1f3144e930c7723960ccc16ef2df0ff6e35f": "96ec0eca9c36dfeecacccbb06c01477b",
".git/objects/a2/9c678caf529b1f97072592b84e34996ef06d15": "067b68117f28d91789d591c2c35698e8",
".git/objects/a6/443a5be4d0dc3dad3e37011987bcb953fc62eb": "16554d94707c7adb8bbbbd6dbec9ff45",
".git/objects/ab/f1873d9ec8bd808083880fd2093872441f53ec": "fa8e86a3a70d8c48c0eb6d5f95ccf2fe",
".git/objects/ad/3e6f83ca00f0f9e3a7c69cf86403e103c29f2c": "d9bead53468307866add3fffd6161260",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/add21f7f1a543c9133ccee986883dfd2c6034e": "fa9fe38d31f31c8edf00463ee35f72e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/615d9b1856e40cda6910c10fe1a9bea6457b0d": "5393885f43d2034644ecc1ffdf27203b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/c7368f8317e7d38a29d6a834a76cbb0b4e7822": "80cb426acd053a5448cbc7e5e959981f",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c8/e151bafa14cd22d7fb11b4a0fa897958454d3e": "7cf1bc072f2a7d603a6da98f3a0dfc17",
".git/objects/ca/c0f1c0eb42dd0a248153f12d1e9ae852845c45": "111688905354652f21e2439277c52ec2",
".git/objects/cf/25f1969c741fd80f2d23d0336ea23877349a36": "d0c8328a6dddd2527a40165b4095bdc0",
".git/objects/d0/9032dc9477a89701f7e49162c551cc7ec81bd1": "578d8c13a415931602994f7785bd79b8",
".git/objects/d1/89afd8fbe001fb2f88ca88868ff9024e779a7a": "4c1bb83287121056e1bf3775586e678e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d4/601cd523405d41c83866e1330b3be59ee5d03c": "b55ef926da4ff83f2b33b6a056ae4751",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/38b5c4032eb684b77bdf21513bb033cecf09f4": "73253dea488f4ec28b4ecab3054143d3",
".git/objects/dd/a64d66c5a167f64c17bb699644f5ee14409aea": "64d04d4853241b689c697faf8a26a0bc",
".git/objects/df/f8ef6d7a0fc596eb0d277636279b7820424904": "16fc1119e3b1ea4e646ef2ff449acf17",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e3/39cf7bd06ea58ff805551b0a8731a59a386f35": "5d8905fea0e7bf43e586a395dc2e079a",
".git/objects/e4/8fc14a1fd85ab6ae804268670a9a1ba0ac884e": "3dcc9223965824f072e4fb1b8a6bd785",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/9ba6b24f9b6f2aa9dfc1360be9c068685501ee": "f954ce58e6c08fccb738249f769dd8e3",
".git/objects/ea/fc4a14f828c7a476af0d3d800d5c7b34778cc1": "3749ff7e2e01f7080d31c4fc2c51425b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7929c5d1fd8ece94384cf61b31de13f52f71fd": "e1cd3b66d0d6d43d6d6d02b668cdefce",
".git/objects/ee/6d8f3b1ece96c3431aeece81c34a2bf5219ada": "0843a3c7deb9ec076fc541ae432bcb1f",
".git/objects/f0/d0e9e0e380acd33f61e67175bd5596789bcc6a": "00f467828aad721edf920c023b779398",
".git/objects/f1/da61c2005bb2c8ba928fcb9879d8f0f8bb8b57": "2c3885386b4fc0fdc4be4f7db8c58800",
".git/objects/f8/a347bed05aebe43f64f3cdd3ae510728ceffad": "0a33e9908aa3093bc7a43226d855f97e",
".git/objects/f9/35291a9afa650c24f40e254f0a07334f8c1da1": "6abe81c6ccf5c3996beb135ea064ef86",
".git/objects/fa/ec4b9910ccdae14e51eb20001f633018a7875a": "40d96180e73194bbb839e4aeb82a0d8b",
".git/objects/ff/3073f5a0208da41f6984908903c5dcd2ca89e1": "bc7de701d9919d6a9ccc0cdff8b13617",
".git/ORIG_HEAD": "b03455d55ead1acfa324d5de0954b79d",
".git/refs/heads/main": "b03455d55ead1acfa324d5de0954b79d",
".git/refs/remotes/origin/main": "8544c47f247acda530fbd3bd7d1357cb",
"assets/AssetManifest.bin": "b43c81238303a831732fe20d01feea81",
"assets/AssetManifest.json": "96ded49cb40d1eaff1279bca8d2b0bf7",
"assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"assets/assets/images/divipola.json": "6e41f39e778dc0a3124adcd6e0ec87cb",
"assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dbb25068da9c5a6976ac033929c7f7c4",
"assets/NOTICES": "3f86c61612b66ddc0faddfcc4c13e987",
=======
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "30b1f845e64e6f90d83f711f58e92519",
"assets/AssetManifest.smcbin": "2d517a9216055b47939aa273879ae0f8",
"assets/assets/images/aedesLogo.png": "9ede2cc4d3b44bc0e42613fd3860da5a",
"assets/assets/images/colombia.json": "e4c1a43ffee9c2fff36995c48bea3606",
"assets/assets/images/ins.png": "f0293e397f132e087986d10f752a3330",
"assets/assets/images/mosquito.png": "43cfc6c32ef7e54f36bb39562da62dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ca7842745f33bfe139337a6997ab49ad",
"assets/NOTICES": "09820e93b629aa5c5bbc4acce4fd573d",
>>>>>>> dda64d66c5a167f64c17bb699644f5ee14409aea
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
<<<<<<< HEAD
"index.html": "3958b1c1cb8accfbf4b6ef70c46c1716",
"/": "3958b1c1cb8accfbf4b6ef70c46c1716",
"main.dart.js": "c1470d2e7d074ae3386a64e8db0826ee",
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
=======
"index.html": "aa29f6cc7baa9d08a709669763e2dae8",
"/": "aa29f6cc7baa9d08a709669763e2dae8",
"main.dart.js": "cf13c60b96c50c11c0ab2a11acac2db5",
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
>>>>>>> dda64d66c5a167f64c17bb699644f5ee14409aea
