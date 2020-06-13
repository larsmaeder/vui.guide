/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "252f366e-09e6bd0b361c50034ca9.js"
  },
  {
    "url": "252f366e-09e6bd0b361c50034ca9.js.map",
    "revision": "413a8f4ee8c57681a3026e217e51cb5e"
  },
  {
    "url": "404.html",
    "revision": "f19d665e9e629d310a0b9a98917b1e26"
  },
  {
    "url": "404/index.html",
    "revision": "f346657d83c3d4113d14c7252936953d"
  },
  {
    "url": "9def77725ec7214a16387ad68e045adc7239207b-dcc49a47e31e73e6ac2f.js"
  },
  {
    "url": "9def77725ec7214a16387ad68e045adc7239207b-dcc49a47e31e73e6ac2f.js.map",
    "revision": "d9e1b85006d89a135f2d377423322010"
  },
  {
    "url": "a7f03d1ed60783ac2c895d69d55c9dc3135f4fd0-cb2bb3c3ac70b6b08c9b.js"
  },
  {
    "url": "a7f03d1ed60783ac2c895d69d55c9dc3135f4fd0-cb2bb3c3ac70b6b08c9b.js.map",
    "revision": "384e64a88829e2b2dd0ffd3734190ae7"
  },
  {
    "url": "app-dfe68153c5eff29eb900.js"
  },
  {
    "url": "app-dfe68153c5eff29eb900.js.map",
    "revision": "820998f4d5df08824ff423e856b3bda0"
  },
  {
    "url": "chunk-map.json",
    "revision": "21dc311c74e1e7e7ff1bd69f94b5d414"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ab12cfe2f77aa8ed5f67.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ab12cfe2f77aa8ed5f67.js.map",
    "revision": "f12670209ce24181aecb2826c71ece11"
  },
  {
    "url": "component---src-pages-404-js-64d505ef5698bd76e696.js"
  },
  {
    "url": "component---src-pages-404-js-64d505ef5698bd76e696.js.map",
    "revision": "e8572e4fe76cd39afb07205149f04f7c"
  },
  {
    "url": "component---src-pages-contribute-js-4c2e8b5ea6bd1009b945.js"
  },
  {
    "url": "component---src-pages-contribute-js-4c2e8b5ea6bd1009b945.js.map",
    "revision": "32b6b9d2685f81a236936917d1a3373c"
  },
  {
    "url": "component---src-pages-index-js-9211916c1a9ee02344d4.js"
  },
  {
    "url": "component---src-pages-index-js-9211916c1a9ee02344d4.js.map",
    "revision": "24c56ec767b629bc2564f2912fe3ce78"
  },
  {
    "url": "component---src-templates-layout-docs-js-c4fead993f4d9dbdaa92.js"
  },
  {
    "url": "component---src-templates-layout-docs-js-c4fead993f4d9dbdaa92.js.map",
    "revision": "aef8243fee521ac6b1afc32fffd30b2b"
  },
  {
    "url": "contribute/index.html",
    "revision": "4cf97cfe4d08daa4be5d88da4e47987d"
  },
  {
    "url": "docs/behaviour/behaviour-of-speak/index.html",
    "revision": "3176bcbdecff4ecfcd80edf0dc7f7fd5"
  },
  {
    "url": "docs/behaviour/feedback-of-conversation-status/index.html",
    "revision": "5752de7ecc1c5d967b43846705e7f584"
  },
  {
    "url": "docs/behaviour/freedom-of-user-control/index.html",
    "revision": "bfa7763b4ca4c168f6040909201e5374"
  },
  {
    "url": "docs/behaviour/handling-user-intents/index.html",
    "revision": "ef9b852b2dbd1a6f1eca235034e76a38"
  },
  {
    "url": "docs/behaviour/index.html",
    "revision": "fc43047e080fbf9b46df304941104238"
  },
  {
    "url": "docs/behaviour/prevent-and-recover-from-errors/index.html",
    "revision": "7af38db5e67a26d2913c60072f5956ae"
  },
  {
    "url": "docs/behaviour/wording/index.html",
    "revision": "79981ea3357682c4e84ebcc95b9f2216"
  },
  {
    "url": "docs/design-patterns/audio-card/index.html",
    "revision": "66a20263c0b316a85bdb68c08b133f22"
  },
  {
    "url": "docs/design-patterns/card/index.html",
    "revision": "7c47ea2b02d5a545bc937212cbae4d59"
  },
  {
    "url": "docs/design-patterns/carousel/index.html",
    "revision": "d84ffc2a13a373709fa3d54ba9ae5227"
  },
  {
    "url": "docs/design-patterns/chip/index.html",
    "revision": "dc02a375fac5080ffd01d79ef4bf2e6f"
  },
  {
    "url": "docs/design-patterns/index.html",
    "revision": "500863d6eb64e9c25576d5dbc8ab8381"
  },
  {
    "url": "docs/design-patterns/list/index.html",
    "revision": "38e877371832d71f29ac2b9e6b55edd3"
  },
  {
    "url": "docs/design-patterns/table/index.html",
    "revision": "36318da388f8ddd851eebbbfbe1a5b11"
  },
  {
    "url": "docs/fundamentals/index.html",
    "revision": "dee98229ff767c72ff31632f2c23ccce"
  },
  {
    "url": "docs/fundamentals/is-conversation-the-right-fit/index.html",
    "revision": "8e87771fb7b8d51041745d856e8842a7"
  },
  {
    "url": "docs/fundamentals/ten-principles/index.html",
    "revision": "23e500ac7966bd9aa09c85c980562ef0"
  },
  {
    "url": "docs/index.html",
    "revision": "651969698b4fc7071f0017285304edc0"
  },
  {
    "url": "docs/resources/checklist/index.html",
    "revision": "3ee4a18bbf1c019c5d8ab6a4e797c804"
  },
  {
    "url": "docs/resources/checklist/voice-only/index.html",
    "revision": "bd1691bc8e7685bb464082439b568d62"
  },
  {
    "url": "docs/resources/checklist/vui/index.html",
    "revision": "8b9104bcb5483bd4dc4892d5e3c862b4"
  },
  {
    "url": "docs/resources/index.html",
    "revision": "18eda76ecefad7e63201a7cf299ace0a"
  },
  {
    "url": "framework-f848a7b7324852e74354.js"
  },
  {
    "url": "framework-f848a7b7324852e74354.js.map",
    "revision": "1e215d9fd5e2c9649a07ba725d2aa9f8"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsI.woff",
    "revision": "81f57861ed4ac74741f5671e1dff2fd9"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2",
    "revision": "da0e717829e033a69dec97f1e155ae42"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2",
    "revision": "51521a2a8da71e50d871ac6fd2187e87"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzQ.woff",
    "revision": "fe65b8335ee19dd944289f9ed3178c78"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc-.woff",
    "revision": "adcde98f1d584de52060ad7b16373da3"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
    "revision": "2735a3a69b509faf3577afd25bdf552e"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc-.woff",
    "revision": "bb1e4dc6333675d11ada2e857e7f95d7"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4.woff2",
    "revision": "9b3766ef4a402ad3fdeef7501a456512"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxM.woff",
    "revision": "60fa3c0614b8fb2f394fa29944c21540"
  },
  {
    "url": "google-fonts/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
    "revision": "0c94e034ca06357576c2d03d623e1fcd"
  },
  {
    "url": "google-fonts/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhLq3k.woff",
    "revision": "6d5bc1d8c0dc6b8420463d00e33be71a"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f08b72cbe339010dfed23be46c42b7e7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "15e735ae720fafab86f4c274a86d06f4"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2ef34c27c49b81388e170f4264597aeb"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "67f2bd792261d59fec10b10389cae33b"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "5bcffb1bb79503f38ef65a09c529b51a"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "1c1c90e7a5430b5c566257d54d0c6d2e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "45b3ab7f099d626d6f838566fd0ad0c5"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "0c12fe790dd96ae7707983efa10728ae"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "cd18b2a58e6419c9bfe187e5fe30634a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fd85ee643e696884044a4d45fc37b2c6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8fe5b6171b040f5e023a5d06f323efc5"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "20844607d05999773921df68a988a91a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6632ce51ae32b13fc5a3332803789778"
  },
  {
    "url": "page-data/contribute/page-data.json",
    "revision": "4cb3a46153bfbd9e2a4ec0e85fb08bbe"
  },
  {
    "url": "page-data/docs/behaviour/behaviour-of-speak/page-data.json",
    "revision": "2a49e40ee5bb59a30d9cfee39c969738"
  },
  {
    "url": "page-data/docs/behaviour/feedback-of-conversation-status/page-data.json",
    "revision": "5d939eaf25385d606583d81e4ba72510"
  },
  {
    "url": "page-data/docs/behaviour/freedom-of-user-control/page-data.json",
    "revision": "eb31bad47792bbb609dbfb7b718eb259"
  },
  {
    "url": "page-data/docs/behaviour/handling-user-intents/page-data.json",
    "revision": "03c68886c14bb790b4c2d66e2fcb5946"
  },
  {
    "url": "page-data/docs/behaviour/page-data.json",
    "revision": "bfd2714737a0d9bf1cb4ee478c056d9c"
  },
  {
    "url": "page-data/docs/behaviour/prevent-and-recover-from-errors/page-data.json",
    "revision": "f72e28ccff9ba896200a9f9704406bea"
  },
  {
    "url": "page-data/docs/behaviour/wording/page-data.json",
    "revision": "12166517bf4f2a1d99cec2e60c664274"
  },
  {
    "url": "page-data/docs/design-patterns/audio-card/page-data.json",
    "revision": "1620ffad9053daeb989c801bbbce8646"
  },
  {
    "url": "page-data/docs/design-patterns/card/page-data.json",
    "revision": "3021f91bc787ec7234dd0fc61a628251"
  },
  {
    "url": "page-data/docs/design-patterns/carousel/page-data.json",
    "revision": "ad5079f10c5130b826b443f9596dad1d"
  },
  {
    "url": "page-data/docs/design-patterns/chip/page-data.json",
    "revision": "92de3a9bcf644a1c9f3cba99f8a0567b"
  },
  {
    "url": "page-data/docs/design-patterns/list/page-data.json",
    "revision": "fee936a35f82dc2bed22ce8a54b8860d"
  },
  {
    "url": "page-data/docs/design-patterns/page-data.json",
    "revision": "d7649003cfddf4cafba6fd95da2e2b5d"
  },
  {
    "url": "page-data/docs/design-patterns/table/page-data.json",
    "revision": "b3c84f7fef738ecc4898360aed515ff2"
  },
  {
    "url": "page-data/docs/fundamentals/is-conversation-the-right-fit/page-data.json",
    "revision": "d8d90ff68a96b5ea8d3f45fbc64d97d2"
  },
  {
    "url": "page-data/docs/fundamentals/page-data.json",
    "revision": "d01689c4a3a9d352f820f5457367f350"
  },
  {
    "url": "page-data/docs/fundamentals/ten-principles/page-data.json",
    "revision": "ff51a06c9e4cf29e2eb4c07c43a5980f"
  },
  {
    "url": "page-data/docs/page-data.json",
    "revision": "ea61efc00c4dae5d6adf326a1c3d0712"
  },
  {
    "url": "page-data/docs/resources/checklist/page-data.json",
    "revision": "54c531d9c1f5895e892a1df54ce6735c"
  },
  {
    "url": "page-data/docs/resources/checklist/voice-only/page-data.json",
    "revision": "38709c5c27e0b50cb66f9f0bf6a8ecb9"
  },
  {
    "url": "page-data/docs/resources/checklist/vui/page-data.json",
    "revision": "fbd6bb76c482543bc07dc458bec5b547"
  },
  {
    "url": "page-data/docs/resources/page-data.json",
    "revision": "0428beb7e887ffc8714fbd5280a19369"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9c08a6c3a165f0aaee9d1c8310088c85"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "cb7b22d6b08b7db6dfd1ac71359b5ebf"
  },
  {
    "url": "reactPlayerDailyMotion-53a5ac57eb085c8ce608.js"
  },
  {
    "url": "reactPlayerDailyMotion-53a5ac57eb085c8ce608.js.map",
    "revision": "24ab9872d53c589f0921934287cf7a92"
  },
  {
    "url": "reactPlayerFacebook-252da8e690d62fe3f7f6.js"
  },
  {
    "url": "reactPlayerFacebook-252da8e690d62fe3f7f6.js.map",
    "revision": "c20dc2b92f0cae5f790b4862ac5dd350"
  },
  {
    "url": "reactPlayerFacebook.render-page.js"
  },
  {
    "url": "reactPlayerFacebook.render-page.js.map",
    "revision": "008801728464e6b5bb77cfea2c7af71b"
  },
  {
    "url": "reactPlayerFilePlayer-5010ec53ab5b42a7122b.js"
  },
  {
    "url": "reactPlayerFilePlayer-5010ec53ab5b42a7122b.js.map",
    "revision": "cfe030f4b48146f5888d96937083bf88"
  },
  {
    "url": "reactPlayerMixcloud-408034342f498762ac5e.js"
  },
  {
    "url": "reactPlayerMixcloud-408034342f498762ac5e.js.map",
    "revision": "501b785aa55d22e6d05783da69feaabd"
  },
  {
    "url": "reactPlayerMixcloud.render-page.js"
  },
  {
    "url": "reactPlayerMixcloud.render-page.js.map",
    "revision": "c285316598e0885a3f73442d5c45a2a8"
  },
  {
    "url": "reactPlayerPreview-e5d0edaaf95cc18c2d12.js"
  },
  {
    "url": "reactPlayerPreview-e5d0edaaf95cc18c2d12.js.map",
    "revision": "a30edd60f494d15747fa8c347b740030"
  },
  {
    "url": "reactPlayerPreview.render-page.js"
  },
  {
    "url": "reactPlayerPreview.render-page.js.map",
    "revision": "15077709d517572c598e99cacf22f477"
  },
  {
    "url": "reactPlayerSoundCloud-380de5dd7ae7b173bf21.js"
  },
  {
    "url": "reactPlayerSoundCloud-380de5dd7ae7b173bf21.js.map",
    "revision": "423eb4ac64f8935e32c043b419172f40"
  },
  {
    "url": "reactPlayerSoundCloud.render-page.js"
  },
  {
    "url": "reactPlayerSoundCloud.render-page.js.map",
    "revision": "a712e2151b741e224d74da5d1cdd4d1e"
  },
  {
    "url": "reactPlayerStreamable-d144c6fc421291c3a8b2.js"
  },
  {
    "url": "reactPlayerStreamable-d144c6fc421291c3a8b2.js.map",
    "revision": "2bbc9be327de543f1f880a1e58e278bd"
  },
  {
    "url": "reactPlayerStreamable.render-page.js"
  },
  {
    "url": "reactPlayerStreamable.render-page.js.map",
    "revision": "1ffdb48ad990677db9eeca2f8d9de625"
  },
  {
    "url": "reactPlayerTwitch-4abd4c63d64178194fb0.js"
  },
  {
    "url": "reactPlayerTwitch-4abd4c63d64178194fb0.js.map",
    "revision": "bcf7f1cd603f9322be0847e85208f7ad"
  },
  {
    "url": "reactPlayerTwitch.render-page.js"
  },
  {
    "url": "reactPlayerTwitch.render-page.js.map",
    "revision": "c33e1b18076aebf84375e30719dfddaf"
  },
  {
    "url": "reactPlayerVidyard-63220ad4bdd7cd8c0800.js"
  },
  {
    "url": "reactPlayerVidyard-63220ad4bdd7cd8c0800.js.map",
    "revision": "d879a1a74490f2625b66c333abb7a61a"
  },
  {
    "url": "reactPlayerVidyard.render-page.js"
  },
  {
    "url": "reactPlayerVidyard.render-page.js.map",
    "revision": "7b0a926dc4dd583fffd0e63d38bab71b"
  },
  {
    "url": "reactPlayerVimeo-e69399d64314a82d9591.js"
  },
  {
    "url": "reactPlayerVimeo-e69399d64314a82d9591.js.map",
    "revision": "20b81dd7383e16a98d0850448961cad4"
  },
  {
    "url": "reactPlayerWistia-5f4289bcb0d26e7b9450.js"
  },
  {
    "url": "reactPlayerWistia-5f4289bcb0d26e7b9450.js.map",
    "revision": "632df31a633cb2c2b231b44668d56070"
  },
  {
    "url": "reactPlayerYouTube-f5a11113035d7bda185f.js"
  },
  {
    "url": "reactPlayerYouTube-f5a11113035d7bda185f.js.map",
    "revision": "5efb69178f72777535ad8709b9086313"
  },
  {
    "url": "robots.txt",
    "revision": "e94b7e9cf5c7c0358d5a6a38b1a90399"
  },
  {
    "url": "sitemap.xml",
    "revision": "a2f194c5645aacfe9805821fe2d873a1"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/022a0/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/1be7a/helpDocumentation.webp"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/25187/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/490f5/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/55755/helpDocumentation.webp"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/6a2c1/helpDocumentation.webp"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/a4e9c/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/ad4a5/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/cf89e/helpDocumentation.webp"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/d88e5/helpDocumentation.png"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/ddb10/helpDocumentation.webp"
  },
  {
    "url": "static/0b13504e99f0ff7fa3df433564283a32/fd7b3/helpDocumentation.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/022a0/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/1be7a/outOfTurnCommand.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/25187/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/490f5/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/55755/outOfTurnCommand.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/6a2c1/outOfTurnCommand.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/a4e9c/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/ad4a5/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/cf89e/outOfTurnCommand.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/d88e5/outOfTurnCommand.png"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/ddb10/outOfTurnCommand.webp"
  },
  {
    "url": "static/0c8b582110254288044f0398a860a3e8/fd7b3/outOfTurnCommand.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/0b268/handlingUserIntents.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/1be7a/handlingUserIntents.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/25187/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/490f5/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/55755/handlingUserIntents.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/6a2c1/handlingUserIntents.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/a4e9c/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/ad4a5/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/d88e5/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/ddb10/handlingUserIntents.webp"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/e59a1/handlingUserIntents.png"
  },
  {
    "url": "static/0cfbbc3e3dcbc6937955c8b982ced771/fd7b3/handlingUserIntents.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/022a0/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/1be7a/carouselStructure.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/25187/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/490f5/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/55755/carouselStructure.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/6a2c1/carouselStructure.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/a4e9c/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/ad4a5/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/cf89e/carouselStructure.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/d88e5/carouselStructure.png"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/ddb10/carouselStructure.webp"
  },
  {
    "url": "static/0d6bc1f0711b50a917cc99e3ba78ee86/fd7b3/carouselStructure.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/022a0/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/1be7a/incomprehension.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/25187/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/490f5/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/55755/incomprehension.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/6a2c1/incomprehension.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/a4e9c/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/ad4a5/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/cf89e/incomprehension.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/d88e5/incomprehension.png"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/ddb10/incomprehension.webp"
  },
  {
    "url": "static/0f83f532420b173eefcc53acc2a969d3/fd7b3/incomprehension.webp"
  },
  {
    "url": "static/184_0_6262a859-1233-4652-be6b-1d07b6197a35-900a73dd-0842-4e13-a3b9-39ea7a4eceef-b3a2fd4372dad2985160451a78fae23a.webm"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/022a0/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/1be7a/waiting.webp"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/25187/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/490f5/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/55755/waiting.webp"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/6a2c1/waiting.webp"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/a4e9c/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/ad4a5/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/cf89e/waiting.webp"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/d88e5/waiting.png"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/ddb10/waiting.webp"
  },
  {
    "url": "static/1b7088a6074813acaaa3904bb040178d/fd7b3/waiting.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/022a0/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/1be7a/audioCardExamples.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/25187/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/490f5/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/55755/audioCardExamples.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/6a2c1/audioCardExamples.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/a4e9c/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/ad4a5/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/cf89e/audioCardExamples.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/d88e5/audioCardExamples.png"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/ddb10/audioCardExamples.webp"
  },
  {
    "url": "static/2512230acf0e8fc6b56f3fdeac025236/fd7b3/audioCardExamples.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/0b268/freedomOfUserControl.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/1be7a/freedomOfUserControl.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/25187/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/490f5/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/55755/freedomOfUserControl.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/6a2c1/freedomOfUserControl.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/a4e9c/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/ad4a5/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/d88e5/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/ddb10/freedomOfUserControl.webp"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/e59a1/freedomOfUserControl.png"
  },
  {
    "url": "static/3cc2287fbad1cc6be75bb8735e103f51/fd7b3/freedomOfUserControl.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/0b268/isConversationTheRightFit.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/1be7a/isConversationTheRightFit.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/25187/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/490f5/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/55755/isConversationTheRightFit.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/6a2c1/isConversationTheRightFit.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/a4e9c/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/ad4a5/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/d88e5/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/ddb10/isConversationTheRightFit.webp"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/e59a1/isConversationTheRightFit.png"
  },
  {
    "url": "static/42cd66906fc56dff4a89fcc4aaa0cde0/fd7b3/isConversationTheRightFit.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/0b268/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/1be7a/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/25187/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/490f5/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/55755/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/6a2c1/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/a4e9c/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/ad4a5/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/d88e5/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/ddb10/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/e59a1/preventAndInterceptErrors.png"
  },
  {
    "url": "static/4380755203357155247bd3b17e2fc47f/fd7b3/preventAndInterceptErrors.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/0b268/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/1be7a/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/25187/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/490f5/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/55755/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/6a2c1/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/a4e9c/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/ad4a5/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/d88e5/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/ddb10/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/e59a1/feedbackOfConversationStatus.png"
  },
  {
    "url": "static/47dfff6884113834ca3580253a106d4c/fd7b3/feedbackOfConversationStatus.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/022a0/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/1be7a/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/25187/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/490f5/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/55755/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/6a2c1/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/a4e9c/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/ad4a5/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/cf89e/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/d88e5/tellingTheUserAllOptions.png"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/ddb10/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/49129d58ae7bcdae8742f2b4955b9423/fd7b3/tellingTheUserAllOptions.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/022a0/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/1be7a/errorPrevention.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/25187/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/490f5/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/55755/errorPrevention.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/6a2c1/errorPrevention.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/a4e9c/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/ad4a5/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/cf89e/errorPrevention.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/d88e5/errorPrevention.png"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/ddb10/errorPrevention.webp"
  },
  {
    "url": "static/4ef590bd7bdd035de79edc0910aa6e15/fd7b3/errorPrevention.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/022a0/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/1be7a/tableStructure.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/25187/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/490f5/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/55755/tableStructure.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/6a2c1/tableStructure.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/a4e9c/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/ad4a5/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/cf89e/tableStructure.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/d88e5/tableStructure.png"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/ddb10/tableStructure.webp"
  },
  {
    "url": "static/50d8e638eccfbd41876672c0546358c3/fd7b3/tableStructure.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/022a0/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/1be7a/errorPreventionWithList.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/25187/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/490f5/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/55755/errorPreventionWithList.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/6a2c1/errorPreventionWithList.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/a4e9c/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/ad4a5/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/cf89e/errorPreventionWithList.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/d88e5/errorPreventionWithList.png"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/ddb10/errorPreventionWithList.webp"
  },
  {
    "url": "static/681e2a356dc3de70b6e4d8cfc8112642/fd7b3/errorPreventionWithList.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/022a0/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/1be7a/confirmation.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/25187/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/490f5/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/55755/confirmation.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/6a2c1/confirmation.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/a4e9c/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/ad4a5/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/cf89e/confirmation.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/d88e5/confirmation.png"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/ddb10/confirmation.webp"
  },
  {
    "url": "static/6c307992472efc5aa04f20cb4584ea96/fd7b3/confirmation.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/1be7a/tableExamples.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/25187/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/490f5/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/55755/tableExamples.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/6a2c1/tableExamples.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/7e36f/tableExamples.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/88b03/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/a4e9c/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/ad4a5/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/d88e5/tableExamples.png"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/ddb10/tableExamples.webp"
  },
  {
    "url": "static/6f6a6e8dd761c2b23e1f9b198bcaf26a/fd7b3/tableExamples.webp"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/3683e/contribute.webp"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/57ab0/contribute.png"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/ae504/contribute.webp"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/f4739/contribute.png"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/f4768/contribute.png"
  },
  {
    "url": "static/7b1b6ed9cab7af983fba868201eb032c/fef30/contribute.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/022a0/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/1be7a/cardExamples.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/25187/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/490f5/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/55755/cardExamples.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/6a2c1/cardExamples.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/a4e9c/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/ad4a5/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/cf89e/cardExamples.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/d88e5/cardExamples.png"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/ddb10/cardExamples.webp"
  },
  {
    "url": "static/8b0759f5628c9ef64f61a33fcba50bb4/fd7b3/cardExamples.webp"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/25187/twitter-jankolario-bifCXiN5rdY-unsplash.png"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/55755/twitter-jankolario-bifCXiN5rdY-unsplash.webp"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/6a2c1/twitter-jankolario-bifCXiN5rdY-unsplash.webp"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/87339/twitter-jankolario-bifCXiN5rdY-unsplash.png"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/a4e9c/twitter-jankolario-bifCXiN5rdY-unsplash.png"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/ad4a5/twitter-jankolario-bifCXiN5rdY-unsplash.png"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/d88e5/twitter-jankolario-bifCXiN5rdY-unsplash.png"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/ddb10/twitter-jankolario-bifCXiN5rdY-unsplash.webp"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/fd7b3/twitter-jankolario-bifCXiN5rdY-unsplash.webp"
  },
  {
    "url": "static/8f362f6dd16cbbcd0f064ae7710f0538/fead5/twitter-jankolario-bifCXiN5rdY-unsplash.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/022a0/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/1be7a/listExamples.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/25187/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/490f5/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/55755/listExamples.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/6a2c1/listExamples.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/a4e9c/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/ad4a5/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/cf89e/listExamples.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/d88e5/listExamples.png"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/ddb10/listExamples.webp"
  },
  {
    "url": "static/aa437c7f0e0a7608ee81cbfbec1c66de/fd7b3/listExamples.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/022a0/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/1be7a/intentUtteranceSlot.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/25187/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/490f5/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/55755/intentUtteranceSlot.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/6a2c1/intentUtteranceSlot.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/a4e9c/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/ad4a5/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/cf89e/intentUtteranceSlot.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/d88e5/intentUtteranceSlot.png"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/ddb10/intentUtteranceSlot.webp"
  },
  {
    "url": "static/aac8758f16095f4c433cd4096678115f/fd7b3/intentUtteranceSlot.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/1be7a/cardStructure.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/25187/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/490f5/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/55755/cardStructure.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/6a2c1/cardStructure.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/7e36f/cardStructure.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/88b03/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/a4e9c/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/ad4a5/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/d88e5/cardStructure.png"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/ddb10/cardStructure.webp"
  },
  {
    "url": "static/af0f0f899c8e5bd2ccf7927b7d43d93e/fd7b3/cardStructure.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/022a0/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/1be7a/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/25187/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/490f5/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/55755/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/6a2c1/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/a4e9c/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/ad4a5/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/cf89e/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/d88e5/doWhatHumansAlreadyDo.png"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/ddb10/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/af46ea22e74addb293eefa41e60ebf04/fd7b3/doWhatHumansAlreadyDo.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/022a0/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/1be7a/chipStructure.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/25187/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/490f5/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/55755/chipStructure.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/6a2c1/chipStructure.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/a4e9c/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/ad4a5/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/cf89e/chipStructure.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/d88e5/chipStructure.png"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/ddb10/chipStructure.webp"
  },
  {
    "url": "static/b09b7fd04615776e182e8a4d0e793b4c/fd7b3/chipStructure.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/1be7a/checklist.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/25187/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/490f5/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/55755/checklist.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/6a2c1/checklist.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/7e36f/checklist.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/88b03/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/a4e9c/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/ad4a5/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/d88e5/checklist.png"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/ddb10/checklist.webp"
  },
  {
    "url": "static/b8f2cd599c6e2e31817cd58bbd87d47f/fd7b3/checklist.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/022a0/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/1be7a/listStructure.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/25187/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/490f5/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/55755/listStructure.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/6a2c1/listStructure.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/a4e9c/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/ad4a5/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/cf89e/listStructure.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/d88e5/listStructure.png"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/ddb10/listStructure.webp"
  },
  {
    "url": "static/ba63b0d71c41bb5c0cc7cab6ca0b9f18/fd7b3/listStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/022a0/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/1be7a/audioCardStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/25187/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/490f5/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/55755/audioCardStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/6a2c1/audioCardStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/a4e9c/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/ad4a5/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/cf89e/audioCardStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/d88e5/audioCardStructure.png"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/ddb10/audioCardStructure.webp"
  },
  {
    "url": "static/bd18568c5e12bcef2a64f98e7a982a84/fd7b3/audioCardStructure.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/022a0/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/1be7a/listening.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/25187/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/490f5/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/55755/listening.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/6a2c1/listening.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/a4e9c/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/ad4a5/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/cf89e/listening.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/d88e5/listening.png"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/ddb10/listening.webp"
  },
  {
    "url": "static/bd1da86a5b6178f3d887314709cd98db/fd7b3/listening.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/0b268/speechBehaviour.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/1be7a/speechBehaviour.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/25187/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/490f5/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/55755/speechBehaviour.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/6a2c1/speechBehaviour.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/a4e9c/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/ad4a5/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/d88e5/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/ddb10/speechBehaviour.webp"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/e59a1/speechBehaviour.png"
  },
  {
    "url": "static/c26e712a79197187ac328279047ea935/fd7b3/speechBehaviour.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/022a0/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/1be7a/UserFreedomExamples.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/25187/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/490f5/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/55755/UserFreedomExamples.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/6a2c1/UserFreedomExamples.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/a4e9c/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/ad4a5/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/cf89e/UserFreedomExamples.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/d88e5/UserFreedomExamples.png"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/ddb10/UserFreedomExamples.webp"
  },
  {
    "url": "static/c601fa31d32c9ba26ffe5a54c8262ec5/fd7b3/UserFreedomExamples.webp"
  },
  {
    "url": "static/d/1806065509.json"
  },
  {
    "url": "static/d/2541685191.json"
  },
  {
    "url": "static/d/423933930.json"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/0b268/tenPrinciples.webp"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/1be7a/tenPrinciples.webp"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/25187/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/490f5/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/55755/tenPrinciples.webp"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/6a2c1/tenPrinciples.webp"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/a4e9c/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/ad4a5/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/d88e5/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/ddb10/tenPrinciples.webp"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/e59a1/tenPrinciples.png"
  },
  {
    "url": "static/d2f6c16459231baca05cb5cbbc992cc9/fd7b3/tenPrinciples.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/0b268/wording.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/1be7a/wording.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/25187/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/490f5/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/55755/wording.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/6a2c1/wording.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/a4e9c/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/ad4a5/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/d88e5/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/ddb10/wording.webp"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/e59a1/wording.png"
  },
  {
    "url": "static/d82638abd581edcfbba97cba123a3e42/fd7b3/wording.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/1be7a/adobeXDLogo.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/25187/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/490f5/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/55755/adobeXDLogo.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/6a2c1/adobeXDLogo.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/7e36f/adobeXDLogo.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/88b03/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/a4e9c/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/ad4a5/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/d88e5/adobeXDLogo.png"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/ddb10/adobeXDLogo.webp"
  },
  {
    "url": "static/ecbbcc4bc73cd2718157dec831d08231/fd7b3/adobeXDLogo.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/022a0/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/1be7a/chipExamples.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/25187/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/490f5/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/55755/chipExamples.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/6a2c1/chipExamples.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/a4e9c/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/ad4a5/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/cf89e/chipExamples.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/d88e5/chipExamples.png"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/ddb10/chipExamples.webp"
  },
  {
    "url": "static/ef5dea3c20b03a3f2b915258019c8611/fd7b3/chipExamples.webp"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/3683e/resources.webp"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/57ab0/resources.png"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/ae504/resources.webp"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/f4739/resources.png"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/f4768/resources.png"
  },
  {
    "url": "static/f00d5c52a432db6d45bb2a5e96bac809/fef30/resources.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/022a0/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/1be7a/feedback.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/25187/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/490f5/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/55755/feedback.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/6a2c1/feedback.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/a4e9c/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/ad4a5/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/cf89e/feedback.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/d88e5/feedback.png"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/ddb10/feedback.webp"
  },
  {
    "url": "static/f63ef4c361fb86449419316245f33b83/fd7b3/feedback.webp"
  },
  {
    "url": "static/media/1860dbc963f201d3e409126447605b13/thinking.gif"
  },
  {
    "url": "static/media/2b9630c3044fd192762c7891daa4953c/replying.gif"
  },
  {
    "url": "static/media/611b887befe6b0e5390a06fc022df61d/userSpeaks.gif"
  },
  {
    "url": "styles-36681512479a843831b0.js"
  },
  {
    "url": "styles-36681512479a843831b0.js.map",
    "revision": "f2577963ba5bd161c1e24ff896cce56c"
  },
  {
    "url": "styles.9df32fbe2424514a616b.css"
  },
  {
    "url": "vendors~reactPlayerDailyMotion.render-page.js"
  },
  {
    "url": "vendors~reactPlayerDailyMotion.render-page.js.map",
    "revision": "f8b01975f6866b4bf849e0e2344e647d"
  },
  {
    "url": "vendors~reactPlayerFilePlayer.render-page.js"
  },
  {
    "url": "vendors~reactPlayerFilePlayer.render-page.js.map",
    "revision": "be84128f2471d0f6ba220d2cce09980d"
  },
  {
    "url": "vendors~reactPlayerVimeo.render-page.js"
  },
  {
    "url": "vendors~reactPlayerVimeo.render-page.js.map",
    "revision": "b5ee73ebd5f7fd2bae12636e7694a24a"
  },
  {
    "url": "vendors~reactPlayerWistia.render-page.js"
  },
  {
    "url": "vendors~reactPlayerWistia.render-page.js.map",
    "revision": "ab18462727da606add0cd027a7292ddd"
  },
  {
    "url": "vendors~reactPlayerYouTube.render-page.js"
  },
  {
    "url": "vendors~reactPlayerYouTube.render-page.js.map",
    "revision": "7ca7976001284db29904ce9133ddb468"
  },
  {
    "url": "webpack-runtime-6115d798c3d23837ece6.js"
  },
  {
    "url": "webpack-runtime-6115d798c3d23837ece6.js.map",
    "revision": "cba3862bec64ba068af2914bd194fd47"
  },
  {
    "url": "webpack.stats.json",
    "revision": "7366e203fc1efcbe785dde5180c31c75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-dfe68153c5eff29eb900.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
