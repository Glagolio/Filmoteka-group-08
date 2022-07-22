!function(){var e={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}},t=document.querySelector("[data-modal]"),n=document.querySelector("[data-modal-close]");function o(e){"Escape"===e.code&&i()}function a(t,n){var o;return null===(o=e.load(n))||void 0===o?void 0:o.find((function(e){return e.id.toString()===t}))}function i(){e.remove("current-movie"),document.addEventListener("keydown",o),document.body.style.overflow="",t.classList.add("is-hidden")}function c(t,n,o){var a=e.load(t)||[];o.classList.remove("added"),a=a.filter((function(e){return e.id.toString()!=n.id})),e.save(t,a)}function r(t,n){var o;return null===(o=e.load(t))||void 0===o?void 0:o.some((function(e){return e.id.toString()===n}))}document.querySelector(".movies-container").addEventListener("click",(function(n){var i;n.target.closest(".js-modal-open")&&(n.preventDefault(),i=n.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",o),t.querySelector(".modal-movie").dataset.modalMovieId=i,t.querySelector(".modal-movie").innerHTML=function(t){var n=a(t,"movies")||a(t,"watched-list")||a(t,"queue-list");e.save("current-movie",n);var o=n.poster_path,i=n.title,c=n.original_title,d=n.genres_ids,s=(n.release_date,n.vote_average),l=n.vote_count,u=n.popularity,v=n.overview,m=r("watched-list",(t=t.toString()).toString())?"added":"",_='<div class="modal-movie__btn movie-btn movie-btn--watched '.concat(m,'" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>');m=r("queue-list",t.toString())?"added":"";var f='<div class="modal-movie__btn movie-btn movie-btn--queue '.concat(m,'" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>');return'<div class="modal-movie__poster">\n            <img src=\'https://image.tmdb.org/t/p/w500'.concat(o,"' alt=\"").concat(i,'" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">').concat(i,'</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">').concat(s.toFixed(1),'</span>\n                            <span>/</span>\n                            <span class="votes">').concat(l,'</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">').concat(u.toFixed(0),'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">').concat(c,'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">').concat(d,'</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">').concat(v,'</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ').concat(_,"\n                    ").concat(f,"\n                </div>\n                </div>\n            </div>")}(i),document.body.style.overflow="hidden",t.classList.remove("is-hidden"),function(e,t){var n=2500,o=.1,a=document.querySelector("#out"),i=0,c=Math.round(n/(e/o)),r=setInterval((function(){(i+=o)>=e&&clearInterval(r),a.innerHTML=i.toFixed(1)}),c)}(t.querySelector("#out").textContent))})),n.addEventListener("click",i),t.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void i();"BUTTON"===t.target.nodeName&&(n=t.target.closest(".movie-btn"),a=(null===(o=n.dataset)||void 0===o?void 0:o.modalAddTo)+"-list",d=e.load("current-movie"),e.load(a)&&r(a,d.id.toString())?c(a,d,n):(a.includes("watch")&&r("queue-list",d.id.toString())&&(console.log("already in queue"),c("queue-list",d,n.parentElement.querySelector(".movie-btn--queue"))),function(t,n,o){var a=e.load(t)||[];a.push(n),o.classList.add("added"),e.save(t,a)}(a,d,n)));var n,o,a,d}));var d=document.querySelector(".footer__rights-link"),s=document.querySelector(".modal__closeBtn"),l=document.querySelector(".backdropp");function u(e){console.log(e),"Escape"===e.code&&(l.classList.add("is-hidden"),document.removeEventListener("keydown",u))}function v(e){return e.map((function(t){var n=t.id,o=t.poster_path,a=t.title,i=t.original_title,c=(t.genre_ids,t.release_date),r=t.original_name,d=t.first_air_date,s=localStorage.getItem("arrow"),l=JSON.parse(s),u=c,v=d;c&&(u=u.slice(0,4)),d&&(v=v.slice(0,4));var _="https://image.tmdb.org/t/p/w500".concat(o);return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(n,'">\n                         <a href="#" class="home-card__link">\n                         <div class="card-info">\n                         <img class="home-card__img" loading=\'lazy\' src="').concat(_,'" alt="').concat(a,'">\n                         <h2 class="card-info__title">').concat(i||r,'</h2>\n                        <p class="card-info_descr">\n                        |\n                        <span>').concat(u||v,"</span>\n                        <span>").concat(m(e,l,0)+", "+m(e,l,1),"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function m(e,t,n){var o=e[n].genre_ids[0];return t.find((function(e){return e.id===o})).name}function _(){setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(e){return e.classList.remove("placeholdify")}))}),2e3)}console.log(l),d.addEventListener("click",(function(e){e.preventDefault(),l.classList.toggle("is-hidden"),document.addEventListener("keydown",u)})),s.addEventListener("click",(function(e){l.classList.remove("is-hidden")})),l.addEventListener("click",(function(e){document.removeEventListener("keydown",u),l.classList.add("is-hidden")}));var f=document.querySelector(".library-container"),g=document.querySelector(".library-list"),b="header__btn-active",p=document.querySelector(".js-watched-btn"),h=document.querySelector(".js-queue-btn"),y=localStorage.getItem("queue-list"),S=localStorage.getItem("watched-list"),L=JSON.parse(y),E=JSON.parse(S);function q(){null==g.firstChild?f.classList.add("lib-bg-img"):f.classList.remove("lib-bg-img")}window.onload=function(){g.innerHTML=v(L),q()},null==h||h.addEventListener("click",(function(){g.innerHTML=v(L),q(),_(),h.classList.add(b),p.classList.remove(b)})),null==p||p.addEventListener("click",(function(){g.innerHTML=v(E),q(),_(),h.classList.remove(b),p.classList.add(b)}))}();
//# sourceMappingURL=library.93b32209.js.map
