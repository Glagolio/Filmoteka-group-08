function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r),r.register("7EEHk",(function(t,e){})),r.register("5uEKZ",(function(e,n){t(e.exports,"default",(function(){return o}));var o={save:(t,e)=>{try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{null!==localStorage.getItem(t)&&localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}}})),r.register("ijW3m",(function(e,n){t(e.exports,"STORAGE_MOVIES_SEARCH",(function(){return d})),t(e.exports,"storagePage",(function(){return s})),t(e.exports,"storageLastSearchText",(function(){return l}));var o=r("5uEKZ"),a=r("2nhTy");const i="last visit page",d="last visit search",s=o.default.load(i),l=o.default.load(d);o.default.save(i,{value:a.currentPage})})),r.register("2nhTy",(function(e,n){t(e.exports,"currentPage",(function(){return p}));const o=document.querySelector(".js-search-form"),r=document.querySelector(".js-card-library"),a=document.querySelector('[data-index="1"]'),i=document.querySelector('[data-index="2"]'),d=document.querySelector('[data-index="3"]'),s=document.querySelector('[data-index="4"]'),l=document.querySelector('[data-index="5"]'),c=document.querySelector(".first-button"),u=document.querySelector(".last-button"),m=document.querySelector(".pagination-container"),v=document.querySelector(".arrow-right"),f=document.querySelector(".arrow-left"),g=document.querySelector("#previous"),b=document.querySelector("#after");m.addEventListener("click",(function(t){"BUTTON"===t.target.tagName&&(Number(t.target.textContent)&&(p=Number(t.target.textContent)),g.hidden=!0,b.hidden=!0,t.target.classList.contains("pagination-button")&&(h.forEach((t=>t.classList.remove("pagination--current"))),t.target.classList.add("pagination--current")),t.target.classList.contains("arrow-right")&&p<1e3&&(h.forEach((t=>t.classList.remove("pagination--current"))),a.classList.add("pagination--current"),a.textContent=Number(a.textContent)+5,i.textContent=Number(i.textContent)+5,d.textContent=Number(d.textContent)+5,s.textContent=Number(s.textContent)+5,l.textContent=Number(l.textContent)+5,p=a.textContent),t.target.classList.contains("arrow-left")&&p>=5&&(h.forEach((t=>t.classList.remove("pagination--current"))),a.textContent=Number(a.textContent)-5,i.textContent=Number(i.textContent)-5,d.textContent=Number(d.textContent)-5,s.textContent=Number(s.textContent)-5,l.textContent=Number(l.textContent)-5,l.classList.add("pagination--current"),p=l.textContent),t.target.classList.contains("first-button")&&(h.forEach((t=>t.classList.remove("pagination--current"))),a.textContent=1,i.textContent=2,d.textContent=3,s.textContent=4,l.textContent=5,a.classList.add("pagination--current"),p=a.textContent,f.hidden=!0,g.hidden=!0,c.hidden=!0),t.target.classList.contains("last-button")&&(h.forEach((t=>t.classList.remove("pagination--current"))),a.textContent=Number(u.textContent)-4,i.textContent=Number(u.textContent)-3,d.textContent=Number(u.textContent)-2,s.textContent=Number(u.textContent)-1,l.textContent=u.textContent,l.classList.add("pagination--current"),p=l.textContent,v.hidden=!0,b.hidden=!0,u.hidden=!0),Number(p)>5?(f.hidden=!1,g.hidden=!1,c.hidden=!1):(f.hidden=!0,g.hidden=!0,c.hidden=!0),Number(p)<996&&(v.hidden=!1,b.hidden=!1,u.hidden=!1),r.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),""!==o.value?fetchMovies(o.value,p):fetchFilms())}));let p=1,h=document.querySelectorAll(".pagination-button");g.hidden=!0,f.hidden=!0,c.hidden=!0})),r.register("3iG6G",(function(e,n){function o(){setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((t=>t.classList.remove("placeholdify")))}),2e3)}t(e.exports,"removeSceletonLoad",(function(){return o}))})),r.register("5RajV",(function(t,e){})),r.register("bTcpz",(function(t,e){var n=r("5uEKZ");const o=document.querySelector("[data-modal]"),a=document.querySelector("[data-modal-close]");function i(t){"Escape"===t.code&&s()}function d(t,e){var o;return null===(o=n.default.load(e))||void 0===o?void 0:o.find((e=>e.id.toString()===t))}function s(){n.default.remove("current-movie"),document.addEventListener("keydown",i),document.body.style.overflow="",o.classList.add("is-hidden")}function l(t,e,o){let r=n.default.load(t)||[];o.classList.remove("added"),r=r.filter((t=>t.id.toString()!=e.id)),n.default.save(t,r)}function c(t,e){var o;return null===(o=n.default.load(t))||void 0===o?void 0:o.some((t=>t.id.toString()===e))}document.querySelector(".movies-container").addEventListener("click",(t=>{t.target.closest(".js-modal-open")&&(t.preventDefault(),function(t){document.addEventListener("keydown",i),o.querySelector(".modal-movie").dataset.modalMovieId=t,o.querySelector(".modal-movie").innerHTML=function(t){const e=d(t,"movies")||d(t,"watched-list")||d(t,"queue-list");n.default.save("current-movie",e);const{poster_path:o,title:r,original_title:a,genres_ids:i,release_date:s,vote_average:l,vote_count:u,popularity:m,overview:v}=e;let f=c("watched-list",(t=t.toString()).toString())?"added":"";const g=`<div class="modal-movie__btn movie-btn movie-btn--watched ${f}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;f=c("queue-list",t.toString())?"added":"";const b=`<div class="modal-movie__btn movie-btn movie-btn--queue ${f}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>`;return`<div class="modal-movie__poster">\n            <img src='https://image.tmdb.org/t/p/w500${o}' alt="${r}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${r}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">${l.toFixed(1)}</span>\n                            <span>/</span>\n                            <span class="votes">${u}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${m.toFixed(0)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${a}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${i}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${v}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${g}\n                    ${b}\n                </div>\n                </div>\n            </div>`}(t),document.body.style.overflow="hidden",o.classList.remove("is-hidden");!function(t,e){const n=2500,o=.1;let r=document.querySelector("#out"),a=0,i=Math.round(n/(t/o)),d=setInterval((()=>{a+=o,a>=t&&clearInterval(d),r.innerHTML=a.toFixed(1)}),i)}(o.querySelector("#out").textContent)}(t.target.closest(".js-modal-open").dataset.cardMovieId))})),a.addEventListener("click",s),o.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void s();"BUTTON"===t.target.nodeName&&function(t){var e;const o=(null===(e=t.dataset)||void 0===e?void 0:e.modalAddTo)+"-list",r="current-movie",a=n.default.load(r);n.default.load(o)&&c(o,a.id.toString())?l(o,a,t):(o.includes("watch")&&c("queue-list",a.id.toString())&&(console.log("already in queue"),l("queue-list",a,t.parentElement.querySelector(".movie-btn--queue"))),function(t,e,o){let r=n.default.load(t)||[];r.push(e),o.classList.add("added"),n.default.save(t,r)}(o,a,t))}(t.target.closest(".movie-btn"))}))})),r.register("5R1Ed",(function(t,e){const n=document.querySelector(".footer__rights-link"),o=document.querySelector(".modal__closeBtn"),r=document.querySelector(".backdropp");function a(t){console.log(t),"Escape"===t.code&&(r.classList.add("is-hidden"),document.removeEventListener("keydown",a))}console.log(r),n.addEventListener("click",(t=>{t.preventDefault(),r.classList.toggle("is-hidden"),document.addEventListener("keydown",a)})),o.addEventListener("click",(t=>{r.classList.remove("is-hidden")})),r.addEventListener("click",(function(t){document.removeEventListener("keydown",a),r.classList.add("is-hidden")}))}));
//# sourceMappingURL=index.d6a5b3fe.js.map
