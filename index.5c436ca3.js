!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o("fJh0j"),o("kitKc"),o("6c9nX");var a=o("bpxeT"),i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return c.default(e)||s.default(e)||u.default(e)||l.default()};var c=d(o("kMC0W")),s=d(o("7AJDX")),l=d(o("8CtQK")),u=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f=o("2TvXO"),v=o("jzQFI"),p="659c146febfafc17fd54baa17527f7fa",m=document.querySelector(".home-list"),g="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(p);function y(){return(y=e(a)(e(f).mark((function t(n){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=e(a)(e(f).mark((function t(){var n;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return h.apply(this,arguments)})().then((function(t){var n=t.genres,r=e(i)(n);localStorage.setItem("arrow",JSON.stringify(r))}));var _=v.default.load("arrow");(function(e){return y.apply(this,arguments)})(g).then((function(e){var t=e.results;t.poster_path;var n=t.map((function(e){var t=e.id,n=e.poster_path,r=e.title,o=e.original_title,a=e.genre_ids,i=e.release_date,c=e.original_name,s=e.first_air_date,l=[],u="",d=!0,f=!1,v=void 0;try{for(var p,m=a[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var g=p.value,y=!0,h=!1,b=void 0;try{for(var k,x=_[Symbol.iterator]();!(y=(k=x.next()).done);y=!0){var w=k.value;g===w.id&&(l.push(w.name),a.length>2&&(u=",Other"))}}catch(e){h=!0,b=e}finally{try{y||null==x.return||x.return()}finally{if(h)throw b}}}}catch(e){f=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw v}}var j=i,L=s;i&&(j=j.slice(0,4)),s&&(L=L.slice(0,4));var M="https://image.tmdb.org/t/p/w500".concat(n);return'<li class="home-card js-modal-open" data-card-movie-id="'.concat(t,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(M,'" alt="').concat(r,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(l.splice(0,3),"  ").concat(u,"</span>\n                        \n                        |\n                        <span>").concat(j||L,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");v.default.save("movies",t),m.insertAdjacentHTML("beforeend",n)})),o("qikvZ"),o("5xtVg");var b=document.querySelector(".footer__rights-link"),k=document.querySelector(".modal__closeBtn"),x=document.querySelector(".backdropp");function w(e){console.log(e),"Escape"===e.code&&(x.classList.add("is-hidden"),document.removeEventListener("keydown",w))}console.log(x),b.addEventListener("click",(function(e){e.preventDefault(),x.classList.toggle("is-hidden"),document.addEventListener("keydown",w)})),k.addEventListener("click",(function(e){x.classList.remove("is-hidden")})),x.addEventListener("click",(function(e){document.removeEventListener("keydown",w),x.classList.add("is-hidden")})),o("jzQFI");var j,L=o("qikvZ"),M=o("jcFG7"),S={comeBackButton:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function P(){M.currentPage=L.storagePage.value,E()}function E(){S.visitModal.classList.toggle("is-hidden"),!0===S.visitModal.classList.value.includes("hidden")&&(clearTimeout(j),S.comeBackButton.removeEventListener("click",P),S.visitCloseBtn.removeEventListener("click",E))}S.comeBackButton.addEventListener("click",P),S.visitCloseBtn.addEventListener("click",E),1==M.currentPage||void 0===(null===L.storagePage||void 0===L.storagePage?void 0:L.storagePage.value)||(E(),j=setTimeout((function(){E()}),15e3))}();
//# sourceMappingURL=index.5c436ca3.js.map
