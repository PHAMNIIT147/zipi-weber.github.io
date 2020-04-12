'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/logs/HEAD": "0c289c408712e18d0bf8c557dbe6a4f4",
".git/logs/refs/remotes/origion/master": "d9c8bf5c85f78cc2eaf16045c39c9c9f",
".git/logs/refs/heads/master": "0c289c408712e18d0bf8c557dbe6a4f4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origion/master": "1c2af74317ad119dac98a5451ecbbb6f",
".git/refs/heads/master": "1c2af74317ad119dac98a5451ecbbb6f",
".git/index": "8a811d667e6bebdbef90a3a53e156ead",
".git/config": "439a3fdcff6e68e59084fcd3bdb210a2",
".git/objects/e6/19c8ecf07c503d7bd13c3472d3f1745de0fcd3": "97423f32368fe4e4df046ae341585671",
".git/objects/bc/086126c4a7e0a8d442359cd199713fd325fd4c": "e4cea5369117f4fbb7afbefe30c0b89a",
".git/objects/bc/1b600b64b7834517d43fa559a4a560918442da": "4291b2e5cbe59b32c783d3c3ceece1f9",
".git/objects/94/972492a06beb156d0635d8bba79b37e2233ad1": "6c10e635f71ea5c298d3711a51249756",
".git/objects/43/90e93081b04c6b449928a00bd315689624b458": "43b002cf55f9758d2ac0e834fc53d0e4",
".git/objects/3a/7af7283d854ca92e1ed36c914799c80d85426c": "a7765758a3d8289d0b0142855c729e87",
".git/objects/fe/dbda3dd3f6662270d78ed54183e281aae620b2": "33bad8e1329b011974445008bc24945c",
".git/objects/ac/6452bc813aab787b9c31b40e38d95a2d8e24ed": "58986311b86250314fcc7345d194611c",
".git/objects/45/503692fd363f9c682236e85404275026ddb28e": "64a95de756e5303a285672ad9f71d455",
".git/objects/93/332bc15037f60c8fecc5d86615296c2415cf06": "11c72b2ea1430f34d9c5a29729d1f116",
".git/objects/93/60d76f311427ed4380570cb72078320d21f44e": "23af1ca9f13ef9f23582754f7141a6aa",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/7f/9afcb3d8360e24d23d043157311fe2b3131ac6": "685e0ce7058f940b54bfdd04dda608e5",
".git/objects/7e/c080263262409c0a4e0d444f3c871afed6aa40": "0e01f02cd70ee2a3ade0a3a5d92974ff",
".git/objects/7c/f3bb128fce22f6589bf01106d691defc354661": "e85b170d467a898d11930020c10d71cf",
".git/objects/a8/a6c7dbd0ffb164ed705f0a4e4eb1634ccd375a": "a59bd8910d1e2ef35937568720296e95",
".git/objects/21/a1886bf4c6f6eb59dc589514cebbb11f679737": "3a4ba472120373181c034b9821ca283a",
".git/objects/30/b4e7912101fab1aedf86296309759b5bbbff59": "7edf4c2c331924223f7a039acbec39e2",
".git/objects/b5/6b0a297f78238c8b7723e94bebd7c28fd92a47": "ea6b3968638ee44e513233d4c9fa2a20",
".git/objects/95/8f9337d623cc252170b5edda574dfc862459fc": "818af21ad51075ce6a8f4095e4fa3721",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/4151d4ab0fb38799380fb01740d765127257bc": "2053a0f52dadeac819cb6cc337c700e4",
".git/objects/32/ba006f6ffb98721171f78f4f70a0dd100af05c": "6cfba2b758d44e2ea3b24446db6e6bcd",
".git/objects/32/32f8611918152427fc0fc42e918548a61fe32c": "5bb9d710e713b7302cb5aad9f2fed8cc",
".git/objects/af/56ab12388ab4ef47c6a57485e0c70665daea01": "277ffc6f6f976100ec4a6f3a756477e9",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/85/3da1cb47972e588d1287bbcead1341e01af0c4": "845aecc88fc42852847bc8aa284a4f65",
".git/objects/0b/fc4df711876036cf63de1f7cf6b5e2829f11fd": "46821df33cde364d65a9b061768b1f65",
".git/objects/58/4b8d8b5548420ff63e16a3f58d0d6743caf49e": "cffc4f5fae586997caa8dc110131cee9",
".git/objects/69/86f5283ad29dc1673c53668fcf93dae673e77c": "30e1a7816a7e3958040238f57c36c373",
".git/objects/ff/252f3b97a8ad66a7a055426b84a271be0a752c": "e02af9a1e68746e2daa3e6c0b86530e6",
".git/objects/c9/f219fcfbbf2ffbdb60780a29656b29be71fc19": "6af3e5b20cbad6c2ab9b4d12087dd4a0",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/a1/fd8e2306ec22fb4c8f2a909c863490c55fd6fd": "ea9a7c22167e6ff494fa8c93f858ee00",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/5e/360eb3b1ac89b0b09165a08e305f21f1f83e95": "bb5124b3ca2d632d7d8601bce74c4f01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4e/5c4b8e2a49750550ab4c4dcdf9d72d7535b410": "452ba8b845df22e4e76d1c4db478be52",
".git/objects/b8/e7d5deedd3f423569fccb25499a6dd3beddcb0": "b8f706bdb4f2b215ffaab039050eee9a",
".git/objects/7a/6a41bf79856be0236024a05db455851b7d151b": "596e43ee59586fa4b1b1644fc0d04ea0",
".git/objects/2b/7dc33711a2e9ee8cc1f38d018f0daf8d6d2c32": "6bfb64c835a330eb3f55be2a39376a1e",
".git/objects/b4/a249764f4888b6239510460d2c945d0ba7768e": "d90b8fbb891aa5b036a8065b12d29fb8",
".git/objects/2a/27446668637dd1613484f2cecb0e62bfd913dc": "37628edb4f0c8620ea8bb17622f69abd",
".git/objects/b9/efbe9aa657cb65ac1011b52e6c11c32096be83": "91f205a464dd40ebc7a0417d5a5c090a",
".git/objects/c7/f0d680e21b27723d20980c728c909ec9e3924c": "fc4b549758c13b923f62d09e9de7996f",
".git/objects/64/95d4676f7436ca4fae9879b3c15638740477d9": "a679201471dc213dac9adda4bb0becd6",
".git/objects/ea/c8bbcdc14d1c1b183897aae56d6243fa93ec7d": "32c9b0be3803da16e9299c1efae2b5ef",
".git/objects/ea/5317a93bcc5d601e3287f998b3f4da946c88f5": "aefb97599de52ea589673bf0a3853382",
".git/objects/14/83dda0735f0ef72699ee933ee817478030c208": "cfa16b86432d8e28865889dec539d938",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/c8/b3be7594de6f833c44d33f6abf03590b5cb885": "134fd66bc3349e2272fe4728eaa93ee6",
".git/objects/7d/37087eba240d547673bb5d86c13e9926cab6b8": "2a0ed8b01c2ea40b6eaaf59c845b834b",
".git/objects/ad/e612338daa40392df38016e1dacfbe3e82c5ff": "f95c92b211c056d0065409030b9ac718",
".git/objects/6d/b44671b6a883a8ae358412799c9300e7dc466d": "24806fa1c6ea3171bead4d6a447a4188",
".git/objects/03/1b696e95406801ddf8aa821bd9b34f9c94c8e7": "a85fe62b84539a278adc508e08ab21d7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/28/c9671df2ec531fe65bed22ac5ec48e6ef6077c": "a27e88ba39a6fb7d2f870e7b44bc7f34",
".git/objects/28/bcf4f0437350a7344e0f7b90b4a493ce3ddd91": "4460c87a22f54b8dc7ced4cf0a60a1bc",
".git/objects/d5/76c662b35974fcee4bc9cc54d1cdc5099a08a6": "cf08632c5e9c4065aff75349d2b02ebd",
".git/objects/d5/34f2011fa20a3b026f82745b05987564505a5a": "df269c32e52754f7f13758465e5e09cd",
".git/objects/4c/269465ea8dae6479e18511c4ca19022f2455db": "08ba86c2ef57b9c11d9f0dc679ecd314",
".git/objects/76/2d90eb4afa50e6ec55d71257769e66c823a72f": "939d5c082bed4c75ecd51ce199955288",
".git/objects/76/866a5ec474ec066574833f2b7dfdb01c35b527": "712f552ddfc7f0763d58733434c827f5",
".git/objects/6e/b6f1a50c8aa2feb1d6d3d250a2cf43e1cba24d": "88e1dbc7e9259a3248351394a8aa1a12",
".git/objects/72/84c8d48474e98b2123be10186c41a70ca380ca": "66b55fcd7c4604279d913eef6ce7d591",
".git/objects/52/0d08eb3210f2ce6415d164967f8c24382cee5d": "ae441dfe878dc6a0f48cfd1df972b866",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/19/a25b1882087680b14170df2b4718f385cedf96": "b5788517e0e1f666825c26e319ab4457",
".git/objects/19/1a83d28b1d24c1b1443df076f59d938bec108e": "a185019c14dd5a88451ea443bbe89772",
".git/objects/1d/229fa4380e5de7bd5a07c16bde4137ebf9e545": "121396878d879390cab3392d9fe5be9b",
".git/objects/5c/2646ef178c746b530e4826aa9744f5fdfd7f88": "7a4257f216d1d9ac7c4d5df0ac9b5017",
".git/COMMIT_EDITMSG": "c8c9306118900f6cc011d2b8d1267c00",
".git/FETCH_HEAD": "ce80dbb300df70b671a7ffaa302c35cb",
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
".git/ORIG_HEAD": "60ca10afe27c7ee93db43e2dab6cd73a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "abc69c1e4f455dde170c7c25e9995b4c",
"logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"manifest.json": "ed75e0c7f0cd16aca3e0a4a6c3e2050e",
"assets/FontManifest.json": "881b77599119f7b0024f4de09a200c15",
"assets/LICENSE": "ab6ddb0e32b830e0a94a901d32982bfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/smart_city.jpg": "26d80ec51ac6165ca52dfdfd9de14b8e",
"assets/assets/images/smart_home.png": "c78cbf21d4cf8aeaf1a74eeba094f7a7",
"assets/assets/images/smart_city.png": "5a759ad267be8c3515fae9278ba20dea",
"assets/assets/images/smart_hospital.png": "f374cb3391d7d5f85b1921c048de7072",
"assets/assets/images/smart_airport.jpg": "833fa5a4c217cc69c1b6fc936a06608b",
"assets/assets/images/smart_home.jpg": "dcef7351124a3268f16388be64e32d2a",
"assets/assets/logos/logo.png": "dc753917aec48395ab5cb8394b8cf42b",
"assets/assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/Open_Sans/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "fdcbb0df5c9714d38aeeb7af9818bf76",
"index.html": "80476d165942bde41c2fadb50702d621",
"/": "80476d165942bde41c2fadb50702d621",
".github/workflows/nodejs.yml": "4f0633c255d5f1f948258111ac16c712"
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
