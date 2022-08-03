
// swiper js
const mainSwiper = new Swiper(".work_slide_container", {
  speed: 1500,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.work_next',
    prevEl: '.work_prev',
  },
})

const indexSwiper = new Swiper(".work_index", {
  speed: 600,
  // loop: true,
  direction: 'vertical',
})

mainSwiper.controller.control = indexSwiper;
indexSwiper.controller.control = mainSwiper;