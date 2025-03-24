import{a as h,i as p,S as f,N as y,K as w}from"./assets/vendor-jn0Pskas.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const g=[{title:"Wallet webservice",url1:"/project_js_1/img/projectimages/manage-finances@1x.jpg",url2:"/project_js_1/img/projectimages/manage-finances@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:".project_js_1/img/projectimages/organic-vegetables@1x.jpg",url2:"./img/projectimages/organic-vegetables@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:".project_js_1/img/projectimages/discover@1x.jpg",url2:"project_js_1./img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"./img/projectimages/transforming@1x.jpg",url2:"./img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"./img/projectimages/mimino@@1x.jpg",url2:"./img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"./img/projectimages/reviving-traditions@1x.jpg",url2:"./img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"./img/projectimages/a-brand@1x.jpg",url2:"./img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"./img/projectimages/bodyshape@1x.jpg",url2:"./img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"./img/projectimages/fresh-harvest@1x.jpg",url2:"./img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"./img/projectimages/turn-on@1x.jpg",url2:"./img/projectimages/turn-pn@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}],j=t=>t.map(i=>{const{title:e,url1:s,url2:o,technologies:r}=i;return console.log(e,s,o,r),`
      <li class="project-card">
        <picture>
        <source srcset="${s}" media="(max-width: 767px)" />
          <source srcset="${o}" media="(min-width: 768px)" />
         <img
            class="my-project-picture"
           src="${o}"
            alt="${e}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${r}</p>
        <h3 class="project-description">${e}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href="img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),n={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let m=0,l=3;const b=()=>{const t=g.slice(m,l),i=j(t);n.projectsList.innerHTML=i};b();const v=()=>{m+=3,l+=3;const t=g.slice(m,l),i=j(t);if(n.projectsList.insertAdjacentHTML("beforeend",i),setTimeout(()=>{const e=n.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})},0),l>=g.length){n.loadMoreBtn.classList.add("visually-hidden"),n.loadMoreBtn.removeEventListener("click",v);return}};n.loadMoreBtn.addEventListener("click",v);const S=({author:t,avatar_url:i,review:e})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${e}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${i}"
        alt="${t}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${t}</h3>
    </div>
  </li>`,x=t=>{const i=t.map(e=>S(e)).join("");a.list.insertAdjacentHTML("beforeend",i)};h.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const L=async()=>{try{return(await h.get()).data}catch(t){throw console.log("Something went wrong with receiving feedback"),t}},a={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},J=()=>{new f(".swiper",{modules:[y,w],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},E=async()=>{try{const t=await L();if(!t.length){a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden");return}x(t),J()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden")}};E();const c=document.querySelector(".form_input"),_=document.querySelector(".form_textarea"),u=document.querySelector(".form_input_icon"),M=document.querySelector(".form_btn"),k=document.querySelector(".form");function N(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function B(){c.addEventListener("input",function(){N(c.value)?(u.style.display="block",c.style.color="light-dark(#292929, #f0f0f0)"):(u.style.display="none",c.style.color="#E74A3B")})}B();const R=async t=>{t.preventDefault();const i={email:c.value.trim(),comment:_.value.trim()};try{const e=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),s=await e.json();e.ok?(q(s.title,s.message),k.reset(),u.style.display="none"):p.error({title:"Error",message:s.message,position:"topRight",timeout:5e3})}catch(e){p.error({title:"Error",message:e.message,position:"topRight",timeout:5e3})}},q=(t,i)=>{let e=document.createElement("div");e.classList.add("backdrop"),e.innerHTML=`
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="../img/icons.svg#close-icon"></use>
        </svg>
        <p class="modal_title">${t}</p>
        <p class="modal_text">${i}</p>
    </div>
    `,document.body.appendChild(e);const s=e.querySelector(".modal_icon");e.classList.add("is-open"),document.body.style.overflow="hidden";const o=()=>{e.classList.remove("is-open"),document.body.style.overflow=""};s.addEventListener("click",o),e.addEventListener("click",r=>{r.target===e&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&o()})};M.addEventListener("click",R);
//# sourceMappingURL=index.js.map
