if(!self.define){let e,i={};const o=(o,a)=>(o=new URL(o+".js",a).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(a,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let d={};const n=e=>o(e,l),r={module:{uri:l},exports:d,require:n};i[l]=Promise.all(a.map((e=>r[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-79b2500a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/items_list.css",revision:"70e3305d9bfd2b6202126dedc49c1290"},{url:"app/items_list.html",revision:"f6afcb409e1ce8dbca556f7fddba7cd9"},{url:"app/items_list.js",revision:"73b0f8d267ff4bf3526051e6671a2d1e"},{url:"app/items_list/item_mini.css",revision:"3d62085c6fa48605e32684c25520059b"},{url:"app/items_list/item_mini.html",revision:"3d1dc1dbc5e9527ca47c78fd908e34b6"},{url:"app/items_list/item_mini.js",revision:"4413f240b06a211802f5c19a2d937834"},{url:"app/items_list/item.css",revision:"2905fc6dafc962343ae74f86b5ba5d10"},{url:"app/items_list/item.html",revision:"240c958d677964384a252ef5fbfcdd79"},{url:"app/items_list/item.js",revision:"3fd935d889fc0ca615f4861adecbf5a3"},{url:"config.js",revision:"c965247c9325c64166dc82ea790edffe"},{url:"index.html",revision:"d5ed187bec9d57347844651d2f5e960e"},{url:"js/prism/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"js/prism/prism.js",revision:"0dd62d25c1a7fe66e4c7256e8ada30b5"},{url:"js/zuix/animate-css.js",revision:"7db39f961eb3b537fa15888331b4712d"},{url:"js/zuix/zuix-bundler.js",revision:"de4d63a434b80c6f05dfb261c078e599"},{url:"js/zuix/zuix-bundler.min.js",revision:"6d86338b3c5fbe5944029bffa46fb263"},{url:"js/zuix/zuix-bundler.module.js",revision:"1e062e3bae339edc4e2ac9f61a2385fc"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"a11fd2cf449453de9553b6feb4a19fbd"},{url:"js/zuix/zuix.js",revision:"34ff59c7896f9c4730ad8439398913ae"},{url:"js/zuix/zuix.min.js",revision:"ddc1ff2c6de72e32ac08ecdbc5e88fee"},{url:"js/zuix/zuix.module.js",revision:"f46a217dc6acdc6d55e5357b43fda25f"},{url:"js/zuix/zuix.module.min.js",revision:"b531e9963128a1305b0920f7088744bd"},{url:"lib/1.1/components/context-menu.css",revision:"c6a8ce930271984f9fcaf3eaa85bdf25"},{url:"lib/1.1/components/context-menu.html",revision:"b6d6672432b81bdc209c5d9e07ef2458"},{url:"lib/1.1/components/context-menu.js",revision:"f2ee385a2a0907b5ed4cf7060068334a"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e3c8aeadb91484d0a0fc984e24b469b1"},{url:"lib/1.1/components/media-browser.html",revision:"8c664dc6772bd13ca0660a752986b1d5"},{url:"lib/1.1/components/media-browser.js",revision:"aff895f205bf4a3ac8ae4e8aa0e87678"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"3a1499bcedfd546b1e3e4de0c645bf8d"},{url:"lib/1.1/components/media-browser/image.html",revision:"0a6a67e7280fa668ffb1ed016bec7780"},{url:"lib/1.1/components/media-browser/image.js",revision:"b12865e8955465caed5139dd16200c77"},{url:"lib/1.1/components/media-browser/video.css",revision:"d01c44cf05b7832ec57d6181159c52fa"},{url:"lib/1.1/components/media-browser/video.html",revision:"934e6febc1d7c6c64ef99cddf0a6f99f"},{url:"lib/1.1/components/media-browser/video.js",revision:"d596ec76a6c1d46b0541abdb9bf05c3b"},{url:"lib/1.1/components/menu-overlay.css",revision:"5a726d9ce4630f2eacfdf931f1a5b733"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"2f191342bb867e3669cc28791acefe10"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"1f487a709e6a0a284fdf7ea3a4dd26d7"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"ab579cc76b0d15a03996494602fb8268"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"cbfda69c3678e89a177f1956e83c5ab4"},{url:"lib/1.1/controllers/list_view.js",revision:"535eba11165949fd636e144a9e6d3435"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"4fe7db2d50efac92573c1a7097756d62"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"438a1070998c61f67a0b87afc6d98cbc"},{url:"lib/1.1/controllers/view-pager.js",revision:"9db55b4420ce9745b9553375dd3c74cd"},{url:"lib/1.1/extensions/animate-css.js",revision:"f16cb7fb3162d74d7c0c58695abe5596"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"news-blog/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"pages/news-blog/europe.json",revision:"650694193989b669feccfab309103152"},{url:"pages/news-blog/europe/aca-hi-mashalhuj/index.html",revision:"5798d41ed2325661d030ebbdc22bfd97"},{url:"pages/news-blog/europe/ag-zoh-kuvoh/index.html",revision:"34d67abc119ba5425b7dc367bbfe92c3"},{url:"pages/news-blog/europe/alvedpi-re-jeej/index.html",revision:"bd1baf47b3e48afea5bb72145abd74b7"},{url:"pages/news-blog/europe/atewac-muvfet-ekcepjiz/index.html",revision:"83b5851546a1791820fad8a169ad86ef"},{url:"pages/news-blog/europe/awjo-udajog-nuuli-few-avi/index.html",revision:"186b92db68660eac21f7f9494a41b2ab"},{url:"pages/news-blog/europe/botas-wa-zacim-fakve/index.html",revision:"fe3c9fa65f58c91be1ec1f76db2b757e"},{url:"pages/news-blog/europe/bupkof-hefef-coteki/index.html",revision:"57d62366c1e3233da37c71c384191f9e"},{url:"pages/news-blog/europe/cogiv-zuzo-guguku/index.html",revision:"a873c4f0b59e08168a380e1eedf5062d"},{url:"pages/news-blog/europe/di-gisaf-pinsel-zopopgoz/index.html",revision:"402ef39a03c040cf83e6970ddfe31f60"},{url:"pages/news-blog/europe/dimu-teduh-cide/index.html",revision:"dc52e934064a65ce83d21129439412a9"},{url:"pages/news-blog/europe/eggesu-vugi-amuihi/index.html",revision:"17ed2ef1a326e18e2d8e8f695a45709f"},{url:"pages/news-blog/europe/egi-boidsu-aroeno/index.html",revision:"59ef82ea2317e284758393863542c646"},{url:"pages/news-blog/europe/ehekowel-atulo-jig-udofip-sopo/index.html",revision:"39cc05302065c7aabc4903a1f9d552ed"},{url:"pages/news-blog/europe/eke-vabme-tip/index.html",revision:"bb38bb6bf9784386c60138cbf02c0ec8"},{url:"pages/news-blog/europe/gekahsi-ballob-detjo-zeeje/index.html",revision:"e19f359b39359b9d6317588fb417015c"},{url:"pages/news-blog/europe/hum-nub-naje-wa/index.html",revision:"c634c8f61a65773c6c470259758c8f61"},{url:"pages/news-blog/europe/ivrus-juere-nuuscaw-tin/index.html",revision:"4438a7a8ce20e832a63c5ca5e715acca"},{url:"pages/news-blog/europe/jonut-fovmi-vivli-farep-ediat/index.html",revision:"9e35c6635599422716fe459c664449f6"},{url:"pages/news-blog/europe/lewiziv-ajsavis-zufzevrej-ir-a/index.html",revision:"974d8106fa3a4a864ce819efa699c7e7"},{url:"pages/news-blog/europe/lihhevjon-codnis-uti/index.html",revision:"f5dd7c2066559c737be7944a5b5ce827"},{url:"pages/news-blog/europe/lobas-cozezoh-zoshi-otwej-utde/index.html",revision:"07fb9e143bd57d7ecda5818e979171cd"},{url:"pages/news-blog/europe/my-first-post/index.html",revision:"c49ad0b48d8f250eec174eb2c36a6021"},{url:"pages/news-blog/europe/my-second-post/index.html",revision:"20c38f4ca5097c4a4b9bfb8772d53153"},{url:"pages/news-blog/europe/neszud-na-oti/index.html",revision:"70565b2109e7defb77c901cbf6e8d813"},{url:"pages/news-blog/europe/nu-enisedihi-lozi/index.html",revision:"aa916a934fc52c468021970bb416144a"},{url:"pages/news-blog/europe/nuhjip-zuowo-ajgi-rifuwsi/index.html",revision:"13908d12524bfc8e291f2a7b21bedd78"},{url:"pages/news-blog/europe/oso-jo-ke-jiki/index.html",revision:"1c26ed0661e20c0a2d2f528c9c3bb8a8"},{url:"pages/news-blog/europe/pafrokjib-cij-haklor-zohto/index.html",revision:"f9db3bc46a6223cb2bbf3112c6d3ff58"},{url:"pages/news-blog/europe/rel-wumimi-lavetno-da/index.html",revision:"6b6f44f0508cf4a8925d11c10ca9fc67"},{url:"pages/news-blog/europe/tesribci-tudca-lujepo-ibwoh/index.html",revision:"90b2afed2cb2c752f158e8e4e0747196"},{url:"pages/news-blog/europe/uv-nihfes-oniogu-vevvin-jebabw/index.html",revision:"cb8388591a43c0a38decd06f51cb700d"},{url:"pages/news-blog/europe/veud-fud-picuwpe/index.html",revision:"200c8da8f8f152a5bf0964197575b048"},{url:"pages/news-blog/europe/vigwec-sof-pejho-laufzeg-kafi/index.html",revision:"915ceea1292bf5b275e3688630b843b0"},{url:"pages/news-blog/europe/wihno-wite-ipefis/index.html",revision:"98d7b606240f4c1aa5bc5c58041e33ec"},{url:"pages/news-blog/europe/zo-hinombip-cotca-lemkig/index.html",revision:"592be9af4d4daa00d094f4152877d15e"},{url:"pages/news-blog/index.html",revision:"e9edbefdbc67d6c6981e5cede1974e35"},{url:"pages/news-blog/top.json",revision:"f1c85350ad216d36f2e3c9db1381c342"},{url:"pages/news-blog/top/arja-aro-zuh-migceme-wu/index.html",revision:"3c251ae1c7bedb7d77444afbd99f6c63"},{url:"pages/news-blog/top/ater-noviragiw-wo-atudor/index.html",revision:"7e613ba5500b099191314b45240a40bf"},{url:"pages/news-blog/top/bomzi-idevigi-wol-emi/index.html",revision:"75a8f5c409d45a6ec2cd614d8ffafcbd"},{url:"pages/news-blog/top/ce-kuwut-pig/index.html",revision:"045802d3c9d75b9128cc51052beb8bad"},{url:"pages/news-blog/top/damse-binkenlod-repvoh-akuzes-/index.html",revision:"3160cfeebee0c1f2213194fd237193b2"},{url:"pages/news-blog/top/di-volabi-seciw-zekgov-jej/index.html",revision:"09cbe6eb991bb03090d36e38f700fd15"},{url:"pages/news-blog/top/ej-se-pidtas-ne/index.html",revision:"03fc514ed74bee0c6b44420536516eb7"},{url:"pages/news-blog/top/ekitogwev-gizarjur-le-pa/index.html",revision:"9e2a9faf7e89f492e8b051e0720cf30b"},{url:"pages/news-blog/top/fekemuz-lano-leb-sebin/index.html",revision:"1ae703c89abc50c185e6fa5304d50bae"},{url:"pages/news-blog/top/ge-cikgeehi-anoledce-kehfi-pum/index.html",revision:"1bd1a59aeade7621fd5cfecc55f58fdf"},{url:"pages/news-blog/top/gerol-jumuh-patgev/index.html",revision:"1f72c8f49e99aa8c3334cda6eacce0e5"},{url:"pages/news-blog/top/godej-owi-hopi-fipufivut/index.html",revision:"0454a4071af4e7ef2f145b21fd2a6f52"},{url:"pages/news-blog/top/goin-julot-tosgika-lenrov/index.html",revision:"81dd0f062cea068ea4156156a2a6913d"},{url:"pages/news-blog/top/ilujho-osza-ogaak-sani-ifgik/index.html",revision:"c64572071956803c570ffebf0efa01c1"},{url:"pages/news-blog/top/im-bukwilec-dihi/index.html",revision:"9af6cce9679ba3e4622397abb18a08b5"},{url:"pages/news-blog/top/is-kamew-fiwdi-deide-ifelic/index.html",revision:"92d9a0fa363995978bcc6ff17b0b00f4"},{url:"pages/news-blog/top/iwi-tu-enowoj-vizid-tar/index.html",revision:"b06ca1e55e0ae259d56131f0a2f6c9cf"},{url:"pages/news-blog/top/jihlow-hegaeke-magler-jic/index.html",revision:"d943e1d3820ae7ea199512fa9278c8a5"},{url:"pages/news-blog/top/jupet-govigco-waapiwes-vim-wow/index.html",revision:"996c0559e2dc764c15ad7ddea8a1819d"},{url:"pages/news-blog/top/letopi-sosekwuj-am-wa-rorsow/index.html",revision:"b69e49f469b6387666b676c9c10bfa66"},{url:"pages/news-blog/top/mehfi-ok-dapon/index.html",revision:"f48f5d2812faae8f2ac3bb0a1f67d266"},{url:"pages/news-blog/top/motmindom-kec-ma-ol-niw/index.html",revision:"ecf067b7a54d9eea71ffed9f159f800d"},{url:"pages/news-blog/top/mu-ikkize-ko-puv/index.html",revision:"4d4b3e9d869ebf71af3a102fafb338d4"},{url:"pages/news-blog/top/owuhifce-ane-ba-renitmel-coac/index.html",revision:"62e80cb846c7f1f6a6aa40a9e8f8f3d9"},{url:"pages/news-blog/top/popse-wocjickiz-ne/index.html",revision:"fa183463a7c89a6deb0a2f3659f3b937"},{url:"pages/news-blog/top/savjaf-fide-me-rerju/index.html",revision:"6c7e267c9c7094ca3f0da6f797ae96fc"},{url:"pages/news-blog/top/sid-kinjizboh-si-vi-cakno/index.html",revision:"486f102474e563523552525668b90eea"},{url:"pages/news-blog/top/soreghi-johehho-foari/index.html",revision:"d8a8230b3e00ab88f1396d3511096782"},{url:"pages/news-blog/top/vefziw-ecfe-zime-vookiem-ogevo/index.html",revision:"4bee8f4d5f22aec8afccd1bc9dd5224f"},{url:"pages/news-blog/top/wued-memfiflol-akoh-mofkid/index.html",revision:"978a538bdbb981e6be4dd7c35cbd4e47"},{url:"pages/news-blog/top/zihir-lir-tuhoj-voko/index.html",revision:"274e6826ef306e4d491db29fd44954f3"},{url:"pages/news-blog/top/zofu-fu-pocje/index.html",revision:"2111e6bc57a6c911dec1f112f1539c2e"},{url:"pages/news-blog/top/zotlo-epaej-luwafas-fili-hef/index.html",revision:"a0205797990fdd98bbc0194306624a5c"},{url:"pages/news-blog/travel.json",revision:"760b6973a5aa88c0fc3d0f1cf3070a70"},{url:"pages/news-blog/travel/apipo-agooti-olhos-tudetos-jiw/index.html",revision:"326ac6fbbffbfdb35bd43f39cfc20225"},{url:"pages/news-blog/travel/caonjim-po-wewic-noteku/index.html",revision:"39925f9914c4117e9559cfde44c718ae"},{url:"pages/news-blog/travel/devpa-ajekos-dufeti-reit/index.html",revision:"554e830da55b7df88b2181bc629e6cad"},{url:"pages/news-blog/travel/eka-akeisa-mizi-fancegase/index.html",revision:"d2a3b2bb8763c6b80eaaee6defbfde73"},{url:"pages/news-blog/travel/ewbof-pejinkik-irad/index.html",revision:"18348d37d3cce7c2fd3bd22066dba94a"},{url:"pages/news-blog/travel/fuwveh-rowru-bodcu-beven/index.html",revision:"dafc0fed95b973158e5df2d7dbf16d47"},{url:"pages/news-blog/travel/ga-reti-gevuku-otvomep/index.html",revision:"b7d3dd823bf12d854a6af472092e7b82"},{url:"pages/news-blog/travel/gehu-jacnifge-vebed-lopef/index.html",revision:"79d83cacfe3709510609d1f6482f51be"},{url:"pages/news-blog/travel/gon-hi-facgot-fovetop/index.html",revision:"cb455c036f0680e3ccf8b5b423060ca0"},{url:"pages/news-blog/travel/gu-hinvom-como/index.html",revision:"59702d350f9d8b96faf4d906021e8f86"},{url:"pages/news-blog/travel/hisosozel-mojnun-dom-hipek-coa/index.html",revision:"68c95b5e7301602ae0a6d0c3ba58937e"},{url:"pages/news-blog/travel/icoug-se-im-gaheono/index.html",revision:"01d1bb29e3e40d96adcf55282ffa9aa8"},{url:"pages/news-blog/travel/idevumu-wivmanov-mofej-vovve/index.html",revision:"1a26848fa07e0b1f9deb367ca9cf8934"},{url:"pages/news-blog/travel/is-naecoh-ilotottu-wehe/index.html",revision:"df2e84e221e8a4ca7f9c802218e4bb8d"},{url:"pages/news-blog/travel/jebe-noehede-ihe-edoc/index.html",revision:"bc8de8755765728db6f151f4b27253e8"},{url:"pages/news-blog/travel/jejjo-utzo-jozte-ulanof/index.html",revision:"f9f9417209ed9f54a2c3e83b0542333c"},{url:"pages/news-blog/travel/kisso-jozodcu-zurnec/index.html",revision:"0bf4253c0aa7648ce8b2ee0a4c9a82a9"},{url:"pages/news-blog/travel/libonso-moh-hifdo-soow-pebmoll/index.html",revision:"064297df455d75904249895876860cdd"},{url:"pages/news-blog/travel/luiki-efep-cuktaj-uvci-su/index.html",revision:"d1d1f08fe36c88bea7c0c0deb7bf411d"},{url:"pages/news-blog/travel/lule-gufezde-kofvo/index.html",revision:"fe43406dc33c5245cf1be54f50d57672"},{url:"pages/news-blog/travel/mimlo-wet-cov-ho/index.html",revision:"74788ac396ad5a78d71d95a416c82ec7"},{url:"pages/news-blog/travel/my-first-post/index.html",revision:"77e620a8d76527aedcbb88e999ec1019"},{url:"pages/news-blog/travel/my-second-post/index.html",revision:"49a7e8380c403873a672d673846ae102"},{url:"pages/news-blog/travel/nogji-gaweno-ke/index.html",revision:"9cc7eab64243d521a5c13c8547e30ed1"},{url:"pages/news-blog/travel/ownuk-adiwusir-dijipup-fuinu/index.html",revision:"3e80bff181338a42f7bc187c7cf496f7"},{url:"pages/news-blog/travel/sifo-zodeg-gesel/index.html",revision:"067bf6bd6108f6aaba1567278475149f"},{url:"pages/news-blog/travel/sowzo-ijeva-kiruri-muckivle/index.html",revision:"922e853c420d477d0cd1a4803c356834"},{url:"pages/news-blog/travel/su-tawug-azgeuc-helaw/index.html",revision:"a06c18fd7426f3491c2f6395016b4944"},{url:"pages/news-blog/travel/todmoj-upeeshaf-mowis-jinowo-o/index.html",revision:"c3fb1fb840ab1b6d00b6c20c51a39e0a"},{url:"pages/news-blog/travel/totepo-vik-fu/index.html",revision:"58962f5ce6081956c1b30bb3c3483c9d"},{url:"pages/news-blog/travel/unu-sugef-attib-ep/index.html",revision:"7539c8c8b0bc31e669a7054aaf5ee98a"},{url:"pages/news-blog/travel/waj-kupvenpo-hocniin/index.html",revision:"590bc4dc6099f6c313ea5bfe05fb6981"},{url:"pages/news-blog/travel/wif-jogjo-nurlus-wodhip/index.html",revision:"e8c6ac5a14308288b1d396d49092080c"},{url:"pages/news-blog/travel/wifewec-kicgakev-le-odual/index.html",revision:"0d7dd3a6620efacd3750fa6e15f2d00b"},{url:"pages/news-blog/travel/zo-in-hitmefmag/index.html",revision:"fe098037ce2572de6de80b415b974ac5"},{url:"pages/news-blog/world.json",revision:"68755b1bcf7593a0d335b18691309186"},{url:"pages/news-blog/world/avpa-bedowno-kasu-fofgiihe/index.html",revision:"17ada71c7dc81c31df7b88fc27428087"},{url:"pages/news-blog/world/bokefko-foha-coza-na/index.html",revision:"44afa8c1e8ed39a9265be428701589b2"},{url:"pages/news-blog/world/cag-ovcowe-hivzid-zip-wizidgeb/index.html",revision:"7a16d2729c0aafc63987bb3450787657"},{url:"pages/news-blog/world/emkeggu-juninzol-si-efanu-litc/index.html",revision:"bcc8f997bfa8d686ed3fe4244ff325cd"},{url:"pages/news-blog/world/foipziw-wef-heiw-tepipcip/index.html",revision:"027ac952bfcb0e35671bf0236701cab2"},{url:"pages/news-blog/world/gehjel-ifiwifo-peome-hecava/index.html",revision:"030d676bfb59da70cc314b1d7217c8f5"},{url:"pages/news-blog/world/idewet-gelidohet-wevce/index.html",revision:"0dff3d9430b219e2d106a665765ce639"},{url:"pages/news-blog/world/izijih-mowocoli-asuoje-ope/index.html",revision:"63ad9053ee79051bf6550abccdc8d84c"},{url:"pages/news-blog/world/jimpeho-ren-vif/index.html",revision:"838c7d0e0ff6dd87a7817241f59e127f"},{url:"pages/news-blog/world/lefle-ef-izoso-he/index.html",revision:"c56e35feca98c7c83b34a5085074e1ac"},{url:"pages/news-blog/world/me-niep-koje-duzdev/index.html",revision:"79c102d856e2562733832aeead778654"},{url:"pages/news-blog/world/nifu-dovhi-fecal/index.html",revision:"dedb5162e3435701eaddd3d76070bc54"},{url:"pages/news-blog/world/ogkico-jehjon-pacaco-dodmen/index.html",revision:"22c1a6316ac418f92ee2344ad224ffa3"},{url:"pages/news-blog/world/os-kujom-poke-tuobi/index.html",revision:"ac47da21cc0e41d8e24c105ba5b53d6d"},{url:"pages/news-blog/world/pe-poso-meturuko-favlu/index.html",revision:"32226f4330b70c1700a2091b866a32fd"},{url:"pages/news-blog/world/pedja-soagevuf-movdi-wa-ke/index.html",revision:"d6201872950d4a743ac26a859ac9a5e9"},{url:"pages/news-blog/world/riaf-vegvo-wakvag-evoha/index.html",revision:"317e2a6259c57498449603cbd558e472"},{url:"pages/news-blog/world/rigel-pu-motiw/index.html",revision:"0a605f9c47aebcc9beb8b2ab007eb96f"},{url:"pages/news-blog/world/risa-jeboc-laf-pecad/index.html",revision:"5fbfaa712600908f3ebbc00b5f6997ab"},{url:"pages/news-blog/world/runurapo-novjalwi-wefata/index.html",revision:"fb579a2d8b8ecc583c29118d94f7d425"},{url:"pages/news-blog/world/seuh-mopotdof-evja-wocdu/index.html",revision:"8ef94edd321c3189d9fc8faa0e01167f"},{url:"pages/news-blog/world/sip-cidmele-jic/index.html",revision:"1e7b4e5a525e04909f8801806eeb6bec"},{url:"pages/news-blog/world/sukojdi-enaijelot-af-bitod/index.html",revision:"0501f105545430ba37e115a53fbd6bf0"},{url:"pages/news-blog/world/tazad-igruw-fetid-agobek/index.html",revision:"57d49601790aba54c2331627266d6aba"},{url:"pages/news-blog/world/towi-geb-wocliltew/index.html",revision:"e7d16e0bc7bc9c946fbd978e1407c6b0"},{url:"pages/news-blog/world/udco-cuke-sitpeg-rorgoje/index.html",revision:"419a9fc676cfef6eebed3d01bf0561c9"},{url:"pages/news-blog/world/uzsov-fefevohev-duofre-celo-gi/index.html",revision:"df5633739561c6b4c47ac9eb598c8353"},{url:"pages/news-blog/world/wioti-zijobu-aswigozi-keczewgo/index.html",revision:"ff2221cd517fe5e1180ea40ad5db9386"},{url:"pages/news-blog/world/zaso-awuap-eki/index.html",revision:"488b5b45e3d0274e60cc9acaf0c8e14a"},{url:"pages/news-blog/world/zisek-kaghitis-mepdu-luwen-ohf/index.html",revision:"60c3111a2648ee8d9c9898b8f7b3a6b4"},{url:"pages/news-blog/world/zog-piwloc-gel-maf-abuijeila/index.html",revision:"5efb0c9aea965f78d17be3ee0082a38d"},{url:"pages/news-blog/world/zowil-cigikof-sosped-meflod-re/index.html",revision:"7a8378c6a47314579499b732f86b8c7f"},{url:"pages/news-blog/world/zozzihavu-rem-ogbaf-emi/index.html",revision:"17305db99375200f29ec6150ec111a96"},{url:"pages/search/index.html",revision:"07913073d6c14497e613663dfbed235a"},{url:"search-index.json",revision:"6e24e38fcc3bbe49825235c5b238e2b6"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"19007d16c73f442f44c926beddc34637"},{url:"images/icons/icon-512x512.png",revision:"274298ed7162d12352fa836d3a2cb11e"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/menu_open_black_48dp.svg",revision:"6a65883ec5d5058af76c169ed17edc71"},{url:"images/page-speed-insight-icon.png",revision:"85f446592394b827475c3c5d11f66924"},{url:"images/profile-icon.png",revision:"56f0c7de57fdae6d0a9ddc43448b6dff"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
