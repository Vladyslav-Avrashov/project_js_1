import{a as d,i as j,S as h,N as v,K as w}from"./assets/vendor-jn0Pskas.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const g=[{title:"Wallet webservice",url1:"../img/projectimages/manage-finances@1x.jpg",url2:"../img/projectimages/manage-finances@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:"./img/projectimages/organic-vegetables@1x.jpg",url2:"./img/projectimages/organic-vegetables@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"../img/projectimages/discover@1x.jpg",url2:"../img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"../img/projectimages/transforming@1x.jpg",url2:"../img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"../../img/projectimages/mimino@@1x.jpg",url2:"../../img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"../../img/projectimages/reviving-traditions@1x.jpg",url2:"../../img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"../img/projectimages/a-brand@1x.jpg",url2:"../img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"../img/projectimages/bodyshape@1x.jpg",url2:"../img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"../img/projectimages/fresh-harvest@1x.jpg",url2:"../img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"../img/projectimages/turn-on@1x.jpg",url2:"../img/projectimages/turn-pn@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}],u=e=>e.map(r=>{const{title:s,url1:c,url2:t,technologies:i}=r;return`
      <li class="project-card">
        <picture>
          <source
            srcset="${c} 1x, ${t} 2x"
          />
          <img
            class="my-project-picture"
            src="${t} 2x"
            alt="${s}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${i}</p>
        <h3 class="project-description">${s}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href="/img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),o={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let p=0,n=3;const f=()=>{const e=g.slice(p,n),r=u(e);o.projectsList.innerHTML=r};f();const m=()=>{p+=3,n+=3;const e=g.slice(p,n),r=u(e);if(o.projectsList.insertAdjacentHTML("beforeend",r),setTimeout(()=>{const s=o.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:s*10,behavior:"smooth"})},0),n>=g.length){o.loadMoreBtn.classList.add("visually-hidden"),o.loadMoreBtn.removeEventListener("click",m);return}};o.loadMoreBtn.addEventListener("click",m);const b=({author:e,avatar_url:r,review:s})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${s}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${r}"
        alt="${e}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${e}</h3>
    </div>
  </li>`,y=e=>{const r=e.map(s=>b(s)).join("");a.list.insertAdjacentHTML("beforeend",r)};d.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const S=async()=>{try{return(await d.get()).data}catch(e){throw console.log("Something went wrong with receiving feedback"),e}},a={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},x=()=>{new h(".swiper",{modules:[v,w],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},L=async()=>{try{const e=await S();if(!e.length){a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden");return}y(e),x()}catch{j.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden")}};L();
//# sourceMappingURL=index.js.map
