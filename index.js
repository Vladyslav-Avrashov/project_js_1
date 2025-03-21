(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=[{title:"Wallet webservice",url1:"./img/projectimages/manage-finances@1x.jpg",url2:"./img/projectimages/manage-finances@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:"./img/projectimages/organic-vegetables@1x.jpg",url2:"./img/projectimages/organic-vegetables@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"./img/projectimages/discover@1x.jpg",url2:"./img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"./img/projectimages/transforming@1x.jpg",url2:"./img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"./img/projectimages/mimino@@1x.jpg",url2:"./img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"./img/projectimages/reviving-traditions@1x.jpg",url2:"./img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"./img/projectimages/a-brand@1x.jpg",url2:"./img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"./img/projectimages/bodyshape@1x.jpg",url2:"./img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"./img/projectimages/fresh-harvest@1x.jpg",url2:"./img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"./img/projectimages/turn-on@1x.jpg",url2:"./img/projectimages/turn-pn@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}],p=r=>r.map(i=>{const{title:o,url1:c,url2:e,technologies:t}=i;return`
      <li class="project-card">
        <picture>
          <source
            srcset="${c} 1x, ${e} 2x"
          />
          <img
            class="my-project-picture"
            src="${e} 2x"
            alt="${o}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${t}</p>
        <h3 class="project-description">${o}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href="../img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),s={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let g=0,a=3;const d=()=>{const r=l.slice(g,a),i=p(r);s.projectsList.innerHTML=i};d();const m=()=>{g+=3,a+=3;const r=l.slice(g,a),i=p(r);if(s.projectsList.insertAdjacentHTML("beforeend",i),setTimeout(()=>{const o=s.projectsList.getBoundingClientRect().height;window.scrollBy({top:o*10,behavior:"smooth"})},0),a>=l.length){s.loadMoreBtn.classList.add("visually-hidden"),s.loadMoreBtn.removeEventListener("click",m);return}};s.loadMoreBtn.addEventListener("click",m);
//# sourceMappingURL=index.js.map
