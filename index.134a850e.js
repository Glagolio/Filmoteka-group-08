var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("7EEHk");var i=a("5uEKZ");i=a("5uEKZ");const s=i.default.load("last visit popular"),r=i.default.load("last visit page"),o=i.default.load("last visit search");function d(){setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3)}var c=a("bTcpz");i=a("5uEKZ"),c=a("bTcpz");const l=document.querySelector(".btn-to-top");function u(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&l.classList.add("btn-to-top--visible"),e<t&&l.classList.remove("btn-to-top--visible")}function m(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",u),l.addEventListener("click",m);i=a("5uEKZ");var h=a("adTa2");const p=document.querySelector(".genres-container"),f=document.querySelector(".homeList"),g=i.default.load("arrow").map((e=>`<span class="genre-span-style genre-span" id='${e.id}'>${e.name}</span>`)).join("");async function v(e){const t=i.default.load("movies");f.innerHTML=(0,h.markUpWithGenres)(t.filter((t=>t.genre_ids.includes(e))))}p.innerHTML=g,p.addEventListener("click",(function(e){if(i.default.load("genre")==e.target.id){e.target.classList.remove("genre-span-active"),i.default.save("genre",null);const t=i.default.load("movies");return void(f.innerHTML=(0,h.markUpWithGenres)(t))}document.querySelectorAll(".genre-span-active").forEach((e=>e.classList.remove("genre-span-active"))),e.target.classList.add("genre-span-active"),i.default.save("genre",e.target.id),v(Number(e.target.id))}));const b=document.querySelector(".home-list"),x=document.querySelector(".spinner-loader");async function L(e){return(await fetch(`${e}`)).json()}function C(e){b.innerHTML="",i.default.save("last visit popular",e),L(`https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa&page=${e}`).then((({results:t})=>{A(e,1e3);const n=t.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s,original_name:r,first_air_date:o})=>{const d=s?`<span>${new Date(s).getFullYear()}</span>`:"";return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster"}" alt="${n}">\n                    <h2 class="card-info__title">${a||r}</h2>\n                    <p class="card-info_descr">\n                        ${i.length?`<span>${(0,c.getGenres)(i,3)}</span>`:""}\n                        \n                        ${i.length&&d?" | ":""}\n                        ${d||""}\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");x.classList.remove("is-hidden"),setTimeout((()=>{x.classList.add("is-hidden")}),2e3),d(),i.default.save("movies",t),console.log(i.default.load("genre"),t),null!==i.default.load("genre")?v(Number(i.default.load("genre"))):b.insertAdjacentHTML("beforeend",n)}))}u(),m(),async function(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()}().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))})),L("https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa").then((({results:e})=>{e.poster_path;const t=e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s,original_name:r,first_air_date:o})=>{const d=s?`<span>${new Date(s).getFullYear()}</span>`:"";return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster"}" alt="${n}">\n                    <h2 class="card-info__title">${a||r}</h2>\n                    <p class="card-info_descr">\n                        ${i.length?`<span>${(0,c.getGenres)(i,3)}</span>`:""}\n                        \n                       ${i.length&&d?" | ":""}\n                        ${d||""}\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");x.classList.remove("is-hidden"),setTimeout((()=>{x.classList.add("is-hidden")}),2e3),d(),i.default.save("movies",e),b.insertAdjacentHTML("beforeend",t)}));const y=document.querySelector('[data-index="1"]'),N=document.querySelector('[data-index="2"]'),_=document.querySelector('[data-index="3"]'),E=document.querySelector('[data-index="4"]'),S=document.querySelector('[data-index="5"]'),q=document.querySelector(".first-button"),$=document.querySelector(".last-button"),w=document.querySelector(".pagination-container"),k=document.querySelector(".arrow-right"),T=document.querySelector(".arrow-left"),F=document.querySelector("#previous"),j=document.querySelector("#after"),M=document.querySelector(".js-search-form"),B=document.querySelector(".js-card-library"),H=[y,N,_,E,S];w.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(O=Number(e.target.textContent)),F.hidden=!0,j.hidden=!0,e.target.classList.contains("pagination-button")&&(U.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&O<1e3&&(U.forEach((e=>e.classList.remove("pagination--current"))),y.classList.add("pagination--current"),y.textContent=Number(y.textContent)+1,N.textContent=Number(N.textContent)+1,_.textContent=Number(_.textContent)+1,E.textContent=Number(E.textContent)+1,S.textContent=Number(S.textContent)+1,O=Number(O)+1),e.target.classList.contains("arrow-left")&&O>=5&&(U.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=Number(y.textContent)-1,N.textContent=Number(N.textContent)-1,_.textContent=Number(_.textContent)-1,E.textContent=Number(E.textContent)-1,S.textContent=Number(S.textContent)-1,S.classList.add("pagination--current"),O=Number(O)-1),e.target.classList.contains("first-button")&&(U.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=1,N.textContent=2,_.textContent=3,E.textContent=4,S.textContent=5,y.classList.add("pagination--current"),O=y.textContent,T.hidden=!0,F.hidden=!0,q.hidden=!0),e.target.classList.contains("last-button")&&(U.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=Number($.textContent)-4,N.textContent=Number($.textContent)-3,_.textContent=Number($.textContent)-2,E.textContent=Number($.textContent)-1,S.textContent=$.textContent,S.classList.add("pagination--current"),O=S.textContent,k.hidden=!0,j.hidden=!0,$.hidden=!0),Number(O)>5?(T.hidden=!1,F.hidden=!1,q.hidden=!1):(T.hidden=!0,F.hidden=!0,q.hidden=!0),Number(O)<996&&(k.hidden=!1,j.hidden=!1,$.hidden=!1),null!=B&&(B.innerHTML=""),window.scrollTo({top:0,behavior:"smooth"}),""!==M.value?Q(O):C(O))}));let O=1,U=document.querySelectorAll(".pagination-button");F.hidden=!0,T.hidden=!0,q.hidden=!0;const z=e=>{Number(e)>5?(U.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=Number(e)-2,N.textContent=Number(e)-1,_.textContent=Number(e),E.textContent=Number(e)+1,S.textContent=Number(e)+2,_.classList.add("pagination--current"),T.hidden=!1,F.hidden=!1,q.hidden=!1):(U.forEach((e=>e.classList.remove("pagination--current"))),2==Number(e)&&(N.textContent=2,N.classList.add("pagination--current")),3==Number(e)&&(N.textContent=3,_.classList.add("pagination--current")),4==Number(e)&&(N.textContent=4,E.classList.add("pagination--current")),5==Number(e)&&(N.textContent=5,S.classList.add("pagination--current")),T.hidden=!0,F.hidden=!0,q.hidden=!0)};function A(e,t){(Number(e)===t||H.find((e=>Number(e.textContent)===t)))&&(k.hidden=!0,j.hidden=!0,$.hidden=!0),H.forEach((e=>{Number(e.textContent)>t&&(e.hidden=!0)})),Number(e)>=5&&Number(e)<t-2&&(H.forEach((e=>e.classList.remove("pagination--current"))),_.textContent=Number(e),_.classList.add("pagination--current"),N.textContent=Number(e)-1,y.textContent=Number(e)-2,E.textContent=Number(e)+1,S.textContent=Number(e)+2,q.hidden=!1,T.hidden=!1,F.hidden=!1),Number(e)>=Number(t)-3&&(k.hidden=!0,j.hidden=!0),H.forEach((e=>{Number(e.textContent)<1&&(e.hidden=!0)})),Number(e)<=4&&(H.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=1,N.textContent=2,_.textContent=3,E.textContent=4,S.textContent=5,T.hidden=!0,q.hidden=!0,F.hidden=!0,k.hidden=!1,$.hidden=!1,j.hidden=!1,4===Number(e)&&(E.classList.add("pagination--current"),k.hidden=!1,$.hidden=!1,j.hidden=!1),3===Number(e)&&_.classList.add("pagination--current"),2===Number(e)&&N.classList.add("pagination--current"),1===Number(e)&&y.classList.add("pagination--current"))}function G(e){e<=5&&($.hidden=!0,k.hidden=!0,T.hidden=!0,F.hidden=!0,j.hidden=!0,e<=4&&(S.hidden=!0,e<=3&&(E.hidden=!0,e<=2&&(_.hidden=!0,e<=1&&(N.hidden=!0)))))}const D=document.querySelector(".form-field"),K=document.querySelector(".home-list"),R=document.querySelector(".spinner-loader"),Z=document.querySelector(".search-result");let I="";const P=[y,N,_,E,S,q,$,k,T,F,j];function Y(e){return e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s})=>{const r=t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",o=s?`<span>${new Date(s).getFullYear()}</span>`:"";return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${r}" alt="${n}">\n                    <h2 class="card-info__title">${a}</h2>\n                    <p class="card-info_descr">\n                        ${i.length?`<span>${(0,c.getGenres)(i,3)}</span>`:""}\n                        ${i.length&&o?" | ":""}\n                        ${o||""}\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("")}async function J(e,t){const n=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${n}&page=${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({lastPage:e.total_pages,movies:e.results})))}function Q(e){if(Z.classList.add("search-result--hidden"),R.classList.remove("is-hidden"),I=i.default.load("last visit search"),i.default.save("last visit page",e),""===I)return R.classList.add("is-hidden"),alert("Empty field");J(I,e).then((({movies:t,lastPage:n})=>{if(P.forEach((e=>e.hidden=!1)),0===t.length)return R.classList.add("is-hidden"),alert("Empty field");i.default.save("movies",t),$.textContent=n,A(e,n),G(n),Number(y.textContent)===Number(e)&&1!==Number(y.textContent)&&(T.hidden=!1,F.hidden=!1,q.hidden=!1),K.innerHTML=Y(t),setTimeout((()=>{R.classList.add("is-hidden")}),2e3),d()}))}null==D||D.addEventListener("submit",(e=>{p.classList.add("hide"),P.forEach((e=>e.hidden=!1));if(e.preventDefault(),Z.classList.add("search-result--hidden"),R.classList.remove("is-hidden"),I=D.elements.query.value.trim(),i.default.remove("last visit popular"),""===I)return R.classList.add("is-hidden"),Z.classList.remove("search-result--hidden"),void setTimeout((()=>Z.classList.add("search-result--hidden")),4e3);J(I,1).then((({movies:e,lastPage:t})=>{if(0===e.length)return R.classList.add("is-hidden"),Z.classList.remove("search-result--hidden"),void setTimeout((()=>Z.classList.add("search-result--hidden")),4e3);i.default.save("last visit search",I),i.default.save("movies",e),$.textContent=t,G(t),K.innerHTML=Y(e),setTimeout((()=>{R.classList.add("is-hidden")}),2e3),d(),U.forEach((e=>e.classList.remove("pagination--current"))),y.textContent=1,N.textContent=2,_.textContent=3,E.textContent=4,S.textContent=5,y.classList.add("pagination--current"),O=y.textContent,T.hidden=!0,F.hidden=!0,q.hidden=!0}))})),a("bTcpz"),a("5R1Ed"),a("5uEKZ");const W={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};let X;W.comeBackBtn.addEventListener("click",ee),W.visitCloseBtn.addEventListener("click",V);function V(){W.visitModal.classList.toggle("is-hidden"),!0===W.visitModal.classList.value.includes("hidden")&&(clearTimeout(X),W.comeBackBtn.removeEventListener("click",ee),W.visitCloseBtn.removeEventListener("click",V))}function ee(){let e=1;W.visitModal.classList.toggle("is-hidden"),s>1?(e=s,C(e),z(e)):(e=r,Q(e),z(e),document.querySelector(".js-search-form").value=o),!0===W.visitModal.classList.value.includes("hidden")&&(clearTimeout(X),W.comeBackBtn.removeEventListener("click",ee),W.visitCloseBtn.removeEventListener("click",V))}if(null!==sessionStorage.getItem("mark")||(V(),sessionStorage.setItem("mark",JSON.stringify("mark")),X=setTimeout((()=>{V()}),15e3)),"loading"in HTMLImageElement.prototype){document.querySelectorAll('image[loading="lazy"]').forEach((e=>{e.src=e.dataset.src}))}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossOrigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}document.querySelectorAll("image[data-src]").forEach((e=>{e.addEventListener("load",onImageLoaded,{once:!0})})),a("4S0r6");
//# sourceMappingURL=index.134a850e.js.map
