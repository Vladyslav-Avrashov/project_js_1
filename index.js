import{a as j,i as p,S as f,N as y,K as w}from"./assets/vendor-jn0Pskas.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _="/project_js_1/assets/manage-finances@1x-CV7JT6HV.jpg",b="/project_js_1/assets/manage-finances@2x-Ghca0UNm.jpg",S="/project_js_1/assets/organic1x-DgmSNOwn.jpg",x="/project_js_1/assets/organic2x-D86FJxup.jpg",L="/project_js_1/assets/discover@1x-5JF_P4sC.jpg",J="/project_js_1/assets/discover@2x-CSqeNpRE.jpg",B="/project_js_1/assets/transforming@1x-4qEV6A6Q.jpg",E="/project_js_1/assets/transforming@2x-B9hlK9hC.jpg",q="/project_js_1/assets/mimino1x-BXBdo03j.jpg",N="/project_js_1/assets/mimino2x-Bu8TO7FJ.jpg",T="/project_js_1/assets/reviving-traditions@1x-ChT6sPVh.jpg",k="/project_js_1/assets/reviving-traditions@2x-CnSUCKPJ.jpg",M="/project_js_1/assets/a-brand@1x-D0kRnoxY.jpg",C="/project_js_1/assets/a-brand@2x-Bz2KWXql.jpg",R="/project_js_1/assets/bodyshape@1x-BrtTnaqT.jpg",$="/project_js_1/assets/bodyshape@2x-E8OrVE7Q.jpg",P="/project_js_1/assets/fresh-harvest@1x-BYBmkmt_.jpg",G="/project_js_1/assets/fresh-harvest@2x-PvTTqAFi.jpg",O="/project_js_1/assets/turn-on@1x-BXZLeYqn.jpg",A="/project_js_1/assets/turn-pn@2x-otGTicgo.jpg",u=[{title:"Wallet webservice",url1:_,url2:b,technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:S,url2:x,technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:L,url2:J,technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:B,url2:E,technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:q,url2:N,technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:T,url2:k,technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:M,url2:C,technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:R,url2:$,technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:P,url2:G,technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:O,url2:A,technologies:"React, JavaScript, Node JS, Git"}],F="/project_js_1/assets/icons-BcwaTOFK.svg#visit-arrow",h=t=>t.map(o=>{const{title:e,url1:i,url2:s,technologies:r}=o;return console.log(e,i,s,r),`
      <li class="project-card">
        <picture>
        <source srcset="${i}" media="(max-width: 767px)" />
          <source srcset="${s}" media="(min-width: 768px)" />
         <img
            class="my-project-picture"
           src="${s}"
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
              <use href=${F}></use>
            </svg>
          </a>
        </div>
      </li>
    `}).join(""),n={projectsList:document.querySelector(".js-project-cards-list"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let g=0,l=3;const V=()=>{const t=u.slice(g,l),o=h(t);n.projectsList.innerHTML=o};V();const v=()=>{g+=3,l+=3;const t=u.slice(g,l),o=h(t);if(n.projectsList.insertAdjacentHTML("beforeend",o),setTimeout(()=>{const e=n.projectsList.querySelector(".project-card").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})},0),l>=u.length){n.loadMoreBtn.classList.add("visually-hidden"),n.loadMoreBtn.removeEventListener("click",v);return}};n.loadMoreBtn.addEventListener("click",v);const D=({author:t,avatar_url:o,review:e})=>`
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
  </li>`,I=t=>{const o=t.map(e=>D(e)).join("");c.list.insertAdjacentHTML("beforeend",o)};j.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews/";const K=async()=>{try{return(await j.get()).data}catch(t){throw console.log("Something went wrong with receiving feedback"),t}},c={list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},z=()=>{new f(".swiper",{modules:[y,w],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},H=async()=>{try{const t=await K();if(!t.length){c.buttons.classList.add("is-hidden"),c.errorMsg.classList.remove("is-hidden");return}I(t),z()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),c.buttons.classList.add("is-hidden"),c.errorMsg.classList.remove("is-hidden")}};H();const a=document.querySelector(".form_input"),U=document.querySelector(".form_textarea"),m=document.querySelector(".form_input_icon"),X=document.querySelector(".form_btn"),Y=document.querySelector(".form");function Z(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function Q(){a.addEventListener("input",function(){Z(a.value)?(m.style.display="block",a.style.color="light-dark(#292929, #f0f0f0)"):(m.style.display="none",a.style.color="#E74A3B")})}Q();const W=async t=>{t.preventDefault();const o={email:a.value.trim(),comment:U.value.trim()};try{const e=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),i=await e.json();e.ok?(ee(i.title,i.message),Y.reset(),m.style.display="none"):p.error({title:"Error",message:i.message,position:"topRight",timeout:5e3})}catch(e){p.error({title:"Error",message:e.message,position:"topRight",timeout:5e3})}},ee=(t,o)=>{let e=document.createElement("div");e.classList.add("backdrop"),e.innerHTML=`
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="../img/icons.svg#close-icon"></use>
        </svg>
        <p class="modal_title">${t}</p>
        <p class="modal_text">${o}</p>
    </div>
    `,document.body.appendChild(e);const i=e.querySelector(".modal_icon");e.classList.add("is-open"),document.body.style.overflow="hidden";const s=()=>{e.classList.remove("is-open"),document.body.style.overflow=""};i.addEventListener("click",s),e.addEventListener("click",r=>{r.target===e&&s()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&s()})};X.addEventListener("click",W);
//# sourceMappingURL=index.js.map
