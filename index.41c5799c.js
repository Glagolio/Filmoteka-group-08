var e={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};function t(){setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3)}const n=document.querySelector(".home-list");async function o(e){return(await fetch(`${e}`)).json()}async function a(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()}a().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))}));const i=e.load("arrow");function s(t){n.innerHTML="",e.save(x,t),a().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))}));const i=e.load("arrow");o(`https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa&page=${t}`).then((({results:t})=>{t.poster_path;const o=t.map((({id:e,poster_path:t,title:n,original_title:o,genre_ids:a,release_date:s,original_name:r,first_air_date:d})=>{const l=[];let c="";for(const e of a)for(const t of i)e===t.id&&(l.push(t.name),a.length>2&&(c=",Other"));let m=s,u=d;s&&(m=m.slice(0,4)),d&&(u=u.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${o||r}</h2>\n                    <p class="card-info_descr">\n                        <span>${l.splice(0,2)}  ${c}</span>\n                        \n                        |\n                        <span>${m||u}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3),e.save("movies",t),n.insertAdjacentHTML("beforeend",o)}))}o("https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa").then((({results:o})=>{o.poster_path;const a=o.map((({id:e,poster_path:t,title:n,original_title:o,genre_ids:a,release_date:s,original_name:r,first_air_date:d})=>{const l=[];let c="";for(const e of a)for(const t of i)e===t.id&&(l.push(t.name),a.length>2&&(c=",Other"));let m=s,u=d;s&&(m=m.slice(0,4)),d&&(u=u.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${o||r}</h2>\n                    <p class="card-info_descr">\n                        <span>${l.splice(0,2)}  ${c}</span>\n                        \n                        |\n                        <span>${m||u}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");t(),e.save("movies",o),n.insertAdjacentHTML("beforeend",a)}));const r=document.querySelector(".js-search-form"),d=document.querySelector(".js-card-library"),l=document.querySelector('[data-index="1"]'),c=document.querySelector('[data-index="2"]'),m=document.querySelector('[data-index="3"]'),u=document.querySelector('[data-index="4"]'),v=document.querySelector('[data-index="5"]'),h=document.querySelector(".first-button"),p=document.querySelector(".last-button"),f=document.querySelector(".pagination-container"),g=document.querySelector(".arrow-right"),_=document.querySelector(".arrow-left"),b=document.querySelector("#previous"),y=document.querySelector("#after");f.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(L=Number(e.target.textContent)),b.hidden=!0,y.hidden=!0,e.target.classList.contains("pagination-button")&&(S.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&L<1e3&&(S.forEach((e=>e.classList.remove("pagination--current"))),l.classList.add("pagination--current"),l.textContent=Number(l.textContent)+5,c.textContent=Number(c.textContent)+5,m.textContent=Number(m.textContent)+5,u.textContent=Number(u.textContent)+5,v.textContent=Number(v.textContent)+5,L=l.textContent),e.target.classList.contains("arrow-left")&&L>=5&&(S.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=Number(l.textContent)-5,c.textContent=Number(c.textContent)-5,m.textContent=Number(m.textContent)-5,u.textContent=Number(u.textContent)-5,v.textContent=Number(v.textContent)-5,v.classList.add("pagination--current"),L=v.textContent),e.target.classList.contains("first-button")&&(S.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=1,c.textContent=2,m.textContent=3,u.textContent=4,v.textContent=5,l.classList.add("pagination--current"),L=l.textContent,_.hidden=!0,b.hidden=!0,h.hidden=!0),e.target.classList.contains("last-button")&&(S.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=Number(p.textContent)-4,c.textContent=Number(p.textContent)-3,m.textContent=Number(p.textContent)-2,u.textContent=Number(p.textContent)-1,v.textContent=p.textContent,v.classList.add("pagination--current"),L=v.textContent,g.hidden=!0,y.hidden=!0,p.hidden=!0),Number(L)>5?(_.hidden=!1,b.hidden=!1,h.hidden=!1):(_.hidden=!0,b.hidden=!0,h.hidden=!0),Number(L)<996&&(g.hidden=!1,y.hidden=!1,p.hidden=!1),null!==d&&(d.innerHTML="",window.scrollTo({top:0,behavior:"smooth"})),""!==r.value?U(L):s(L))}));let L=1,S=document.querySelectorAll(".pagination-button");b.hidden=!0,_.hidden=!0,h.hidden=!0;const x="last visit popular",C=e.load(x),q=e.load("last visit page"),E=e.load("last visit search"),$={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};let k;function w(){$.visitModal.classList.toggle("is-hidden"),!0===$.visitModal.classList.value.includes("hidden")&&(clearTimeout(k),$.comeBackBtn.removeEventListener("click",T),$.visitCloseBtn.removeEventListener("click",w))}function T(){let e=1;$.visitModal.classList.toggle("is-hidden"),C>1?(e=C,s(e)):(e=q,U(q)),!0===$.visitModal.classList.value.includes("hidden")&&(clearTimeout(k),$.comeBackBtn.removeEventListener("click",T),$.visitCloseBtn.removeEventListener("click",w))}$.comeBackBtn.addEventListener("click",T),$.visitCloseBtn.addEventListener("click",w),1==C&&null===q||(w(),k=setTimeout((()=>{w()}),15e3));const N=document.querySelector(".form-field"),M=document.querySelector(".home-list"),j=document.querySelector(".spinner-loader"),O=document.querySelector(".search-result");let B="";function F(e){return e.map((({id:e,poster_path:t,title:n,original_title:o,genres_ids:a,release_date:i})=>`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster"}" alt="${n}">\n                    <h2 class="card-info__title">${o}</h2>\n                    <p class="card-info_descr">\n                        <span>${a}</span>\n                        |\n                        <span>${new Date(i).getFullYear()}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`)).join("")}async function A(e,t){const n=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${n}&page=${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))}function U(n){if(O.classList.add("is-hidden"),j.classList.remove("is-hidden"),B=null==E?void 0:E.movie,e.save("last visit page",n),""===B)return j.classList.add("is-hidden"),alert("Empty field");A(B,n).then((({movies:n})=>{if(0===n.length)return j.classList.add("is-hidden"),void O.classList.remove("is-hidden");e.save("movies",n),M.innerHTML=F(n),setTimeout((()=>{j.classList.add("is-hidden")}),2e3),t()}))}null==N||N.addEventListener("submit",(n=>{if(n.preventDefault(),O.classList.add("is-hidden"),j.classList.remove("is-hidden"),B=N.elements.query.value.trim(),e.remove(x),""===B)return j.classList.add("is-hidden"),alert("Empty field");A(B).then((({movies:n})=>{if(0===n.length)return j.classList.add("is-hidden"),void O.classList.remove("is-hidden");e.save("last visit search",{movie:B}),e.save("movies",n),M.innerHTML=F(n),setTimeout((()=>{j.classList.add("is-hidden")}),2e3),t()}))}));const H=document.querySelector("[data-modal]"),I=document.querySelector("[data-modal-close]");function D(e){"Escape"===e.code&&R()}function z(t,n){var o;return null===(o=e.load(n))||void 0===o?void 0:o.find((e=>e.id.toString()===t))}function R(){e.remove("current-movie"),document.addEventListener("keydown",D),document.body.style.overflow="",H.classList.add("is-hidden")}function J(t,n,o){let a=e.load(t)||[];o.classList.remove("added"),a=a.filter((e=>e.id.toString()!=n.id)),e.save(t,a)}function G(t,n){var o;return null===(o=e.load(t))||void 0===o?void 0:o.some((e=>e.id.toString()===n))}document.querySelector(".movies-container").addEventListener("click",(t=>{t.target.closest(".js-modal-open")&&(t.preventDefault(),function(t){document.addEventListener("keydown",D),H.querySelector(".modal-movie").dataset.modalMovieId=t,H.querySelector(".modal-movie").innerHTML=function(t){const n=z(t,"movies")||z(t,"watched-list")||z(t,"queue-list");e.save("current-movie",n);const{poster_path:o,title:a,original_title:i,genres_ids:s,release_date:r,vote_average:d,vote_count:l,popularity:c,overview:m}=n;let u=G("watched-list",(t=t.toString()).toString())?"added":"";const v=`<div class="modal-movie__btn movie-btn movie-btn--watched ${u}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;u=G("queue-list",t.toString())?"added":"";const h=`<div class="modal-movie__btn movie-btn movie-btn--queue ${u}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>`;return`<div class="modal-movie__poster">\n            <img src='https://image.tmdb.org/t/p/w500${o}' alt="${a}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${a}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">${d.toFixed(1)}</span>\n                            <span>/</span>\n                            <span class="votes">${l}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${c.toFixed(0)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${i}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${s}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${m}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${v}\n                    ${h}\n                </div>\n                </div>\n            </div>`}(t),document.body.style.overflow="hidden",H.classList.remove("is-hidden");!function(e,t){const n=2500,o=.1;let a=document.querySelector("#out"),i=0,s=Math.round(n/(e/o)),r=setInterval((()=>{i+=o,i>=e&&clearInterval(r),a.innerHTML=i.toFixed(1)}),s)}(H.querySelector("#out").textContent)}(t.target.closest(".js-modal-open").dataset.cardMovieId))})),I.addEventListener("click",R),H.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void R();"BUTTON"===t.target.nodeName&&function(t){var n;const o=(null===(n=t.dataset)||void 0===n?void 0:n.modalAddTo)+"-list",a=e.load("current-movie");e.load(o)&&G(o,a.id.toString())?J(o,a,t):(o.includes("watch")&&G("queue-list",a.id.toString())&&(console.log("already in queue"),J("queue-list",a,t.parentElement.querySelector(".movie-btn--queue"))),function(t,n,o){let a=e.load(t)||[];a.push(n),o.classList.add("added"),e.save(t,a)}(o,a,t))}(t.target.closest(".movie-btn"))}));const Q=document.querySelector(".footer__rights-link"),V=document.querySelector(".modal__closeBtn"),P=document.querySelector(".backdropp");function W(e){console.log(e),"Escape"===e.code&&(P.classList.add("is-hidden"),document.removeEventListener("keydown",W))}if(console.log(P),Q.addEventListener("click",(e=>{e.preventDefault(),P.classList.toggle("is-hidden"),document.addEventListener("keydown",W)})),V.addEventListener("click",(e=>{P.classList.remove("is-hidden")})),P.addEventListener("click",(function(e){document.removeEventListener("keydown",W),P.classList.add("is-hidden")})),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload");document.querySelectorAll('image[loading="lazy"]').forEach((e=>{e.src=e.dataset.src}))}else{console.log("Браузер не підтримує lazyload");const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossOrigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}const K=document.querySelectorAll("image[data-src]");function X(e){console.log("Зображення завантажилось")}console.log(K),K.forEach((e=>{e.addEventListener("load",X,{once:!0})}));
//# sourceMappingURL=index.41c5799c.js.map
