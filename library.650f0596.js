!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;function a(e){return e.map((function(e){var n=e.id,t=e.poster_path,r=e.title,a=e.original_title,i=e.genre_ids,l=e.release_date,o=e.original_name,c=e.first_air_date,s=localStorage.getItem("arrow"),d=JSON.parse(s),u=[],f="",m=!0,p=!1,v=void 0;try{for(var g,h=i[Symbol.iterator]();!(m=(g=h.next()).done);m=!0){var y=g.value,_=!0,b=!1,L=void 0;try{for(var S,w=d[Symbol.iterator]();!(_=(S=w.next()).done);_=!0){var q=S.value;y===q.id&&(u.push(q.name),i.length>2&&(f=",Other"))}}catch(e){b=!0,L=e}finally{try{_||null==w.return||w.return()}finally{if(b)throw L}}}}catch(e){p=!0,v=e}finally{try{m||null==h.return||h.return()}finally{if(p)throw v}}var x=l,j=c;l&&(x=x.slice(0,4)),c&&(j=j.slice(0,4));var O="https://image.tmdb.org/t/p/w500".concat(t);return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(n,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(O,'" alt="').concat(r,'">\n                    <h2 class="card-info__title">').concat(a||o,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(u.splice(0,3),"  ").concat(f,"</span>\n                        \n                        |\n                        <span>").concat(x||j,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r("fJh0j"),r("6c9nX"),r("qikvZ"),r("5xtVg"),r("jcFG7"),r("gXLk6");var i=r("2BIkj"),l=document.querySelector(".library-container"),o=document.querySelector(".library-list"),c="header__btn-active",s=document.querySelector(".js-watched-btn"),d=document.querySelector(".js-queue-btn"),u=localStorage.getItem("queue-list"),f=localStorage.getItem("watched-list"),m=JSON.parse(u),p=JSON.parse(f);function v(){null==o.firstChild?l.classList.add("lib-bg-img"):l.classList.remove("lib-bg-img")}null==d||d.addEventListener("click",(function(){o.innerHTML=a(m),v(),(0,i.removeSceletonLoad)(),d.classList.add(c),s.classList.remove(c)})),null==s||s.addEventListener("click",(function(){o.innerHTML=a(p),v(),(0,i.removeSceletonLoad)(),d.classList.remove(c),s.classList.add(c)}))}();
//# sourceMappingURL=library.650f0596.js.map
