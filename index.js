import{a as L,b as j,i as p,S as x,N as k,K as T}from"./assets/vendor-DbKk-Jsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={darkmodeToggle:document.querySelector(".darkmode-toggle-input"),body:document.body},y="selectedTheme";function g(e){e==="dark"?(n.body.classList.remove("theme-light"),n.body.classList.add("theme-dark"),n.darkmodeToggle.checked=!0):(n.body.classList.remove("theme-dark"),n.body.classList.add("theme-light"),n.darkmodeToggle.checked=!1)}function b(e){localStorage.setItem(y,e)}function E(){const e=localStorage.getItem(y);e?g(e):(g("light"),b("light"))}function B(){const e=n.darkmodeToggle.checked?"dark":"light";g(e),b(e)}E();n.darkmodeToggle.addEventListener("change",B);const d={openMenuBtn:document.querySelector(".open-mobile-menu-btn"),closeMenuBtn:document.querySelector(".close-mobile-menu-btn"),mobileMenu:document.querySelector(".modal-box"),navLinks:document.querySelectorAll(".mobile-menu-nav-item-link")};function M(){d.mobileMenu.classList.add("is-open"),document.body.style.overflow="hidden"}function w(){d.mobileMenu.classList.remove("is-open"),document.body.style.overflow=""}d.openMenuBtn.addEventListener("click",M);d.closeMenuBtn.addEventListener("click",w);d.navLinks.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),w();const s=e.getAttribute("href");if(s&&s!=="#"){const i=document.querySelector(s);i&&i.scrollIntoView({behavior:"smooth",block:"start"})}})});const q="/project_js_1/assets/manage-finances@1x-CV7JT6HV.jpg",J="/project_js_1/assets/manage-finances@2x-Ghca0UNm.jpg",C="/project_js_1/assets/organic1x-DgmSNOwn.jpg",N="/project_js_1/assets/organic2x-D86FJxup.jpg",$="/project_js_1/assets/discover@1x-5JF_P4sC.jpg",R="/project_js_1/assets/discover@2x-CSqeNpRE.jpg",P="/project_js_1/assets/transforming@1x-4qEV6A6Q.jpg",O="/project_js_1/assets/transforming@2x-B9hlK9hC.jpg",A="/project_js_1/assets/mimino1x-BXBdo03j.jpg",G="/project_js_1/assets/mimino2x-Bu8TO7FJ.jpg",I="/project_js_1/assets/reviving-traditions@1x-ChT6sPVh.jpg",F="/project_js_1/assets/reviving-traditions@2x-CnSUCKPJ.jpg",V="/project_js_1/assets/a-brand@1x-D0kRnoxY.jpg",K="/project_js_1/assets/a-brand@2x-Bz2KWXql.jpg",D="/project_js_1/assets/bodyshape@1x-BrtTnaqT.jpg",H="/project_js_1/assets/bodyshape@2x-E8OrVE7Q.jpg",z="/project_js_1/assets/fresh-harvest@1x-BYBmkmt_.jpg",Y="/project_js_1/assets/fresh-harvest@2x-PvTTqAFi.jpg",U="/project_js_1/assets/turn-on@1x-BXZLeYqn.jpg",X="/project_js_1/assets/turn-pn@2x-otGTicgo.jpg",h=[{title:"Wallet webservice",url1:q,url2:J,technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:C,url2:N,technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:$,url2:R,technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:P,url2:O,technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:A,url2:G,technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:I,url2:F,technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:V,url2:K,technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:D,url2:H,technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:z,url2:Y,technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:U,url2:X,technologies:"React, JavaScript, Node JS, Git"}],Z="/project_js_1/assets/icons-BcwaTOFK.svg#visit-arrow",_=e=>e.map(o=>{const{title:s,url1:i,url2:t,technologies:r}=o;return`
      <li class="project-card">
        <picture>
        <source srcset="${i}" media="(max-width: 767px)" />
          <source srcset="${t}" media="(min-width: 768px)" />
         <img
            class="my-project-picture"
           src="${t}"
            alt="${s}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${r}</p>
        <h3 class="project-description">${s}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href=${Z}></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),c={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let f=0,u=3;const Q=()=>{const e=h.slice(f,u),o=_(e);c.projectsList.innerHTML=o};Q();const S=()=>{f+=3,u+=3;const e=h.slice(f,u),o=_(e);if(c.projectsList.insertAdjacentHTML("beforeend",o),setTimeout(()=>{const s=c.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:s,behavior:"smooth"})},0),u>=h.length){c.loadMoreBtn.classList.add("visually-hidden"),c.loadMoreBtn.removeEventListener("click",S);return}};c.loadMoreBtn.addEventListener("click",S);new L(".faq-accordion",{openOnInit:[0],showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-text",activeClass:"is-open"});const W=({author:e,avatar_url:o,review:s})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${s}</p>
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
  </li>`,ee=e=>{const o=e.map(s=>W(s)).join("");a.list.insertAdjacentHTML("beforeend",o)};j.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const te=async()=>{try{return(await j.get()).data}catch(e){throw console.log("Something went wrong with receiving feedback"),e}},a={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},se=()=>{new x(".swiper",{modules:[k,T],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},oe=async()=>{try{const e=await te();if(!e.length){a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden");return}ee(e),se()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),a.buttons.classList.add("is-hidden"),a.errorMsg.classList.remove("is-hidden")}};oe();const re="/project_js_1/assets/icons-BcwaTOFK.svg#close-icon",l=document.querySelector(".form_input"),ie=document.querySelector(".form_textarea"),v=document.querySelector(".form_input_icon"),ne=document.querySelector(".form_btn"),ce=document.querySelector(".form");function ae(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function le(){l.addEventListener("input",function(){ae(l.value)?(v.style.display="block",l.style.color="light-dark(#292929, #f0f0f0)"):(v.style.display="none",l.style.color="#E74A3B")})}le();const de=async e=>{e.preventDefault();const o=l.value.trim(),s=ie.value.trim();if(!o||!s){p.error({title:"Error",message:"Please fill in all fields before submitting.",position:"topRight",timeout:5e3});return}const i={email:o,comment:s};try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),r=await t.json();t.ok?(pe(r.title,r.message),ce.reset(),v.style.display="none"):p.error({title:"Error",message:r.message,position:"topRight",timeout:5e3})}catch(t){p.error({title:"Error",message:t.message,position:"topRight",timeout:5e3})}},pe=(e,o)=>{let s=document.createElement("div");s.classList.add("backdrop"),s.innerHTML=`
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="${re}"></use>
        </svg>
        <p class="modal_title">${e}</p>
        <p class="modal_text">${o}</p>
    </div>
    `,document.body.appendChild(s);const i=s.querySelector(".modal_icon");s.classList.add("is-open"),document.body.style.overflow="hidden";const t=()=>{s.classList.remove("is-open"),document.body.style.overflow=""};i.addEventListener("click",t),s.addEventListener("click",r=>{r.target===s&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&t()})};ne.addEventListener("click",de);
//# sourceMappingURL=index.js.map
