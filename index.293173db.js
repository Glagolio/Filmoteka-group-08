!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o("fJh0j");var i={};function a(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))}};var c={},s=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:d,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var w={};s(w,i,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(M([])));b&&b!==r&&n.call(b,i)&&(w=b);var L=g.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,s(L,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u=o("jzQFI"),l=o("qikvZ"),f=o("2BIkj"),d=document.querySelector(".form-field"),h=document.querySelector(".home-list"),p=document.querySelector(".spinner-loader"),v=document.querySelector(".search-result"),m="";function y(t){return t.map((function(t){var e=t.id,r=t.poster_path,n=t.title,o=t.original_title,i=t.genres_ids,a=t.release_date,c=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",s=new Date(a).getFullYear();return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(c,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(i,"</span>\n                        |\n                        <span>").concat(s,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function g(t,e){return w.apply(this,arguments)}function w(){return(w=t(i)(t(c).mark((function e(r,n){var o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:r}),t.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?".concat(o,"&page=").concat(n)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).then((function(t){return{movies:t.results}})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function _(){if(v.classList.add("is-hidden"),p.classList.remove("is-hidden"),m=null===l.storageLastSearchText||void 0===l.storageLastSearchText?void 0:l.storageLastSearchText.movie,null===l.storagePage||void 0===l.storagePage?void 0:l.storagePage.value,""===m)return p.classList.add("is-hidden"),alert("Empty field");g(m).then((function(t){var e=t.movies;if(0===e.length)return p.classList.add("is-hidden"),void v.classList.remove("is-hidden");u.default.save("movies",e),h.innerHTML=y(e),setTimeout((function(){p.classList.add("is-hidden")}),2e3),(0,f.removeSceletonLoad)()}))}null==d||d.addEventListener("submit",(function(t){if(t.preventDefault(),v.classList.add("is-hidden"),p.classList.remove("is-hidden"),""===(m=d.elements.query.value.trim()))return p.classList.add("is-hidden"),alert("Empty field");g(m).then((function(t){var e=t.movies;if(0===e.length)return p.classList.add("is-hidden"),void v.classList.remove("is-hidden");u.default.save(l.STORAGE_MOVIES_SEARCH,{movie:m}),u.default.save("movies",e),h.innerHTML=y(e),setTimeout((function(){p.classList.add("is-hidden")}),2e3),(0,f.removeSceletonLoad)()}))})),o("6c9nX");var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(t){return L.default(t)||x.default(t)||k.default(t)||j.default()};var L=E(o("kMC0W")),x=E(o("7AJDX")),j=E(o("8CtQK")),k=E(o("auk6i"));function E(t){return t&&t.__esModule?t:{default:t}}u=o("jzQFI");o("jcFG7");f=o("2BIkj");var S="659c146febfafc17fd54baa17527f7fa",O=document.querySelector(".home-list"),M="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(S);function P(t){return T.apply(this,arguments)}function T(){return(T=t(i)(t(c).mark((function e(r){var n;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=t(i)(t(c).mark((function e(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(S,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}(function(){return F.apply(this,arguments)})().then((function(e){var r=e.genres,n=t(b)(r);localStorage.setItem("arrow",JSON.stringify(n))}));var q=u.default.load("arrow");P(M).then((function(t){var e=t.results;e.poster_path;var r=e.map((function(t){var e=t.id,r=t.poster_path,n=t.title,o=t.original_title,i=t.genre_ids,a=t.release_date,c=t.original_name,s=t.first_air_date,u=[],l="",f=!0,d=!1,h=void 0;try{for(var p,v=i[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var m=p.value,y=!0,g=!1,w=void 0;try{for(var _,b=q[Symbol.iterator]();!(y=(_=b.next()).done);y=!0){var L=_.value;m===L.id&&(u.push(L.name),i.length>2&&(l=",Other"))}}catch(t){g=!0,w=t}finally{try{y||null==b.return||b.return()}finally{if(g)throw w}}}}catch(t){d=!0,h=t}finally{try{f||null==v.return||v.return()}finally{if(d)throw h}}var x=a,j=s;a&&(x=x.slice(0,4)),s&&(j=j.slice(0,4));var k="https://image.tmdb.org/t/p/w500".concat(r);return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(k,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(u.splice(0,3),"  ").concat(l,"</span>\n                        \n                        |\n                        <span>").concat(x||j,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");(0,f.removeSceletonLoad)(),u.default.save("movies",e),O.insertAdjacentHTML("beforeend",r)}));P();o("qikvZ"),o("5xtVg"),o("jcFG7"),o("gXLk6"),o("jzQFI");l=o("qikvZ");var I,N=o("jcFG7"),A={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function B(){A.visitModal.classList.toggle("is-hidden"),!0===A.visitModal.classList.value.includes("hidden")&&(clearTimeout(I),A.comeBackBtn.removeEventListener("click",G),A.visitCloseBtn.removeEventListener("click",B))}function G(){A.visitModal.classList.toggle("is-hidden"),_(),!0===A.visitModal.classList.value.includes("hidden")&&(clearTimeout(I),A.comeBackBtn.removeEventListener("click",G),A.visitCloseBtn.removeEventListener("click",B))}if(A.comeBackBtn.addEventListener("click",G),A.visitCloseBtn.addEventListener("click",B),1==N.currentPage||void 0===(null===l.storagePage||void 0===l.storagePage?void 0:l.storagePage.value)||(B(),I=setTimeout((function(){B()}),15e3)),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload"),document.querySelectorAll('image[loading="lazy"]').forEach((function(t){t.src=t.dataset.src}))}else{console.log("Браузер не підтримує lazyload");var C=document.createElement("script");C.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",C.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",C.crossOrigin="anonymous",C.referrerpolicy="no-referrer",document.body.appendChild(C)}var z=document.querySelectorAll("image[data-src]");function R(t){console.log("Зображення завантажилось")}console.log(z),z.forEach((function(t){t.addEventListener("load",R,{once:!0})}))}();
//# sourceMappingURL=index.293173db.js.map
