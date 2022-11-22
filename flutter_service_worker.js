'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "750e46abb3bfe56046ee9e2abba939e8",
"splash/style.css": "b8de6f14d56ecffdbfa1fa36fcbe4f17",
"index.html": "ff4517348411e61a77d6d2d1aba6b722",
"/": "ff4517348411e61a77d6d2d1aba6b722",
"main.dart.js": "bab8abff3a5377bc2c764781508fcc61",
"favicon.png": "b1dab54154bd0762938cfc5f0a846666",
"icons/Icon-192.png": "399ad5a7cf4b2afdadce6fa6d5ca533f",
"icons/Icon-512.png": "5a2e0265fe5252606f97fbb040dc8e1e",
"manifest.json": "a42e2680ebe916dfa29b0766f5cd9db8",
".git/ORIG_HEAD": "24797d3d79f5b5c9aaf0322e7efefc2d",
".git/config": "40717727241204ce18a63a62ea548b71",
".git/objects/0d/beb91956aee086ea467ed0878c215205580839": "1e6cf6ca29f2196e96318dfa44035525",
".git/objects/0d/c12daf680057c8227e32f58b5427af47fdca71": "d13ac772b70874e4e7540b8285d0d491",
".git/objects/92/da08842c6eb13c83bd38bc350233c983960f0e": "c48f8c969f8bdcd8c43dacb2cb60a249",
".git/objects/50/f772b0cbc1f794010d1399f668b756b3e620e7": "6bfeb758edfbf88d297cf8caad65f07c",
".git/objects/04/c7bd15d62600f4be4fddbcc0c44b821aaf88a7": "e120d6335e89d205342128ed65b73d97",
".git/objects/35/c788f5287358146386db5a587e8175853a9b0a": "96cf25caac1493c46d5b9ef9cfacd404",
".git/objects/58/04b7380a933818d271c0b953c6ae1f658845d8": "ed0f0a600a34e10c672758a7c726769b",
".git/objects/0b/8ffb60d6dbcab4d3ad4cd12c9065141406760d": "8954630d9a93837059997dd8da11baf6",
".git/objects/93/44328874ab6fb8a7238cff40b1909e2292f520": "055523d39c8ae9c9c732daa8f34716ea",
".git/objects/93/12e5693fe185af8196effc3708f49635202e3f": "fb62b3c384210726f4cc39d8cbbdc0a8",
".git/objects/93/05de421366704fb3646380c5fb755325c8169b": "6018a0f0a9f3cc800b18e7ee2498addd",
".git/objects/5a/661dc9c1374410b1f07b03049cb546555f1b91": "dc372050da540bd730abd79838653de1",
".git/objects/05/3107684d2ebbbaaab43c67162428c8c5ecfa15": "ca992a7a0f5fe313d44f9a6243e9d5ef",
".git/objects/b5/f35dbcd5efc840950c99301fb56b277a04e13d": "1171a9f5b60cb2725495ff57b1981340",
".git/objects/bb/7b3f6f2c8498543a74644064d72234a6f5548a": "b1b55af5bc72a03308c72e5e8d147ae6",
".git/objects/d7/fd735ca0d591c7731dfdcc0deaf37a1e3d8361": "91f1aa2027ed3d4a750c9be9908bc32e",
".git/objects/d7/46a6962c681a5a2f2b873100154951d1a78f8f": "cbaf3d40a08242077078247bc55f28ee",
".git/objects/d0/d401f8fed13fac7a17da09dbd302babad4ec46": "cc6e9faea5a9cd16577b8ca19f73aa29",
".git/objects/b3/7a72550dd4f2e23fe053ce2b1f0207cb2c9677": "bab4864f205cfddf395952a3d5c4e91c",
".git/objects/b3/22446b3462ed45051de4174d43a17c5857dc29": "4d3571df93a25b689f510c6e344b852d",
".git/objects/ae/f32a1dbd8514df39c28f3da85ba5da0f02d2a9": "431d2fb2c89c03cbc9d942cacadcb95f",
".git/objects/c7/8a8d6ec4f88c2c8426a7c986a8f88907ccfe74": "51e13838cee6a2962915870effa81ec0",
".git/objects/c9/a1aa485c9f4453cb37b813a521f4eaf8876346": "ec8ca54f6911bdbac0ce82b65bb65103",
".git/objects/e4/4eabf9774674e96a95fac8c2d2dbe939d40106": "4ecb78dc3648df86a4e1503d49889e44",
".git/objects/fb/18df91bc64ffb563ab3b7f8b0de315e084e6fb": "c0178cb1970a27064fe5f92ec4a1a0c2",
".git/objects/ed/9f92978a3e54206ec99a10aa905dc88cd6728c": "83e6cf09d05be31d6a6515dfdedcba72",
".git/objects/ec/b333363b3b340ca0e7d3a1fa888ba8aa38bd3f": "626d53530b21e26eb649052f4bcbb0b8",
".git/objects/ec/5c943082289b15df114138841b7cefad942685": "d30b07fb25a82d1b36986cf2e240943f",
".git/objects/20/68a2a4e2a8910ce231a3e20ade0211cdf87f65": "e3df53269f71583cb9017aa1a1600ca0",
".git/objects/pack/pack-e23d9466717faf747d0772994816ebe239e77a4b.idx": "e68d4fa04f4163cbd2b3e2f627818583",
".git/objects/pack/pack-e23d9466717faf747d0772994816ebe239e77a4b.pack": "e0ada0304ee3e2af6b63bf958a3a0dcd",
".git/objects/11/ad2be960327f32b7a7e135ed4bdd05f95ff078": "9eb76d41e6cd459899389a7eb01f144a",
".git/objects/29/cdce26191ed027d95c75deaa45c13500f6bc09": "12617eec0247251cc8d0537526a44ca5",
".git/objects/89/d04f9cc1ac3707e5bd74d547deef101d13e175": "1f884041b14acc88c82c476e21fa29ee",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/80/879e57a52c6bba2ab742f1addc7f47dc99dfdb": "478b743ba46df68ae381afc420b4ea64",
".git/objects/7b/b109305e9c7a67485d56c82571a4cb9e383214": "27be6e1b778f8d83c3edcd78d37989ce",
".git/objects/2a/713027175c777e728ac3e6f2c6e392927092f0": "13e9a0dd807fcc9f149782856b717361",
".git/objects/2f/b046d94cd0fbebd6ecf07e6bae484b0c29f185": "a88d83c670e0bd23e5042750aab28f5d",
".git/objects/43/ad1fb6f953ccededf76b73f75710cb7d7eaade": "190191dfc966bba9bed2c8bb68e228d0",
".git/objects/07/932c202c3737156f368abc51daee2cb1a04c82": "dced2949feffa0c75936424c5d305ddb",
".git/objects/36/e4045568690f6cb20f33a4fea2937d5d3933ed": "61fe7804d79c4ab784bb85bed82ea228",
".git/objects/5c/3b706c91fef774bbf61c0310e2289cb1842596": "22fbccb03ec6d48d3ed90c68cb556ac9",
".git/objects/53/671be574567b7c6ee5b1ec6964f2e6e8504d91": "b05f7f8f37830eb50eb367153c5b97e8",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/a0/022b38542d1264c06e8a8c3a60987bf0a10db5": "68e65bb4fe30bb892f8c8874c32a36e1",
".git/objects/b7/5aae162aed53144d87c613f3fa8837f1eca14b": "41f50231c5bb5151503d84b666973a4e",
".git/objects/f0/307f3589d6260c98e13731010242e3dd064823": "50e079eafc44fbbc99af42e57e236064",
".git/objects/ff/843ecaca38d4c63b24e1e0e185d623058bc443": "aa683ce318c2460157e4dd0c8cef46e2",
".git/objects/c5/83d5352ed8415d7a39a319378b0664f7c15dd1": "d6205ee99ff22afd226ab59de9d5dee4",
".git/objects/f6/f07e5d0974a5d6f439425d21ef78b1a8538ec2": "bbfe8d5bc22227c08c7830baf04784fe",
".git/objects/f8/f767a140322af0e4a4b8111c4c7eaba36a3f87": "613b2b7adf9247f7d286a42574db1703",
".git/objects/2c/4f4248452715382d6d7cc59fd13eb9b0721017": "c9698584c8a08632ed1b7ab6d43f9746",
".git/objects/77/620d9fd470e39ec47622c501f470712a395e8d": "834be74680e12c63c505d486d371c3e6",
".git/objects/77/6d320e7c54c03ad3aee4a6613cd84f4962910a": "304de5ae261e1d8136cac84aa339166b",
".git/objects/84/960b72b66627fa0f41f4dbc8e5e150240cc97c": "b8a325129cb701f0c51f1d13f71ed5c9",
".git/objects/4a/5af4c2078cb1298784a98d9b20b4988b1fa030": "826d467a3768bb988a234bfff6201742",
".git/objects/2e/875a908e47f9ffd6f85f5959787587734dce11": "a6500bfba55800a2be661454fed3fae1",
".git/objects/2b/9d2e0efd37ebb4f8a3f371cf6cdd23f160f411": "4d534e21e77d1ff0ae4baa38a94141f9",
".git/objects/2b/1c6cf072194949ca889fdfcba4c5417cc9fdbd": "98bd60d755d04d8ad5e29c2375ff5d5e",
".git/objects/2b/45aba55f82fc9c1fa8157521e67ffa4754f043": "d50a49f43999d5b582a9f0cf8c51d797",
".git/objects/14/18c046a267d10144fd9c5cc5d21e130fb86e2f": "863a3ef4287ecae0262baec737786e59",
".git/objects/25/b84e4bf92e9a801169e51a3d29316cf65bf4f8": "66d8db2bb42caf52cc23a04a335848b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c722efd6eab016391f7f932ad014afad",
".git/logs/refs/heads/main": "50c6be4a63b2ca46c0bababcb8590fe6",
".git/logs/refs/remotes/origin/main": "5a5658c4fda338e13a5bfc428856a055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "ba1a7cc213d1997e06119b81a6535ae8",
".git/refs/remotes/origin/main": "ef66cd25f7578876972f4361ba9af948",
".git/index": "fd0470e5fbbae3df7c39d60b97ddc331",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "7d6b10bcf1c141511d1f881134cd904d",
".git/FETCH_HEAD": "20dde78bf7fae0a554dfd08e3bea136a",
"assets/AssetManifest.json": "c8e3ea6457b4f7332bb959294d8d668d",
"assets/NOTICES": "cc031b5b6e296e4d0bc8582ff7065ffb",
"assets/FontManifest.json": "c01ed006695684332924bd670ed30877",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/RobotoSlab-Bold.ttf": "02e1b4cf36619036de47b4ac35b08dc3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/fonts/RobotoSlab-Regular.ttf": "f6b809aa6460d420334f850f6d644a62",
"assets/assets/mp.png": "f702703d835785a86f599ed7b02cde53",
"assets/assets/mangaPanels.jpg": "f503ea1f4b57f53a17ce776f45106aa1",
"assets/assets/genres/mature.jpg": "b070902838e85079833113fec976e267",
"assets/assets/genres/fantasy.jpg": "656d3beb71b51c99d83412a6ff007648",
"assets/assets/genres/action.jpg": "bfad5da0dd454998a0e576002b837b01",
"assets/assets/genres/mystery.jpg": "8e5acb7ded8a8b43b140b6bbb6db50a8",
"assets/assets/genres/comedy.jpg": "ee007c35d0c4e017e93af21baf3ecdca",
"assets/assets/genres/sports.jpg": "53bb6037157df2f572bd97814e2d3a45",
"assets/assets/genres/adventure.jpg": "2a3030a130992e77ec6bfd761d246846",
"assets/assets/genres/romance.jpg": "aa24dc3558f13682b853e87b03e87cf3",
"assets/assets/genres/drama.jpg": "96bed8e68e4156b341d7f90020aa3aa6",
"assets/assets/genres/sci_fi.jpg": "3a78da1ed11ce7a5320f180f92e22280",
"assets/assets/genres/horror.jpg": "0d40de2249c9acb29da7752d9ccd84e4",
"assets/assets/genres/psychological.jpg": "1fad6100921245d672d2bef3bb0c5fe7",
"assets/assets/error.jpeg": "dd382bb1c40bc6aff31abc2642d276d6",
"assets/assets/avatar.jpg": "6b6c3b42b62cea8390b51a199907cb8a",
"assets/assets/logo.png": "b1dab54154bd0762938cfc5f0a846666",
"assets/assets/logo(clear).png": "4c4dc9645913c81008ce04aa9397c9a8",
"assets/assets/manga.jpg": "15a8c8b7b1953d053c8c05380638ad6e",
"assets/assets/name.png": "b13f3613a543cb396c0ac6d14defdbda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
