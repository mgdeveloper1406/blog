if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let n={};const d=e=>a(e,l),c={module:{uri:l},exports:n,require:d};i[l]=Promise.all(o.map((e=>c[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-79b2500a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/items_list.css",revision:"f311a983f6f7f1e37550779e7e192bae"},{url:"app/items_list.html",revision:"f6afcb409e1ce8dbca556f7fddba7cd9"},{url:"app/items_list.js",revision:"c0950d5bd88386c08348ad2522a286bb"},{url:"app/items_list/item_mini.css",revision:"3d62085c6fa48605e32684c25520059b"},{url:"app/items_list/item_mini.html",revision:"5641f5069285b2f0cab722294305751c"},{url:"app/items_list/item_mini.js",revision:"4413f240b06a211802f5c19a2d937834"},{url:"app/items_list/item.css",revision:"2905fc6dafc962343ae74f86b5ba5d10"},{url:"app/items_list/item.html",revision:"c1755e69a9718dfdad71e56df8a2b764"},{url:"app/items_list/item.js",revision:"3fd935d889fc0ca615f4861adecbf5a3"},{url:"config.js",revision:"c965247c9325c64166dc82ea790edffe"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"index.html",revision:"813a279c7ec622032a10f6ac2dbe11de"},{url:"js/elasticlunr/elasticlunr.js",revision:"9df81143ce5ad0e8b2204da08f547ad4"},{url:"js/elasticlunr/elasticlunr.min.js",revision:"392b3cd0a12183cf87406428d2989e90"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"fdd7c18f1df529e624e93e4f458b89b3"},{url:"js/zuix/zuix-bundler.min.js",revision:"89b1d0bc2ddf9594a8267dead20b2c7d"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"3afe7ba274ac95f043b876793e9f0e31"},{url:"js/zuix/zuix.min.js",revision:"46e93dec05cc80795819b47fb2fb0933"},{url:"js/zuix/zuix.module.js",revision:"65e7b93ccd5a89584b6d7a451dc060be"},{url:"js/zuix/zuix.module.min.js",revision:"39d09bc714f5e7f02c8f2eb65fcc69e9"},{url:"lib/1.1/components/context-menu.css",revision:"d22d0b8491d203d0cd5131f437afdc3e"},{url:"lib/1.1/components/context-menu.html",revision:"74daf4054d7613ede5f88007a94bdc43"},{url:"lib/1.1/components/context-menu.js",revision:"c431c45cd1c042f2e9d5b2fc51b6d09f"},{url:"lib/1.1/components/menu-overlay.css",revision:"bb12b6616cd5c63eb74c43191380ebe6"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"093774e665bfc0026ef3ac0c9871c549"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"cbfda69c3678e89a177f1956e83c5ab4"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"438a1070998c61f67a0b87afc6d98cbc"},{url:"lib/1.1/controllers/view-pager.js",revision:"ae6c1c1272edda9d1b08007ad9bfa8f8"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"news-blog/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"pages/fragments/about/index.html",revision:"aab89e2a22389121e9653ec1c15bbb6f"},{url:"pages/fragments/bookmarks/index.html",revision:"2f50493241a9d8ac0d3555b89d7aa708"},{url:"pages/fragments/home/index.html",revision:"2acda4de52ad9fb8b9c4979c6c2b672d"},{url:"pages/fragments/search/index.html",revision:"5c9a243c89d9f49491f325cd1dc756c6"},{url:"pages/index.html",revision:"58b5381fc64cd4e45a8a92b25a208788"},{url:"pages/news-blog/europe.json",revision:"650694193989b669feccfab309103152"},{url:"pages/news-blog/europe/aca-hi-mashalhuj/index.html",revision:"478737e0b5a9f08f7cb216cc812f75ad"},{url:"pages/news-blog/europe/ag-zoh-kuvoh/index.html",revision:"fedc44e7590e000d5567de5e3bb8d305"},{url:"pages/news-blog/europe/alvedpi-re-jeej/index.html",revision:"20128c177766de55b602ef3ee156b1bd"},{url:"pages/news-blog/europe/atewac-muvfet-ekcepjiz/index.html",revision:"e63816ce4839c47f2dcf93eb8581d11c"},{url:"pages/news-blog/europe/awjo-udajog-nuuli-few-avi/index.html",revision:"c380919a47db01558b92f3e93aba7058"},{url:"pages/news-blog/europe/botas-wa-zacim-fakve/index.html",revision:"c92dc690cb904ff5c9a62641b827ac0b"},{url:"pages/news-blog/europe/bupkof-hefef-coteki/index.html",revision:"17b1352896d47154c40f567896719b3a"},{url:"pages/news-blog/europe/cogiv-zuzo-guguku/index.html",revision:"1ce861c21e4600d4d7a0c46d63886012"},{url:"pages/news-blog/europe/di-gisaf-pinsel-zopopgoz/index.html",revision:"9adda7cddcced6b3a43b927a49dce39e"},{url:"pages/news-blog/europe/dimu-teduh-cide/index.html",revision:"e9ddfe637ada54370d606d5c30888153"},{url:"pages/news-blog/europe/eggesu-vugi-amuihi/index.html",revision:"cd868963b86cb162f618fc016c6aa3f2"},{url:"pages/news-blog/europe/egi-boidsu-aroeno/index.html",revision:"155751a7bc402139b5f7726a24e65ee1"},{url:"pages/news-blog/europe/ehekowel-atulo-jig-udofip-sopo/index.html",revision:"690c1d43b1759463b9468165fb3d35bc"},{url:"pages/news-blog/europe/eke-vabme-tip/index.html",revision:"2929d10d91aa3d8396bbe32026a994f7"},{url:"pages/news-blog/europe/gekahsi-ballob-detjo-zeeje/index.html",revision:"d78ca7edbc2e873952e5dab100283b20"},{url:"pages/news-blog/europe/hum-nub-naje-wa/index.html",revision:"2b5085d05661cce4e4603398b9302061"},{url:"pages/news-blog/europe/ivrus-juere-nuuscaw-tin/index.html",revision:"d3fed0f95ea33c0b315624ffce0f41a1"},{url:"pages/news-blog/europe/jonut-fovmi-vivli-farep-ediat/index.html",revision:"3dd8ec35ed60d515b2aeb2afe4d16271"},{url:"pages/news-blog/europe/lewiziv-ajsavis-zufzevrej-ir-a/index.html",revision:"edff8e182064cb2ceb0e604037e9a978"},{url:"pages/news-blog/europe/lihhevjon-codnis-uti/index.html",revision:"2293ce243084ee8685a8ee5a1d4e6c90"},{url:"pages/news-blog/europe/lobas-cozezoh-zoshi-otwej-utde/index.html",revision:"ababdd104e31c3fad7f00f1468f7343a"},{url:"pages/news-blog/europe/neszud-na-oti/index.html",revision:"388db27296c2a8ceb64b10c4aed7ad0c"},{url:"pages/news-blog/europe/nu-enisedihi-lozi/index.html",revision:"1e50eae925322287cb29970e48fe0d04"},{url:"pages/news-blog/europe/nuhjip-zuowo-ajgi-rifuwsi/index.html",revision:"6d43b710ad7b9bc3cfa8d58e50824cf7"},{url:"pages/news-blog/europe/oso-jo-ke-jiki/index.html",revision:"0a13a7edc2160b1c9df9024c132f98df"},{url:"pages/news-blog/europe/pafrokjib-cij-haklor-zohto/index.html",revision:"96f38df00e5f427ac99721bcb0c13956"},{url:"pages/news-blog/europe/rel-wumimi-lavetno-da/index.html",revision:"bf02076189f0d1c657aeb0a688750e7d"},{url:"pages/news-blog/europe/tesribci-tudca-lujepo-ibwoh/index.html",revision:"bb16c8472ea7b3f1a3c193a13496fe70"},{url:"pages/news-blog/europe/uv-nihfes-oniogu-vevvin-jebabw/index.html",revision:"4b20822a698d9f6d8bb23747804c9feb"},{url:"pages/news-blog/europe/veud-fud-picuwpe/index.html",revision:"cf59af343101a58a637b2f9648013a9b"},{url:"pages/news-blog/europe/vigwec-sof-pejho-laufzeg-kafi/index.html",revision:"9fbd0e842b5422e94ca1e1ac5bfe4056"},{url:"pages/news-blog/europe/wihno-wite-ipefis/index.html",revision:"b656fa1433626890f4fb587068fb09fb"},{url:"pages/news-blog/europe/zo-hinombip-cotca-lemkig/index.html",revision:"46b29af588e4c7fc54fc8a45f2c1a71a"},{url:"pages/news-blog/top.json",revision:"f1c85350ad216d36f2e3c9db1381c342"},{url:"pages/news-blog/top/arja-aro-zuh-migceme-wu/index.html",revision:"ddeec3b44b245e1618ebeaea3fab01b9"},{url:"pages/news-blog/top/ater-noviragiw-wo-atudor/index.html",revision:"5f1e1de5071d44599d7c2dfa40587d5d"},{url:"pages/news-blog/top/bomzi-idevigi-wol-emi/index.html",revision:"b339b247d5390d1a4f4b3bb6f998ea01"},{url:"pages/news-blog/top/ce-kuwut-pig/index.html",revision:"ddb6dbc080db5617dc5b79aa2d8fb8cb"},{url:"pages/news-blog/top/damse-binkenlod-repvoh-akuzes-/index.html",revision:"2846cc32ff58b3acc1a464ecd3e0e55e"},{url:"pages/news-blog/top/di-volabi-seciw-zekgov-jej/index.html",revision:"c81283210fdac6cc444d2b1d0526cd21"},{url:"pages/news-blog/top/ej-se-pidtas-ne/index.html",revision:"9e05667a601e5da308e5687cc9437190"},{url:"pages/news-blog/top/ekitogwev-gizarjur-le-pa/index.html",revision:"dc0f219cb56a6e2cff0fcc33a4f8761e"},{url:"pages/news-blog/top/fekemuz-lano-leb-sebin/index.html",revision:"fe666f56400bf1c111517ce6df4c3569"},{url:"pages/news-blog/top/ge-cikgeehi-anoledce-kehfi-pum/index.html",revision:"c304cd6fefcc2f6a5fc9052f21a1c7ba"},{url:"pages/news-blog/top/gerol-jumuh-patgev/index.html",revision:"c64722374e3c1c91e999a8841afa25a3"},{url:"pages/news-blog/top/godej-owi-hopi-fipufivut/index.html",revision:"703052e0e401e0e07916f754b87d8e8e"},{url:"pages/news-blog/top/goin-julot-tosgika-lenrov/index.html",revision:"3a18e0d1b918f6fdd3ea95f22cf482a9"},{url:"pages/news-blog/top/ilujho-osza-ogaak-sani-ifgik/index.html",revision:"3f62255ac204e9a3754af6a078c76768"},{url:"pages/news-blog/top/im-bukwilec-dihi/index.html",revision:"2e90ce4cb4e81e9e89bfeeacf7bb2eed"},{url:"pages/news-blog/top/is-kamew-fiwdi-deide-ifelic/index.html",revision:"5694943789407866b6633ef58086c363"},{url:"pages/news-blog/top/iwi-tu-enowoj-vizid-tar/index.html",revision:"1b9bf98cc838edd10ccc0f4ffdd582e9"},{url:"pages/news-blog/top/jihlow-hegaeke-magler-jic/index.html",revision:"2b76d7f8a249ce6d9a07162e92581546"},{url:"pages/news-blog/top/jupet-govigco-waapiwes-vim-wow/index.html",revision:"ea5e5b7cf81f2f006d43bd0d81629965"},{url:"pages/news-blog/top/letopi-sosekwuj-am-wa-rorsow/index.html",revision:"4e0a1fc11763463575109d502e408096"},{url:"pages/news-blog/top/mehfi-ok-dapon/index.html",revision:"32f838228800a933ba3a7f396bf1aed4"},{url:"pages/news-blog/top/motmindom-kec-ma-ol-niw/index.html",revision:"6af573e41fa99a25171583e0b0416c2d"},{url:"pages/news-blog/top/mu-ikkize-ko-puv/index.html",revision:"7818a79c83087958ccf735abbaee3203"},{url:"pages/news-blog/top/owuhifce-ane-ba-renitmel-coac/index.html",revision:"00f29edb627c9387b2e560f7bbf960dd"},{url:"pages/news-blog/top/popse-wocjickiz-ne/index.html",revision:"2370df3b03f3949551820976fca8748e"},{url:"pages/news-blog/top/savjaf-fide-me-rerju/index.html",revision:"1abfb9088fe410a85e56b6f6265fc4b0"},{url:"pages/news-blog/top/sid-kinjizboh-si-vi-cakno/index.html",revision:"121b2af4c7a58d6e7259e42eaf80ec99"},{url:"pages/news-blog/top/soreghi-johehho-foari/index.html",revision:"bf9d1f7bfd3d713e6e123d6cb99d6626"},{url:"pages/news-blog/top/vefziw-ecfe-zime-vookiem-ogevo/index.html",revision:"a659078e864d974532d988c8abbe02ea"},{url:"pages/news-blog/top/wued-memfiflol-akoh-mofkid/index.html",revision:"79aa24fc844ba304854f9a9c7b63b837"},{url:"pages/news-blog/top/zihir-lir-tuhoj-voko/index.html",revision:"41a31b195373e95572154c00cfb77e4d"},{url:"pages/news-blog/top/zofu-fu-pocje/index.html",revision:"e6b114b9660fd84544c0135e62f536f0"},{url:"pages/news-blog/top/zotlo-epaej-luwafas-fili-hef/index.html",revision:"72bc1d6584a4788992f156a6703b48ba"},{url:"pages/news-blog/travel.json",revision:"760b6973a5aa88c0fc3d0f1cf3070a70"},{url:"pages/news-blog/travel/apipo-agooti-olhos-tudetos-jiw/index.html",revision:"ee091c12dcc591aaabd0c2c1f90a683c"},{url:"pages/news-blog/travel/caonjim-po-wewic-noteku/index.html",revision:"6003a271aafbef39207cf5d429310800"},{url:"pages/news-blog/travel/devpa-ajekos-dufeti-reit/index.html",revision:"fc7c3daa59df16b8e6a4a2d06a8cc1f8"},{url:"pages/news-blog/travel/eka-akeisa-mizi-fancegase/index.html",revision:"12ce842ff26311a14480a09a476c0e9e"},{url:"pages/news-blog/travel/ewbof-pejinkik-irad/index.html",revision:"794d159c93594e40d54b7ba3f67aa807"},{url:"pages/news-blog/travel/fuwveh-rowru-bodcu-beven/index.html",revision:"3d8cff48de9830c18edccda200079472"},{url:"pages/news-blog/travel/ga-reti-gevuku-otvomep/index.html",revision:"89e68693c49592f8a0e775f77f5ec5f3"},{url:"pages/news-blog/travel/gehu-jacnifge-vebed-lopef/index.html",revision:"142f9e2ab73aa72df05be62ca771a721"},{url:"pages/news-blog/travel/gon-hi-facgot-fovetop/index.html",revision:"68fc114e915cea3a75db089a0bed284c"},{url:"pages/news-blog/travel/gu-hinvom-como/index.html",revision:"202431f389eccedf31a2677756e9a4db"},{url:"pages/news-blog/travel/hisosozel-mojnun-dom-hipek-coa/index.html",revision:"79c14d7a200b0c97fc43d98e9ffa46f2"},{url:"pages/news-blog/travel/icoug-se-im-gaheono/index.html",revision:"ff1ffe69adac05f86cb20ff39ae3005d"},{url:"pages/news-blog/travel/idevumu-wivmanov-mofej-vovve/index.html",revision:"259c07a19c43135292b20643aed2ba2c"},{url:"pages/news-blog/travel/is-naecoh-ilotottu-wehe/index.html",revision:"83fad32359a3829c0759a4553065319f"},{url:"pages/news-blog/travel/jebe-noehede-ihe-edoc/index.html",revision:"f5dbe21e1937412338ec93498f6247c9"},{url:"pages/news-blog/travel/jejjo-utzo-jozte-ulanof/index.html",revision:"987783aedd9a5fa217b007fc71782a36"},{url:"pages/news-blog/travel/kisso-jozodcu-zurnec/index.html",revision:"51145934d97965e6fbaf8a8d64f3634b"},{url:"pages/news-blog/travel/libonso-moh-hifdo-soow-pebmoll/index.html",revision:"eca83af45461b070cb52dc4bfe502e2e"},{url:"pages/news-blog/travel/luiki-efep-cuktaj-uvci-su/index.html",revision:"4b3ade742b81a7423e04db3d24b42578"},{url:"pages/news-blog/travel/lule-gufezde-kofvo/index.html",revision:"97bee0b27e02f0d1bcc466af367b6147"},{url:"pages/news-blog/travel/mimlo-wet-cov-ho/index.html",revision:"cb2e044f121f6defa8f07bdac73d2f52"},{url:"pages/news-blog/travel/nogji-gaweno-ke/index.html",revision:"553414737a1540b057a21242d0c436a3"},{url:"pages/news-blog/travel/ownuk-adiwusir-dijipup-fuinu/index.html",revision:"a0ef2e96c2946ca09a95ffb5f2f44d3f"},{url:"pages/news-blog/travel/sifo-zodeg-gesel/index.html",revision:"929eef65dc3abed8e54e51c17c7a2c8b"},{url:"pages/news-blog/travel/sowzo-ijeva-kiruri-muckivle/index.html",revision:"5bd898a9779432e723d67e3313aa4342"},{url:"pages/news-blog/travel/su-tawug-azgeuc-helaw/index.html",revision:"00a19c8869174eca532c9579cca9c96a"},{url:"pages/news-blog/travel/todmoj-upeeshaf-mowis-jinowo-o/index.html",revision:"80e58dc41c4cff4dfbc5ade63077e5ce"},{url:"pages/news-blog/travel/totepo-vik-fu/index.html",revision:"9dad0f8aa96cfa71a0e150100534f41f"},{url:"pages/news-blog/travel/unu-sugef-attib-ep/index.html",revision:"65187b9f8376fd72413e99086ec2741a"},{url:"pages/news-blog/travel/waj-kupvenpo-hocniin/index.html",revision:"11b9154a92099e39754b80dfc345383f"},{url:"pages/news-blog/travel/wif-jogjo-nurlus-wodhip/index.html",revision:"7fc39912b37e1c18c2d38ff1829e69b1"},{url:"pages/news-blog/travel/wifewec-kicgakev-le-odual/index.html",revision:"52ebe8d47f0a3447777249e5884eb406"},{url:"pages/news-blog/travel/zo-in-hitmefmag/index.html",revision:"eca81ce857e2e3d84d6e1635997a119c"},{url:"pages/news-blog/world.json",revision:"68755b1bcf7593a0d335b18691309186"},{url:"pages/news-blog/world/avpa-bedowno-kasu-fofgiihe/index.html",revision:"b50d89af8dfb6a91a7a2c62ac8279907"},{url:"pages/news-blog/world/bokefko-foha-coza-na/index.html",revision:"aa9205b8fa485e78897bbfb2ff17b212"},{url:"pages/news-blog/world/cag-ovcowe-hivzid-zip-wizidgeb/index.html",revision:"9cfec0dc95d2f22a45a2703424d2c54a"},{url:"pages/news-blog/world/emkeggu-juninzol-si-efanu-litc/index.html",revision:"2842573e0d1481143cdb0c216ad60dda"},{url:"pages/news-blog/world/foipziw-wef-heiw-tepipcip/index.html",revision:"a0e9b5e363d39d89ec1794d8fce9fdd1"},{url:"pages/news-blog/world/gehjel-ifiwifo-peome-hecava/index.html",revision:"a2aa01dff73ea8b22d0418e013f0a92e"},{url:"pages/news-blog/world/idewet-gelidohet-wevce/index.html",revision:"01b5371c88a36e2aba093ff5a2f639c1"},{url:"pages/news-blog/world/izijih-mowocoli-asuoje-ope/index.html",revision:"3121dc46fb20ecaf6c62ff0bf5c8a44b"},{url:"pages/news-blog/world/jimpeho-ren-vif/index.html",revision:"bcf1c49b0c3f0cfd5a4ced5f36c029d5"},{url:"pages/news-blog/world/lefle-ef-izoso-he/index.html",revision:"cb1e26d7a844f12d0f48c09b9b9a1331"},{url:"pages/news-blog/world/me-niep-koje-duzdev/index.html",revision:"dd6442f011ab0eae0673fc846a3c71de"},{url:"pages/news-blog/world/nifu-dovhi-fecal/index.html",revision:"62877806174e5fada0ecfda7d3b93aad"},{url:"pages/news-blog/world/ogkico-jehjon-pacaco-dodmen/index.html",revision:"f06f164565d94659c1b5a4d15e9ac983"},{url:"pages/news-blog/world/os-kujom-poke-tuobi/index.html",revision:"670d3a31fffc01c4a9533c2c3dfae0fa"},{url:"pages/news-blog/world/pe-poso-meturuko-favlu/index.html",revision:"a86b0fda407c820c953abaee9e1155d5"},{url:"pages/news-blog/world/pedja-soagevuf-movdi-wa-ke/index.html",revision:"cf4c923c6bfdecd63c4af543e4ca1d55"},{url:"pages/news-blog/world/riaf-vegvo-wakvag-evoha/index.html",revision:"e89cb8898712d48ec6d911841f203c11"},{url:"pages/news-blog/world/rigel-pu-motiw/index.html",revision:"52024504cd1b03dc6189aa529d4c35b2"},{url:"pages/news-blog/world/risa-jeboc-laf-pecad/index.html",revision:"ca23361e9c6df01accd49f15c5e3ceda"},{url:"pages/news-blog/world/runurapo-novjalwi-wefata/index.html",revision:"c511f69432ef45cd740e7a5ee096db8a"},{url:"pages/news-blog/world/seuh-mopotdof-evja-wocdu/index.html",revision:"79ad9ee38f854002152a4a9422ae1cc6"},{url:"pages/news-blog/world/sip-cidmele-jic/index.html",revision:"0162d4027ba67fa9b21192fcac6c4a04"},{url:"pages/news-blog/world/sukojdi-enaijelot-af-bitod/index.html",revision:"41be4ce7d54fbfef0c49d3cecc9f35ae"},{url:"pages/news-blog/world/tazad-igruw-fetid-agobek/index.html",revision:"ccaf25185d0beca1ecf32f070a1326bc"},{url:"pages/news-blog/world/towi-geb-wocliltew/index.html",revision:"5e5420ff77f70e86233c59d6243beed9"},{url:"pages/news-blog/world/udco-cuke-sitpeg-rorgoje/index.html",revision:"769fbd573bce8a63d6095f747ea7972c"},{url:"pages/news-blog/world/uzsov-fefevohev-duofre-celo-gi/index.html",revision:"d58c53a603b4acefe03fa31d899852ed"},{url:"pages/news-blog/world/wioti-zijobu-aswigozi-keczewgo/index.html",revision:"c8bae394f2070f7da6fa4893f600cddc"},{url:"pages/news-blog/world/zaso-awuap-eki/index.html",revision:"58a3dba3660cf772dc94e593e86df26d"},{url:"pages/news-blog/world/zisek-kaghitis-mepdu-luwen-ohf/index.html",revision:"f282a0470d5a8a292fce1990ade2bf53"},{url:"pages/news-blog/world/zog-piwloc-gel-maf-abuijeila/index.html",revision:"018fcb4d653b4585f1d1ff82b2481a6e"},{url:"pages/news-blog/world/zowil-cigikof-sosped-meflod-re/index.html",revision:"ea99d28884aa40446704fb3eabf45f10"},{url:"pages/news-blog/world/zozzihavu-rem-ogbaf-emi/index.html",revision:"757b51dcf1884c315b9c4f337743ee44"},{url:"search-index.json",revision:"0183250c10175a85e8cbd9835072b80c"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
