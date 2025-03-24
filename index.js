import{a as h,i as p,S as j,N as y,K as w}from"./assets/vendor-jn0Pskas.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const g=[{title:"Wallet webservice",url1:"../img/projectimages/manage-finances@1x.jpg",url2:"../img/projectimages/manage-finances@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:"./img/projectimages/organic-vegetables@1x.jpg",url2:"./img/projectimages/organic-vegetables@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"../img/projectimages/discover@1x.jpg",url2:"../img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"../img/projectimages/transforming@1x.jpg",url2:"../img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"../../img/projectimages/mimino@@1x.jpg",url2:"../../img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"../../img/projectimages/reviving-traditions@1x.jpg",url2:"../../img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"../img/projectimages/a-brand@1x.jpg",url2:"../img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"../img/projectimages/bodyshape@1x.jpg",url2:"../img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"../img/projectimages/fresh-harvest@1x.jpg",url2:"../img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"../img/projectimages/turn-on@1x.jpg",url2:"../img/projectimages/turn-pn@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}],v=e=>e.map(o=>{const{title:t,url1:s,url2:i,technologies:r}=o;return`
      <li class="project-card">
        <picture>
          <source
            srcset="${s} 1x, ${i} 2x"
          />
          <img
            class="my-project-picture"
            src="${i} 2x"
            alt="${t}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${r}</p>
        <h3 class="project-description">${t}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href="/img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),n={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let m=0,l=3;const b=()=>{const e=g.slice(m,l),o=v(e);n.projectsList.innerHTML=o};b();const f=()=>{m+=3,l+=3;const e=g.slice(m,l),o=v(e);if(n.projectsList.insertAdjacentHTML("beforeend",o),setTimeout(()=>{const t=n.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:t*10,behavior:"smooth"})},0),l>=g.length){n.loadMoreBtn.classList.add("visually-hidden"),n.loadMoreBtn.removeEventListener("click",f);return}};n.loadMoreBtn.addEventListener("click",f);const S=({author:e,avatar_url:o,review:t})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${t}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${o}"
        alt="${e}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${e}</h3>
    </div>
  </li>`,x=e=>{const o=e.map(t=>S(t)).join("");a.list.insertAdjacentHTML("beforeend",o)};h.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const L=async()=>{try{return(await h.get()).data}catch(e){throw console.log("Something went wrong with receiving feedback"),e}},a={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},J=()=>{new j(".swiper",{modules:[y,w],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},E=async()=>{try{const e=await L();if(!e.length){a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden");return}x(e),J()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden")}};E();const c=document.querySelector(".form_input"),M=document.querySelector(".form_textarea"),u=document.querySelector(".form_input_icon"),k=document.querySelector(".form_btn"),N=document.querySelector(".form");function B(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function R(){c.addEventListener("input",function(){B(c.value)?(u.style.display="block",c.style.color="light-dark(#292929, #f0f0f0)"):(u.style.display="none",c.style.color="#E74A3B")})}R();const q=async e=>{e.preventDefault();const o={email:c.value.trim(),comment:M.value.trim()};try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),s=await t.json();t.ok?($(s.title,s.message),N.reset(),u.style.display="none"):p.error({title:"Error",message:s.message,position:"topRight",timeout:5e3})}catch(t){p.error({title:"Error",message:t.message,position:"topRight",timeout:5e3})}},$=(e,o)=>{let t=document.createElement("div");t.classList.add("backdrop"),t.innerHTML=`
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="../img/icons.svg#close-icon"></use>
        </svg>
        <p class="modal_title">${e}</p>
        <p class="modal_text">${o}</p>
    </div>
    `,document.body.appendChild(t);const s=t.querySelector(".modal_icon");t.classList.add("is-open"),document.body.style.overflow="hidden";const i=()=>{t.classList.remove("is-open"),document.body.style.overflow=""};s.addEventListener("click",i),t.addEventListener("click",r=>{r.target===t&&i()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&i()})};k.addEventListener("click",q);
//# sourceMappingURL=index.js.map
