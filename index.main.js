(()=>{"use strict";var e={538:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const s=i},740:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lobster&family=Varela+Round&display=swap);"]),i.push([e.id,'/* Colors to use: \nHeader-background: #0f766e;\nMain-background: #5eead4; Or maybe use a background-image?\nFooter-background: #5eead4;\n*/\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  font-family: "Varela Round", sans-serif;\n}\n\nheader {\n  color: white;\n  background: linear-gradient(#000, #652e10);\n  height: 4rem;\n\n  box-shadow: inset 0px -2px 2px 2px rgba(33, 13, 88, 0.3);\n\n  padding: 0 1rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-size: 48px;\n  text-align: center;\n  margin-right: auto;\n  font-weight: 1000;\n  font-family: "Dancing Script", cursive;\n}\n\nul {\n  list-style-type: none;\n  margin-right: 1rem;\n  font-size: 36px;\n\n  display: flex;\n  gap: 2rem;\n  font-family: "Lobster", cursive;\n}\n\n.menu-nav-link:hover,\n.about-us-nav-link:hover,\n.contact-us-nav-link:hover {\n  cursor: pointer;\n  opacity: 0.7;\n  text-decoration: underline dotted;\n}\n\nmain {\n  min-height: calc(100% - 8rem);\n  width: 100%;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu {\n  bottom: 100%;\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1rem;\n  padding: 1rem;\n\n  color: #e5e7eb;\n  font-size: 20px;\n}\n\n.menuItems {\n  background-color: #0f172ab0;\n  box-shadow: 3px 3px 2px 2px rgba(255, 255, 255, 0.05);\n\n  padding: 1rem 4rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n}\n\n.menuItems:hover {\n  background-color: #0f172acf;\n  opacity: 0.95;\n}\n\n.menuItems img,\n.about-us img {\n  display: inline-block;\n  padding-top: 2rem;\n  height: 500px;\n  width: 500px;\n  opacity: 0.7;\n\n  box-shadow: 3px 3px 2px 2px rgba(255, 255, 255, 0.05);\n}\n\n.menuItems h2,\n.contact-us div h2,\n.about-us div h2 {\n  font-size: 36px;\n  text-align: center;\n\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n\n  font-family: "Lobster", cursive;\n}\n\n.menuItems p {\n  text-align: center;\n}\n\n.contact-us,\n.about-us {\n  height: 100%;\n  width: 80%;\n  margin: 1rem;\n  background-color: #0f172ab0;\n}\n\n.contact-us > div,\n.about-us > div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  padding: 2rem;\n  color: #e5e7eb;\n  font-size: 24px;\n}\n\n.contact-us span:nth-child(n + 1) {\n  font-size: 20px;\n  color: #cbd5e1;\n}\n\n.contact-us:first-child span.logo-about {\n  margin-top: 4rem;\n  font-size: 48px;\n  font-weight: 1000;\n  font-family: "Dancing Script", cursive;\n}\n\n.about-us img {\n  padding: 0;\n  margin: 0 auto;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n}\n\nfooter {\n  background: linear-gradient(#652e10, #000);\n  color: white;\n  height: 4rem;\n\n  gap: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter img {\n  color: white;\n  height: 3rem;\n  transition: 0.3 ease;\n}\n\nfooter img:hover {\n  cursor: pointer;\n  scale: 1.05;\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var p=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,o);o.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=o(e,a),l=0;l<r.length;l++){var u=t(r[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},436:(e,n,t)=>{t.d(n,{G:()=>a});const o=t.p+"8f525a18804eaa27ec12.jpg",a=()=>{const e=document.createElement("section");return e.classList.add("about-us"),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("img");t.src=o,t.title="Photo by Mile Modic on Unsplash",n.textContent="Our Story",n.style.textAlign="center";const a=[[],[],[],[]];for(let e=0;e<a.length;e++)a[e]=document.createElement("p");a[0].textContent="Lorem ipsum dolor sit amet. Eos culpa maxime ea beatae voluptatum vel recusandae aliquid. Ea iure quibusdam aut autem dolores et tenetur modi et galisum quisquam aut commodi aspernatur et dolorem similique? Est iste totam et rerum tenetur qui nisi adipisci et reprehenderit quas.",a[1].textContent="Et optio illum quo sint galisum ea error quis et labore repellendus. Nam voluptatem galisum aut reiciendis cupiditate ex sequi repellat aut aperiam reiciendis. Qui omnis repellendus ut corporis eveniet non galisum similique ea consequatur iure et possimus delectus a officia cupiditate.",a[2].textContent="At nihil quas hic officia laboriosam vel quaerat saepe. Eos consectetur culpa hic maiores saepe nam dolorem assumenda ea voluptatem internos eos deserunt fugiat. Sit provident quod nam sunt repudiandae a officia assumenda aut ipsa galisum non ipsa corporis ex tenetur culpa cum molestiae enim. Est officia architecto sit culpa voluptas aut quaerat odio sed enim numquam ex voluptatem labore est iusto fugiat in galisum laudantium!",a[3].textContent="Ut commodi necessitatibus quo blanditiis voluptas id iste voluptas ex maiores nulla est vitae quisquam et laboriosam sint! Rem odio omnis aut ipsum voluptas et laudantium labore ut rerum voluptas At consequatur animi. In officiis minus ea culpa voluptatem est voluptate nihil non consequatur excepturi ab facilis quia et amet asperiores. Ex ullam dolorem vel omnis quasi sed tempore doloribus sit ipsa illum.",e.appendChild(n),e.appendChild(t);for(let n=0;n<a.length;n++)e.appendChild(a[n]);return e})()),e}},455:(e,n,t)=>{t.d(n,{h:()=>o});const o=()=>{const e=document.createElement("section");return e.classList.add("contact-us"),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h2");n.textContent="Stay in Touch!",n.style.textAlign="center";const t=(()=>{const e=[[],[],[],[],[]];for(let n=0;n<e.length;n++)e[n]=document.createElement("p");return e[0].textContent="Our staff are ready to help with all of your needs to the best of their abilities!",e[1].textContent="We would love to hear from you! If you have any questions, comments or suggestions regarding our restaurant, please get in touch with us through: ",e[2].textContent="Phone: (123) 456-7890",e[3].textContent="Email: info@fakestaurant.com",e[4].textContent="Come by our restaurant and experience our culinary delights for yourself!",e})(),o=(()=>{const e=[[],[],[],[]];for(let n=0;n<e.length;n++)e[n]=document.createElement("span");return e[0].textContent="Fakestaurant",e[0].classList.add("logo-about"),e[1].textContent="123 Fake ST",e[2].textContent="Edmonton, AB",e[3].textContent="Canada, A1A 9Z9",e})();e.appendChild(n);for(let n=0;n<t.length;n++)e.appendChild(t[n]);for(let n=0;n<o.length;n++)e.appendChild(o[n]);return e})()),e}},694:(e,n,t)=>{t.d(n,{I8:()=>l,JL:()=>s,an:()=>c});var o=t(664),a=t(484),r=t(906),i=t(508);const s=()=>{const e=(()=>{const e=document.createElement("header"),n=document.createElement("h1");return n.textContent="Fakestaurant",e.appendChild(n),e})();return e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("ul");let t=document.createElement("li");t.textContent="Menu",t.classList.add("menu-nav-link"),n.appendChild(t);let o=document.createElement("li");o.textContent="Our Story",o.classList.add("about-us-nav-link"),n.appendChild(o);let a=document.createElement("li");return a.textContent="Get in Touch",a.classList.add("contact-us-nav-link"),n.appendChild(a),e.appendChild(n),e})()),e},c=()=>{const e=document.createElement("main");return e.setAttribute("style",`background-image: url(${i});`),e},l=()=>{const e=document.createElement("footer");return(()=>{const n=document.createElement("img");n.src=a,e.appendChild(n);const t=document.createElement("img");t.src=o,e.appendChild(t);const i=document.createElement("img");i.src=r,e.appendChild(i)})(),e}},391:(e,n,t)=>{t.d(n,{b:()=>l});var o=t(180),a=t(551),r=t(1),i=t(50),s=t(245),c=t(403);const l=()=>{const e=document.createElement("section");return e.classList.add("menu"),(n=>{const t=[[],[],[],[],[],[]];for(let e=0;e<6;e++)t[e]=document.createElement("section"),t[e][0]=document.createElement("h2"),t[e][1]=document.createElement("p"),t[e][2]=document.createElement("img"),t[e].appendChild(t[e][2]),t[e].appendChild(t[e][0]),t[e].appendChild(t[e][1]),t[e].classList.add("menuItems");t[0][2].src=o,t[0][2].title="Photo by Chad Montano on Unsplash",t[0][0].textContent="Chicken Wings",t[0][1].textContent="Choose from our classic fried wings flavored with garlic, hot buffalo, honey barbecue, or opt for our boneless wings. Our sides are absolutely delicious, so don't forget to add some fries, onion rings, mozzarella sticks, mac & cheese, and slaw! Enjoy!",t[1][2].src=a,t[1][2].title="Photo by Taine Noble on Unsplash",t[1][0].textContent="Poutine",t[1][1].textContent="Our menu offers a variety of delicious poutine dishes to enjoy. Start by choosing your favorite type of cheese curds - we have both classic cheddar and gouda. Then, top your poutine with a flavor of your choice – options include savory bacon, BBQ pulled pork, and vegan chili. Finally, decide on one of our custom sauces such as herb garlic aioli, honey mustard, and smoked mayo.",t[2][2].src=r,t[2][2].title="Photo by micheile henderson on Unsplash",t[2][0].textContent="Fajitas",t[2][1].textContent="Our menu includes tasty, authentic Mexican cuisine. Try our signature fajitas, made with marinated beef, chicken or shrimp, served with grilled peppers and onions, fresh guacamole and warm flour tortillas. We also offer burritos, tacos, nachos and enchiladas. All dishes are prepared using fresh ingredients and traditional Mexican flavors for an amazing culinary experience. Enjoy a delicious margarita with your meal to really get the full flavor of Mexico!",t[3][2].src=i,t[3][2].title="Photo by Ryan Concepcion on Unsplash",t[3][0].textContent="Caesar Salad",t[3][1].textContent="Enjoy our classic Caesar Salad! Our salad is made with freshly torn romaine lettuce, shaved Parmesan cheese, and homemade croutons, all lightly and deliciously dressed in our signature Caesar dressing. Enjoy the perfect side dish to any meal - or enjoy it on its own!",t[4][2].src=s,t[4][2].title="Photo by Taine Noble on Unsplash",t[4][0].textContent="BBQ Beans & Rice",t[4][1].textContent="BBQ beans and rice is a classic Southern-style dish packed with flavor. Our version is made with beans slow-cooked in a rich smoky BBQ sauce and served over fluffy white rice. It's perfect as a side dish or as a main course. Comfort food that's sure to bring a smile to your face!",t[5][2].src=c,t[5][2].title="Photo by Lama Roscu on Unsplash",t[5][0].textContent="In-house Ice-cream",t[5][1].textContent="Our in-house ice-cream is made with fresh and natural ingredients for a sweet and creamy experience. Our flavours range from the classic chocolate and vanilla to unique twists such as orange mango and cinnamon ginger. Every scoop is carefully crafted to provide a memorable and delicious taste. Enjoy this indulgent treat as a refreshing treat or as a special addition to any dessert.";for(let n=0;n<6;n++)e.appendChild(t[n])})(),e}},664:(e,n,t)=>{e.exports=t.p+"f20571328cd86147a8f0.svg"},484:(e,n,t)=>{e.exports=t.p+"162c299bdaf4b508ce56.svg"},245:(e,n,t)=>{e.exports=t.p+"29bae415b61f83af673f.jpg"},50:(e,n,t)=>{e.exports=t.p+"c172457941d27917a328.jpg"},180:(e,n,t)=>{e.exports=t.p+"8b613797e35049970a22.jpg"},1:(e,n,t)=>{e.exports=t.p+"56aed8432328bb87b07f.jpg"},403:(e,n,t)=>{e.exports=t.p+"f3205f7862d7d2567be1.jpg"},551:(e,n,t)=>{e.exports=t.p+"be31847e5110c1d0962a.jpg"},508:(e,n,t)=>{e.exports=t.p+"e385d3f06db1ce602f83.png"},906:(e,n,t)=>{e.exports=t.p+"63c262ccad0a8d817420.svg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),c=t.n(s),l=t(216),u=t.n(l),d=t(589),p=t.n(d),m=t(538),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(740),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,t(664),t(484),t(906),t(508),t.p,t(180),t(551),t(1),t(50),t(245),t(403);var b=t(391),v=t(436),y=t(455),x=t(694);const C=document.querySelector("body"),w=(0,x.JL)(),E=(0,x.an)(),k=(0,x.I8)(),q=(0,b.b)(),S=(0,y.h)(),j=(0,v.G)(),L=()=>{const e=()=>{E.contains(q)&&E.removeChild(q),E.contains(S)&&E.removeChild(S),E.contains(j)&&E.removeChild(j)};return{loadMenu:()=>{document.querySelector(".menu-nav-link").addEventListener("click",(n=>{n.stopPropagation(),e(),E.appendChild(q)}))},loadContacts:()=>{document.querySelector(".contact-us-nav-link").addEventListener("click",(n=>{n.stopPropagation(),e(),E.appendChild(S)}))},loadAbout:()=>{document.querySelector(".about-us-nav-link").addEventListener("click",(n=>{n.stopPropagation(),e(),E.appendChild(j)}))}}};onload=()=>{E.appendChild(q),C.appendChild(w),C.appendChild(E),C.appendChild(k),L().loadMenu(),L().loadContacts(),L().loadAbout()}})()})();