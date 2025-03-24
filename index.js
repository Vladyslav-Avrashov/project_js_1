import{a as h,i as p,S as j,N as y,K as w}from"./assets/vendor-jn0Pskas.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const b="/project_js_1/assets/manage-finances@1x-CV7JT6HV.jpg",S="/project_js_1/assets/manage-finances@2x-Ghca0UNm.jpg",x="/project_js_1/assets/organic-vegetables@1x-D1uxuvO0.jpg",L="/project_js_1/assets/organic-vegetables@2x-X9e20M6O.jpg",g=[{title:"Wallet webservice",url1:b,url2:S,technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:x,url2:L,technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"./img/projectimages/discover@1x.jpg",url2:"./img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"./img/projectimages/transforming@1x.jpg",url2:"./img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"./img/projectimages/mimino@@1x.jpg",url2:"./img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"./img/projectimages/reviving-traditions@1x.jpg",url2:"./img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"./img/projectimages/a-brand@1x.jpg",url2:"./img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"./img/projectimages/bodyshape@1x.jpg",url2:"./img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"./img/projectimages/fresh-harvest@1x.jpg",url2:"./img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"./img/projectimages/turn-on@1x.jpg",url2:"./img/projectimages/turn-pn@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}],v=t=>t.map(o=>{const{title:e,url1:r,url2:s,technologies:i}=o;return console.log(e,r,s,i),`
      <li class="project-card">
        <picture>
        <source srcset="${r}" media="(max-width: 767px)" />
          <source srcset="${s}" media="(min-width: 768px)" />
         <img
            class="my-project-picture"
           src="${s}"
            alt="${e}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${i}</p>
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
    `}).join(""),n={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let u=0,l=3;const J=()=>{const t=g.slice(u,l),o=v(t);n.projectsList.innerHTML=o};J();const f=()=>{u+=3,l+=3;const t=g.slice(u,l),o=v(t);if(n.projectsList.insertAdjacentHTML("beforeend",o),setTimeout(()=>{const e=n.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})},0),l>=g.length){n.loadMoreBtn.classList.add("visually-hidden"),n.loadMoreBtn.removeEventListener("click",f);return}};n.loadMoreBtn.addEventListener("click",f);const E=({author:t,avatar_url:o,review:e})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${e}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${o}"
        alt="${t}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${t}</h3>
    </div>
  </li>`,M=t=>{const o=t.map(e=>E(e)).join("");a.list.insertAdjacentHTML("beforeend",o)};h.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const N=async()=>{try{return(await h.get()).data}catch(t){throw console.log("Something went wrong with receiving feedback"),t}},a={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},_=()=>{new j(".swiper",{modules:[y,w],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},k=async()=>{try{const t=await N();if(!t.length){a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden");return}M(t),_()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden")}};k();const c=document.querySelector(".form_input"),B=document.querySelector(".form_textarea"),m=document.querySelector(".form_input_icon"),R=document.querySelector(".form_btn"),q=document.querySelector(".form");function $(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function G(){c.addEventListener("input",function(){$(c.value)?(m.style.display="block",c.style.color="light-dark(#292929, #f0f0f0)"):(m.style.display="none",c.style.color="#E74A3B")})}G();const T=async t=>{t.preventDefault();const o={email:c.value.trim(),comment:B.value.trim()};try{const e=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),r=await e.json();e.ok?(C(r.title,r.message),q.reset(),m.style.display="none"):p.error({title:"Error",message:r.message,position:"topRight",timeout:5e3})}catch(e){p.error({title:"Error",message:e.message,position:"topRight",timeout:5e3})}},C=(t,o)=>{let e=document.createElement("div");e.classList.add("backdrop"),e.innerHTML=`
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="../img/icons.svg#close-icon"></use>
        </svg>
        <p class="modal_title">${t}</p>
        <p class="modal_text">${o}</p>
    </div>
    `,document.body.appendChild(e);const r=e.querySelector(".modal_icon");e.classList.add("is-open"),document.body.style.overflow="hidden";const s=()=>{e.classList.remove("is-open"),document.body.style.overflow=""};r.addEventListener("click",s),e.addEventListener("click",i=>{i.target===e&&s()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s()})};R.addEventListener("click",T);
//# sourceMappingURL=index.js.map
