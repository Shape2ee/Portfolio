"use strict";
// swiper js

// main slide
const mainSwiper = new Swiper(".work_slide_container", {
  speed: 1500,
  parallax: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.work_next',
    prevEl: '.work_prev',
  },
})

// index slide
const indexSwiper = new Swiper(".work_index", {
  speed: 600,
  direction: 'vertical',
})

mainSwiper.controller.control = indexSwiper;
indexSwiper.controller.control = mainSwiper;

// paginationBtn hover
const paginationBtn = document.querySelectorAll(".swiper-pagination-bullet");

paginationBtn.forEach( btn => {
  btn.addEventListener("mouseenter", () => {
    const cursor = document.getElementById("cursor1");

    cursor.classList.add("on");

    btn.addEventListener("mouseleave", () => {
      cursor.classList.remove("on");
    })
  })
});