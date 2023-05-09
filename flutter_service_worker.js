'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c4344cbe4c7a2864700952b8ae8c1bfa",
"assets/assets/bg.png": "85158d0fa13909278913d64e9ebdf7e1",
"assets/assets/bg3.png": "07fd7a561f0cde18e07bb3bc3c3df99c",
"assets/assets/fonts/Sono-ExtraBold.ttf": "5b624abd9611b4ac575881c6d27e2b56",
"assets/assets/images/app_logo.png": "54cce0a774d330522891f7d4e5134f9a",
"assets/assets/images/event_ic_facebook.png": "a042b38f5a4495c7730a9bfbb226d25e",
"assets/assets/images/filter.png": "0244381c6e4127ae51577543b49100c9",
"assets/assets/images/logo.jpg": "9c6138d321c9de1236a5cd5865628b99",
"assets/assets/images/london.jpg": "1fa2553ccdd1266a6e3b0f39d8cfad81",
"assets/assets/images/map.jpg": "3cc8f2107dacc12778f5889b352af629",
"assets/assets/images/mission%2520bailar.jfif": "61b89805884abf9facf82d65e8fbb4b2",
"assets/assets/images/music.jpeg": "90b9d70f4a5ec699526047b178b3710a",
"assets/assets/images/newyork.jpg": "255755abf683ef30e6c151738a69bcb3",
"assets/assets/images/nuernberg.jpg": "40fb320d086c9a55be8e74f2f896f10b",
"assets/assets/images/onboarding-1.jpg": "3dc8317c53c3d216fafc469e0a34c94b",
"assets/assets/images/onboarding-2.jpg": "7eeb0e8a58edd5c1357ac635829f35f2",
"assets/assets/images/onboarding-3.jpg": "d09c09d9a71fdc71d4e0cc6a22677204",
"assets/assets/images/pageview1.jpg": "d9811f572d6fff895cd3011bd1943374",
"assets/assets/images/pageview2.jpg": "e8afc0facc2a8f86d0032bf23abdb71d",
"assets/assets/images/pageview3.jpg": "39b3711ba1fe2ee6538e90cb3a7e2807",
"assets/assets/images/paris.jpg": "4785c4be197e5da7145318f09251b702",
"assets/assets/images/person-placeholder.jpeg": "1f2e1b61bf6d30ab360148186f651d13",
"assets/assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/assets/images/tokyo.jpg": "5b207a4b4e844bdac6225a6599a38a37",
"assets/assets/images/upload_placeholder.png": "4d4ee5ddb84ee06175ad8e709c835ef1",
"assets/FontManifest.json": "4483e4fd5ce34d8a22fc7f9487da0eb2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "652e7cdad34749d896b9a8252ee1972e",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "1566e823935d5fe33901f5a074480a20",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "131c9c2f531fd44cd50a532db60eb65e",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "857306b2f1e39cd898719b7cf534605a",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "18a956f0d88ee6ad4db46658c7c74631",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "9204d39e3c19afe4c1a94565baecf0f9",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "15b1cdbc59f39c3e542fa143be6e3b7e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "0f940d4ce2d2e5e03235735a2d44862f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ic_launcher_round.png": "4c1b798ffe322ebf3ec9aa4c47e13377",
"index.html": "ccb43f4efcddad9410c61e0b35a123a4",
"/": "ccb43f4efcddad9410c61e0b35a123a4",
"main.dart.js": "1bf7fce62aed58198e64ec53e9cd9cf9",
"manifest.json": "8f86425a7cfb85a0f04246e146cd9eec",
"version.json": "e29cec59698af6bdf88d6a7b5c412317"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
