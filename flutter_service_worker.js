'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/logs/HEAD": "8cf5daee6a1f99029fd7c9b8fd17b433",
".git/logs/refs/remotes/origion/master": "6739f0a789728f251da6db2fab66cc2e",
".git/logs/refs/heads/master": "8cf5daee6a1f99029fd7c9b8fd17b433",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origion/master": "2a88eec1c01e3a8f9699e31d94e93176",
".git/refs/heads/master": "2a88eec1c01e3a8f9699e31d94e93176",
".git/index": "bad5c07c23393b774c9b0b15ab8ba21a",
".git/config": "439a3fdcff6e68e59084fcd3bdb210a2",
".git/objects/3a/7af7283d854ca92e1ed36c914799c80d85426c": "a7765758a3d8289d0b0142855c729e87",
".git/objects/ac/6452bc813aab787b9c31b40e38d95a2d8e24ed": "58986311b86250314fcc7345d194611c",
".git/objects/45/503692fd363f9c682236e85404275026ddb28e": "64a95de756e5303a285672ad9f71d455",
".git/objects/93/60d76f311427ed4380570cb72078320d21f44e": "23af1ca9f13ef9f23582754f7141a6aa",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/7e/c080263262409c0a4e0d444f3c871afed6aa40": "0e01f02cd70ee2a3ade0a3a5d92974ff",
".git/objects/21/a1886bf4c6f6eb59dc589514cebbb11f679737": "3a4ba472120373181c034b9821ca283a",
".git/objects/30/b4e7912101fab1aedf86296309759b5bbbff59": "7edf4c2c331924223f7a039acbec39e2",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/4151d4ab0fb38799380fb01740d765127257bc": "2053a0f52dadeac819cb6cc337c700e4",
".git/objects/32/ba006f6ffb98721171f78f4f70a0dd100af05c": "6cfba2b758d44e2ea3b24446db6e6bcd",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4e/5c4b8e2a49750550ab4c4dcdf9d72d7535b410": "452ba8b845df22e4e76d1c4db478be52",
".git/objects/b8/e7d5deedd3f423569fccb25499a6dd3beddcb0": "b8f706bdb4f2b215ffaab039050eee9a",
".git/objects/7a/6a41bf79856be0236024a05db455851b7d151b": "596e43ee59586fa4b1b1644fc0d04ea0",
".git/objects/2b/7dc33711a2e9ee8cc1f38d018f0daf8d6d2c32": "6bfb64c835a330eb3f55be2a39376a1e",
".git/objects/b4/a249764f4888b6239510460d2c945d0ba7768e": "d90b8fbb891aa5b036a8065b12d29fb8",
".git/objects/ea/5317a93bcc5d601e3287f998b3f4da946c88f5": "aefb97599de52ea589673bf0a3853382",
".git/objects/14/83dda0735f0ef72699ee933ee817478030c208": "cfa16b86432d8e28865889dec539d938",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/c8/b3be7594de6f833c44d33f6abf03590b5cb885": "134fd66bc3349e2272fe4728eaa93ee6",
".git/objects/7d/37087eba240d547673bb5d86c13e9926cab6b8": "2a0ed8b01c2ea40b6eaaf59c845b834b",
".git/objects/ad/e612338daa40392df38016e1dacfbe3e82c5ff": "f95c92b211c056d0065409030b9ac718",
".git/objects/6d/b44671b6a883a8ae358412799c9300e7dc466d": "24806fa1c6ea3171bead4d6a447a4188",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/d5/76c662b35974fcee4bc9cc54d1cdc5099a08a6": "cf08632c5e9c4065aff75349d2b02ebd",
".git/objects/d5/34f2011fa20a3b026f82745b05987564505a5a": "df269c32e52754f7f13758465e5e09cd",
".git/objects/76/866a5ec474ec066574833f2b7dfdb01c35b527": "712f552ddfc7f0763d58733434c827f5",
".git/objects/6e/b6f1a50c8aa2feb1d6d3d250a2cf43e1cba24d": "88e1dbc7e9259a3248351394a8aa1a12",
".git/objects/52/0d08eb3210f2ce6415d164967f8c24382cee5d": "ae441dfe878dc6a0f48cfd1df972b866",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/19/1a83d28b1d24c1b1443df076f59d938bec108e": "a185019c14dd5a88451ea443bbe89772",
".git/objects/5c/2646ef178c746b530e4826aa9744f5fdfd7f88": "7a4257f216d1d9ac7c4d5df0ac9b5017",
".git/COMMIT_EDITMSG": "cf41d69d8ba12c6257b6807fd444774f",
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
"main.dart.js": "4c37570b6cb3670ebdaf85ab4e604041",
"logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"manifest.json": "ed75e0c7f0cd16aca3e0a4a6c3e2050e",
"assets/FontManifest.json": "881b77599119f7b0024f4de09a200c15",
"assets/LICENSE": "6e191b7f7b2043d621b389b31891ce62",
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
