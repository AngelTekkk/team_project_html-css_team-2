// -> slider
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
    //     autoplay: {
    //       delay: 3000,
    //       stopOnLastSlide: false,
    //       disableOnInteraction: false
    // },
        mousewheel: true,
        keyboard: true,
      });

 // -end-slider