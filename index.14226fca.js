!function(){var e,t,o,l,n,s,c;new Swiper(".mySwiper",{cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0},mousewheel:!0,keyboard:!0});e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-link1]"),l=document.querySelector("[data-link2]"),n=document.querySelector("[data-link3]"),s=document.querySelector("[data-link4]"),c={body:document.querySelector("body")},e.addEventListener("click",(function(){var o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open"),c.body.classList.toggle("no-scroll")})),o.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("is-open"),c.body.classList.toggle("no-scroll")})),l.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("is-open"),c.body.classList.toggle("no-scroll")})),n.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("is-open"),c.body.classList.toggle("no-scroll")})),s.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("is-open"),c.body.classList.toggle("no-scroll")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.14226fca.js.map
