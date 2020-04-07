'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/logs/HEAD": "c9a08cdbdc9877429ddf973a212f15d8",
".git/logs/refs/remotes/origion/master": "7a492fe5e766850006b751ec90bd6c1f",
".git/logs/refs/heads/master": "c9a08cdbdc9877429ddf973a212f15d8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origion/master": "479e5050cf58ce15b3d2d4fbc06e8533",
".git/refs/heads/master": "479e5050cf58ce15b3d2d4fbc06e8533",
".git/index": "813e9b1a74da03e34294f62ae56ec9c8",
".git/config": "439a3fdcff6e68e59084fcd3bdb210a2",
".git/objects/45/503692fd363f9c682236e85404275026ddb28e": "64a95de756e5303a285672ad9f71d455",
".git/objects/93/60d76f311427ed4380570cb72078320d21f44e": "23af1ca9f13ef9f23582754f7141a6aa",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/21/a1886bf4c6f6eb59dc589514cebbb11f679737": "3a4ba472120373181c034b9821ca283a",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/4151d4ab0fb38799380fb01740d765127257bc": "2053a0f52dadeac819cb6cc337c700e4",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4e/5c4b8e2a49750550ab4c4dcdf9d72d7535b410": "452ba8b845df22e4e76d1c4db478be52",
".git/objects/7a/6a41bf79856be0236024a05db455851b7d151b": "596e43ee59586fa4b1b1644fc0d04ea0",
".git/objects/2b/7dc33711a2e9ee8cc1f38d018f0daf8d6d2c32": "6bfb64c835a330eb3f55be2a39376a1e",
".git/objects/b4/a249764f4888b6239510460d2c945d0ba7768e": "d90b8fbb891aa5b036a8065b12d29fb8",
".git/objects/14/83dda0735f0ef72699ee933ee817478030c208": "cfa16b86432d8e28865889dec539d938",
".git/objects/c8/b3be7594de6f833c44d33f6abf03590b5cb885": "134fd66bc3349e2272fe4728eaa93ee6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d5/34f2011fa20a3b026f82745b05987564505a5a": "df269c32e52754f7f13758465e5e09cd",
".git/objects/6e/b6f1a50c8aa2feb1d6d3d250a2cf43e1cba24d": "88e1dbc7e9259a3248351394a8aa1a12",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/5c/2646ef178c746b530e4826aa9744f5fdfd7f88": "7a4257f216d1d9ac7c4d5df0ac9b5017",
".git/COMMIT_EDITMSG": "e867491bbf41fbc314a10c14d13180ac",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "f517926f4694dfcbe5e6c50a368120f7",
"logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"manifest.json": "ed75e0c7f0cd16aca3e0a4a6c3e2050e",
"assets/FontManifest.json": "881b77599119f7b0024f4de09a200c15",
"assets/LICENSE": "ab2aa3d841e136ad7140eae36887ee32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/logos/logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"assets/assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/Open_Sans/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "d70e7d73e5f961c738874523246924cc",
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
