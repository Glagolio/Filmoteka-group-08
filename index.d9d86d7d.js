var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("7EEHk"),n("1TPJ0"),n("5RajV");var a=n("5uEKZ");const i=document.querySelector(".home-list");(async function(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()})().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))}));const s=a.default.load("arrow");(async function(e){return(await fetch(`${e}`)).json()})("https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa").then((({results:e})=>{e.poster_path;const t=e.map((({id:e,poster_path:t,title:o,original_title:n,genre_ids:a,release_date:i,original_name:l,first_air_date:c})=>{const r=[];let d="";for(const e of a)for(const t of s)e===t.id&&(r.push(t.name),a.length>2&&(d=",Other"));let u=i,f=c;i&&(u=u.slice(0,4)),c&&(f=f.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${o}">\n                    <h2 class="card-info__title">${n||l}</h2>\n                    <p class="card-info_descr">\n                        <span>${r.splice(0,3)}  ${d}</span>\n                        \n                        |\n                        <span>${u||f}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3),a.default.save("movies",e),i.insertAdjacentHTML("beforeend",t)})),n("ijW3m"),n("bTcpz"),n("2nhTy"),n("5R1Ed"),n("5uEKZ");var l=n("ijW3m"),c=n("2nhTy"),r=n("1TPJ0");const d={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};let u;function f(){d.visitModal.classList.toggle("is-hidden"),!0===d.visitModal.classList.value.includes("hidden")&&(clearTimeout(u),d.comeBackBtn.removeEventListener("click",m),d.visitCloseBtn.removeEventListener("click",f))}function m(){d.visitModal.classList.toggle("is-hidden"),(0,r.loadStoragePage)(),!0===d.visitModal.classList.value.includes("hidden")&&(clearTimeout(u),d.comeBackBtn.removeEventListener("click",m),d.visitCloseBtn.removeEventListener("click",f))}if(d.comeBackBtn.addEventListener("click",m),d.visitCloseBtn.addEventListener("click",f),1==c.currentPage||void 0===(null===l.storagePage||void 0===l.storagePage?void 0:l.storagePage.value)||(f(),u=setTimeout((()=>{f()}),15e3)),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload");document.querySelectorAll('image[loading="lazy"]').forEach((e=>{e.src=e.dataset.src}))}else{console.log("Браузер не підтримує lazyload");const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossOrigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}const g=document.querySelectorAll("image[data-src]");function p(e){console.log("Зображення завантажилось")}console.log(g),g.forEach((e=>{e.addEventListener("load",p,{once:!0})}));
//# sourceMappingURL=index.d9d86d7d.js.map
