!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o("fJh0j");var i={};function a(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,s,"next",e)}function s(e){a(i,n,o,c,s,"throw",e)}c(void 0)}))}};var c={},s=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?p:d,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,i,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(M([])));b&&b!==r&&n.call(b,i)&&(w=b);var L=g.prototype=y.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function M(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return m.prototype=g,s(L,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},x(E.prototype),s(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(c);try{regeneratorRuntime=s}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var l=o("jzQFI"),u=o("qikvZ"),f=document.querySelector(".form-field"),d=document.querySelector(".home-list"),h=document.querySelector(".spinner-loader"),p=document.querySelector(".search-result"),v="";function y(e){return e.map((function(e){var t=e.id,r=e.poster_path,n=e.title,o=e.original_title,i=e.genres_ids,a=e.release_date,c=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",s=new Date(a).getFullYear();return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(t,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(c,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(i,"</span>\n                        |\n                        <span>").concat(s,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function m(e,t){return g.apply(this,arguments)}function g(){return(g=e(i)(e(c).mark((function t(r,n){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:r}),e.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?".concat(o,"&page=").concat(n)).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){return{movies:e.results}})));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){if(p.classList.add("is-hidden"),h.classList.remove("is-hidden"),v=null===u.storageLastSearchText||void 0===u.storageLastSearchText?void 0:u.storageLastSearchText.movie,null===u.storagePage||void 0===u.storagePage?void 0:u.storagePage.value,""===v)return h.classList.add("is-hidden"),alert("Empty field");m(v).then((function(e){var t=e.movies;if(0===t.length)return h.classList.add("is-hidden"),void p.classList.remove("is-hidden");l.default.save("movies",t),d.innerHTML=y(t),h.classList.add("is-hidden"),setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(e){return e.classList.remove("placeholdify")}))}),2e3)}))}null==f||f.addEventListener("submit",(function(e){if(e.preventDefault(),p.classList.add("is-hidden"),h.classList.remove("is-hidden"),""===(v=f.elements.query.value.trim()))return h.classList.add("is-hidden"),alert("Empty field");m(v).then((function(e){var t=e.movies;if(0===t.length)return h.classList.add("is-hidden"),void p.classList.remove("is-hidden");l.default.save(u.STORAGE_MOVIES_SEARCH,{movie:v}),l.default.save("movies",t),d.innerHTML=y(t),h.classList.add("is-hidden"),setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(e){return e.classList.remove("placeholdify")}))}),2e3)}))})),o("6c9nX");var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e){return b.default(e)||L.default(e)||E.default(e)||x.default()};var b=j(o("kMC0W")),L=j(o("7AJDX")),x=j(o("8CtQK")),E=j(o("auk6i"));function j(e){return e&&e.__esModule?e:{default:e}}l=o("jzQFI");o("jcFG7");var k="659c146febfafc17fd54baa17527f7fa",S=document.querySelector(".home-list"),O="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(k);function M(e){return P.apply(this,arguments)}function P(){return(P=e(i)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=e(i)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(k,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return T.apply(this,arguments)})().then((function(t){var r=t.genres,n=e(_)(r);localStorage.setItem("arrow",JSON.stringify(n))}));var F=l.default.load("arrow");M(O).then((function(e){var t=e.results;t.poster_path;var r=t.map((function(e){var t=e.id,r=e.poster_path,n=e.title,o=e.original_title,i=e.genre_ids,a=e.release_date,c=e.original_name,s=e.first_air_date,l=[],u="",f=!0,d=!1,h=void 0;try{for(var p,v=i[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value,m=!0,g=!1,w=void 0;try{for(var _,b=F[Symbol.iterator]();!(m=(_=b.next()).done);m=!0){var L=_.value;y===L.id&&(l.push(L.name),i.length>2&&(u=",Other"))}}catch(e){g=!0,w=e}finally{try{m||null==b.return||b.return()}finally{if(g)throw w}}}}catch(e){d=!0,h=e}finally{try{f||null==v.return||v.return()}finally{if(d)throw h}}var x=a,E=s;a&&(x=x.slice(0,4)),s&&(E=E.slice(0,4));var j="https://image.tmdb.org/t/p/w500".concat(r);return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(t,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(j,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(l.splice(0,3),"  ").concat(u,"</span>\n                        \n                        |\n                        <span>").concat(x||E,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(e){return e.classList.remove("placeholdify")}))}),2e3),l.default.save("movies",t),S.insertAdjacentHTML("beforeend",r)}));M();o("qikvZ"),o("5xtVg"),o("jcFG7"),o("gXLk6"),o("jzQFI");u=o("qikvZ");var q,A=o("jcFG7"),N={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function I(){N.visitModal.classList.toggle("is-hidden"),!0===N.visitModal.classList.value.includes("hidden")&&(clearTimeout(q),N.comeBackBtn.removeEventListener("click",B),N.visitCloseBtn.removeEventListener("click",I))}function B(){N.visitModal.classList.toggle("is-hidden"),w(),!0===N.visitModal.classList.value.includes("hidden")&&(clearTimeout(q),N.comeBackBtn.removeEventListener("click",B),N.visitCloseBtn.removeEventListener("click",I))}if(N.comeBackBtn.addEventListener("click",B),N.visitCloseBtn.addEventListener("click",I),1==A.currentPage||void 0===(null===u.storagePage||void 0===u.storagePage?void 0:u.storagePage.value)||(I(),q=setTimeout((function(){I()}),15e3)),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload"),document.querySelectorAll('image[loading="lazy"]').forEach((function(e){e.src=e.dataset.src}))}else{console.log("Браузер не підтримує lazyload");var G=document.createElement("script");G.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",G.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",G.crossOrigin="anonymous",G.referrerpolicy="no-referrer",document.body.appendChild(G)}var C=document.querySelectorAll("image[data-src]");function z(e){console.log("Зображення завантажилось")}console.log(C),C.forEach((function(e){e.addEventListener("load",z,{once:!0})}))}();
//# sourceMappingURL=index.ce0ff6a4.js.map
