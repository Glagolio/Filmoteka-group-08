!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o("fJh0j"),o("kitKc"),o("6c9nX");var a=o("bpxeT"),i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return c.default(e)||l.default(e)||u.default(e)||s.default()};var c=d(o("kMC0W")),l=d(o("7AJDX")),s=d(o("8CtQK")),u=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f=o("2TvXO"),p=o("jzQFI");o("jcFG7");var v="659c146febfafc17fd54baa17527f7fa",m=document.querySelector(".home-list"),y="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(v);function g(e){return h.apply(this,arguments)}function h(){return(h=e(a)(e(f).mark((function t(r){var n;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=e(a)(e(f).mark((function t(){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(v,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return _.apply(this,arguments)})().then((function(t){var r=t.genres,n=e(i)(r);localStorage.setItem("arrow",JSON.stringify(n))}));var b=p.default.load("arrow");g(y).then((function(e){var t=e.results;t.poster_path;var r=t.map((function(e){var t=e.id,r=e.poster_path,n=e.title,o=e.original_title,a=e.genre_ids,i=e.release_date,c=e.original_name,l=e.first_air_date,s=[],u="",d=!0,f=!1,p=void 0;try{for(var v,m=a[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value,g=!0,h=!1,_=void 0;try{for(var k,j=b[Symbol.iterator]();!(g=(k=j.next()).done);g=!0){var x=k.value;y===x.id&&(s.push(x.name),a.length>2&&(u=",Other"))}}catch(e){h=!0,_=e}finally{try{g||null==j.return||j.return()}finally{if(h)throw _}}}}catch(e){f=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw p}}var M=i,w=l;i&&(M=M.slice(0,4)),l&&(w=w.slice(0,4));var O="https://image.tmdb.org/t/p/w500".concat(r);return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(t,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(O,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(s.splice(0,3),"  ").concat(u,"</span>\n                        \n                        |\n                        <span>").concat(M||w,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(e){return e.classList.remove("placeholdify")}))}),2e3),p.default.save("movies",t),m.insertAdjacentHTML("beforeend",r)}));g();o("qikvZ"),o("5xtVg"),o("jcFG7"),o("gXLk6"),o("jzQFI");var k,j=o("qikvZ"),x=o("jcFG7"),M=o("kitKc"),w={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function O(){w.visitModal.classList.toggle("is-hidden"),!0===w.visitModal.classList.value.includes("hidden")&&(clearTimeout(k),w.comeBackBtn.removeEventListener("click",S),w.visitCloseBtn.removeEventListener("click",O))}function S(){w.visitModal.classList.toggle("is-hidden"),(0,M.loadStoragePage)(),!0===w.visitModal.classList.value.includes("hidden")&&(clearTimeout(k),w.comeBackBtn.removeEventListener("click",S),w.visitCloseBtn.removeEventListener("click",O))}if(w.comeBackBtn.addEventListener("click",S),w.visitCloseBtn.addEventListener("click",O),1==x.currentPage||void 0===(null===j.storagePage||void 0===j.storagePage?void 0:j.storagePage.value)||(O(),k=setTimeout((function(){O()}),15e3)),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload"),document.querySelectorAll('image[loading="lazy"]').forEach((function(e){e.src=e.dataset.src}))}else{console.log("Браузер не підтримує lazyload");var E=document.createElement("script");E.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",E.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",E.crossOrigin="anonymous",E.referrerpolicy="no-referrer",document.body.appendChild(E)}var L=document.querySelectorAll("image[data-src]");function P(e){console.log("Зображення завантажилось")}console.log(L),L.forEach((function(e){e.addEventListener("load",P,{once:!0})}))}();
//# sourceMappingURL=index.7cd8dccc.js.map
