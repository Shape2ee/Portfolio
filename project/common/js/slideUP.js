"use strict";

const overViewTitle = document.querySelector(".overview_main-tit");
const overview = document.querySelector(".overview");
const siteImg = document.querySelector(".site-img");
const infoList = document.querySelectorAll(".info_item");

let myScroll = 0;

const toggleClass1 = () => {
  myScroll = window.scrollY;
  let overViewValue = main.offsetTop + overViewTitle.offsetTop;

  scorllCheck(overViewValue, siteImg);

  infoList.forEach((item) => {
    scorllCheck(item.offsetTop + 300, item);
  });
};

function scorllCheck(offsetTop, item) {
  if (myScroll > offsetTop) {
    item.classList.add("show");
  } else {
    item.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleClass1);
window.addEventListener("load",toggleClass1);
