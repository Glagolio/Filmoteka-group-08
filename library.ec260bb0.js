function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("7EEHk",(function(e,t){})),a.register("bTcpz",(function(t,n){e(t.exports,"getGenres",(function(){return v}));var o=a("5uEKZ"),r=a("8uF2F");const d=document.querySelector("[data-modal]"),i=document.querySelector("[data-modal-close]");function l(e){"Escape"===e.code&&c()}function s(e,t){var n;return null===(n=o.default.load(t))||void 0===n?void 0:n.find((t=>t.id.toString()===e))}function c(){o.default.remove("current-movie"),document.addEventListener("keydown",l),document.body.style.overflow="",d.classList.add("is-hidden"),(0,r.checkWhatToLoad)(o.default.load("activeInStorage"))}function u(e,t,n){let a=o.default.load(e)||[];n.classList.remove("added"),a=a.filter((e=>e.id.toString()!=t.id)),o.default.save(e,a)}function m(e,t){var n;return null===(n=o.default.load(e))||void 0===n?void 0:n.some((e=>e.id.toString()===t))}function v(e,t){const n=o.default.load("arrow"),a=[];for(let o=0;o<e.length&&o<t;o++)for(const t of n)e[o]===t.id&&a.push(t.name);return e.length>t&&(a[t-1]="Other"),a.join(", ")}document.querySelector(".movies-container").addEventListener("click",(e=>{e.target.closest(".js-modal-open")&&(e.preventDefault(),function(e){document.addEventListener("keydown",l),d.querySelector(".modal-movie").dataset.modalMovieId=e,d.querySelector(".modal-movie").innerHTML=function(e){const t=s(e,"movies")||s(e,"watched-list")||s(e,"queue-list");o.default.save("current-movie",t);const{poster_path:n,title:a,original_title:r,genre_ids:d,release_date:i,vote_average:l,vote_count:c,popularity:u,overview:f}=t;e=e.toString();const g=n?`https://image.tmdb.org/t/p/w500${n}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";let p=m("watched-list",e.toString())?"added":"";const _=`<div class="modal-movie__btn movie-btn movie-btn--watched ${p}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;p=m("queue-list",e.toString())?"added":"";const h=`<div class="modal-movie__btn movie-btn movie-btn--queue ${p}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>`;return`<div class="modal-movie__poster">\n            <img src='${g}' alt="${a}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${a}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">${l.toFixed(1)}</span>\n                            ${c?` <span>/</span><span class="votes">${c}</span>`:""}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${u.toFixed(0)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${r}</td>\n                    </tr>\n                    <tr>\n                        ${d.length?`<td class="movie-table__title">Genre</td>\n                            <td class="movie-table__info">${v(d,d.length)}</td>`:""}\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${f||"no description."}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${_}\n                    ${h}\n                </div>\n                </div>\n            </div>`}(e),document.body.style.overflow="hidden",d.classList.remove("is-hidden");!function(e,t){const n=2500,o=.1;let a=document.querySelector("#out"),r=0,d=Math.round(n/(e/o)),i=setInterval((()=>{r+=o,r>=e&&clearInterval(i),a.innerHTML=r.toFixed(1)}),d)}(d.querySelector("#out").textContent)}(e.target.closest(".js-modal-open").dataset.cardMovieId))})),i.addEventListener("click",c),d.addEventListener("click",(function(e){if(e.currentTarget===e.target)return void c();"BUTTON"===e.target.nodeName&&function(e){var t;const n=(null===(t=e.dataset)||void 0===t?void 0:t.modalAddTo)+"-list",a="current-movie",r=o.default.load(a);o.default.load(n)&&m(n,r.id.toString())?u(n,r,e):(n.includes("watch")&&m("queue-list",r.id.toString())&&u("queue-list",r,e.parentElement.querySelector(".movie-btn--queue")),function(e,t,n){let a=o.default.load(e)||[];a.push(t),n.classList.add("added"),o.default.save(e,a)}(n,r,e))}(e.target.closest(".movie-btn"))}))})),a.register("5uEKZ",(function(t,n){e(t.exports,"default",(function(){return o}));var o={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}}})),a.register("8uF2F",(function(t,n){e(t.exports,"libraryContainer",(function(){return m})),e(t.exports,"checkWhatToLoad",(function(){return g})),e(t.exports,"funnyGuyOnBg",(function(){return b}));var o=a("adTa2"),r=a("5uEKZ");const d=document.querySelector(".library-list"),i=(document.querySelector(".spinner-loader"),document.querySelector(".empty-light")),l=document.querySelector(".empty-dark"),s="header__btn-active",c=document.querySelector(".js-watched-btn"),u=document.querySelector(".js-queue-btn"),m=document.querySelector(".library-container"),v="queue-list",f="watched-list";function g(e){m&&("q"==e&&(u.classList.add(s),p(),b()),"w"==e&&(c.classList.add(s),_(),b()))}function p(){y(v,u),b(),u.classList.add(s),c.classList.remove(s),r.default.save("activeInStorage","q")}function _(){y(f,c),b(),u.classList.remove(s),c.classList.add(s),r.default.save("activeInStorage","w")}r.default.save("activeInStorage","q"),g(r.default.load("activeInStorage")),b(),null==u||u.addEventListener("click",p),null==c||c.addEventListener("click",_);localStorage.getItem("queue-list"),localStorage.getItem("watched-list");const h=localStorage.getItem("arrow");JSON.parse(h);function b(){m&&null===d.firstChild&&("light"===r.default.load("theme")?(i.style.display="flex",l.style.display="none"):(i.style.display="none",l.style.display="flex"))}function y(e,t){var n;m&&(void 0===r.default.load(e)||0===r.default.load(e).length?(t.classList.remove(".header__btn-active"),t.classList.add(".header__btn-noactive"),d.innerHTML=""):(t.classList.add(".header__btn-active"),n=e,d.innerHTML=(0,o.markUpWithGenres)(r.default.load(n))))}})),a.register("adTa2",(function(t,n){e(t.exports,"markUpWithGenres",(function(){return r}));var o=a("bTcpz");function r(e){return e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:r,release_date:d,original_name:i,first_air_date:l})=>{let s=d,c=l;d&&(s=s.slice(0,4)),l&&(c=c.slice(0,4));return`<li class="home-card js-modal-open" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${a||i}</h2>\n                    <p class="card-info_descr">\n                        ${r.length?`<span>${(0,o.getGenres)(r,3)}</span>`:""}\n                        \n                        |\n                        <span>${s||c}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("")}a("8uF2F")})),a.register("5R1Ed",(function(e,t){const n={modal:document.querySelector("[data-modal-team]"),closeBtn:document.querySelector(".modal__closeBtn"),openModalTeam:document.querySelector(".footer__rights-link")};function o(e){"Escape"===e.code&&a()}function a(){document.removeEventListener("keydown",o),n.modal.classList.add("is-hidden")}n.openModalTeam.addEventListener("click",(e=>{e.preventDefault(),n.modal.classList.toggle("is-hidden"),document.addEventListener("keydown",o)})),n.closeBtn.addEventListener("click",a),n.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}))})),a.register("4S0r6",(function(e,t){var n=a("8uF2F"),o=a("5uEKZ");const r=document.querySelector(".theme"),d=document.querySelector("body"),i=document.querySelector("#dark"),l=document.querySelector("#light");function s(e){"dark"===o.default.load(e)?d.classList.add("dark"):d.classList.remove("dark")}function c(){"dark"===o.default.load("theme")?l.classList.add("passive-btn"):l.classList.remove("passive-btn"),"light"===o.default.load("theme")?i.classList.add("passive-btn"):i.classList.remove("passive-btn"),n.libraryContainer&&(0,n.funnyGuyOnBg)()}s("theme"),c(),r.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;o.default.save("theme",e.target.value),s("theme"),c()})),n.libraryContainer||r.classList.add("theme-home-position")}));
//# sourceMappingURL=library.ec260bb0.js.map
