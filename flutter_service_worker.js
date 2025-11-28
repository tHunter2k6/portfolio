'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1e0b31e5ad65849d037c2d0db4b005c2",
"assets/AssetManifest.bin.json": "da2a0aa737746281e51a3ed2f1915ebf",
"assets/AssetManifest.json": "841901e911a9554a1138c8f0372d89ae",
"assets/FontManifest.json": "f909fc11985adc1b48f1ba3f00cb47aa",
"assets/fonts/MaterialIcons-Regular.otf": "726c9fc8178e05383dd27274b00dc39a",
"assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/lib/assets/2.png": "1bed421fe5219364e615530dee33bf17",
"assets/lib/assets/3.png": "e1e5c34d2133f5246cf65c433264cded",
"assets/lib/assets/4.png": "5e36a1daffcf654cae103f4ec22519f9",
"assets/lib/assets/5.png": "de7730af7d3b740c716ef14c55ef3d4b",
"assets/lib/assets/6.png": "8ed863d9762c75d6922a49c8604492c0",
"assets/lib/assets/7.png": "9a324a49fced112a0e5ced55524398e9",
"assets/lib/assets/circle.PNG": "6854fb2903aac52e8a983c37f748c5e2",
"assets/lib/assets/dac.jpeg": "9018f9037eb2f9e5fb00950222d389c0",
"assets/lib/assets/dac_bg.png": "92cf0fe996ab4d273ba9a6db8b4599be",
"assets/lib/assets/forex.png": "06f6f0e597ed4f0fc72cbaa29b2d2886",
"assets/lib/assets/forexCover.png": "8d18964336640e8726c032cb12bea98a",
"assets/lib/assets/full.jpeg": "f39dd70f55e09fa9a07a929aec234c46",
"assets/lib/assets/half.jpeg": "6c09771e8b656bb6f537c61ceafeea2b",
"assets/lib/assets/huh.png": "bbd39d3577871a545e4ca0544ca467bf",
"assets/lib/assets/ig1.png": "874d733b0d58a7ed6a62a8673cf2c0f8",
"assets/lib/assets/ig2.png": "58fcfd525ed4c2f2ee72224f1769e28a",
"assets/lib/assets/ignite.PNG": "eed9bacf41cf37744abe77dfbdd0662b",
"assets/lib/assets/igniteCover.jpeg": "92afc824e449cb5970756a28fec31b38",
"assets/lib/assets/ignite_logo1.png": "5de553a2cc40f081973b2f31ce682398",
"assets/lib/assets/instagram.png": "850db33d2e953501678b3bba2d25359e",
"assets/lib/assets/logo2.png": "fc9df631f561781b76d78aade614e9dc",
"assets/lib/assets/lr1.jpeg": "c1f0c7cd272fa0d54d0a48b61e34f123",
"assets/lib/assets/lr2.jpeg": "2ad7ad54e1b36c987a89002867b02ab8",
"assets/lib/assets/lr_logo.png": "fdc8e4a32cafddb5e5d48bf8dfb3492a",
"assets/lib/assets/my_logo1.png": "0e1b40e477b44b6faece289d3a0a5cd8",
"assets/lib/assets/pic3.PNG": "f063612c3fc2f601ff46dbda82b06664",
"assets/lib/assets/sciverse_logo.png": "fbd8083f8b2a184a81e35a8ff1fea9aa",
"assets/lib/assets/wardrobeCover.png": "9866d6b30bab95dd1665a4cd6f04fb39",
"assets/lib/assets/wardrobe_1.png": "51be4b17ca58636fbf5b0c5c81100690",
"assets/lib/assets/y1.png": "e8f66d42e5b75d97fbfa0e93c23db8c0",
"assets/lib/assets/y2.png": "786d1013297a3f5a1226b2595f2b26ba",
"assets/NOTICES": "350eeda350ecf9e256277aa6ad480e21",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "10085eed663e97133411d55f2ff36a1f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2d8a2b7675b1c32bc71923a2af921649",
"icons/android-chrome-192x192.png": "2b5db905b5950ed882ad965bad8ea81c",
"icons/android-chrome-512x512.png": "ba0ea732ed806894efe01741d96361ba",
"icons/apple-touch-icon.png": "3d80da613bae1dd422738b31aceec8b7",
"index.html": "d9af80ced268c205c80de1fc3fbb8095",
"/": "d9af80ced268c205c80de1fc3fbb8095",
"main.dart.js": "68eb0d747f2a5e9290712d154918077d",
"manifest.json": "6178d8468cac404510dd8c157a72cf81",
"version.json": "707a01ddcc10ab0f634057b5d16300dd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
