"use strict";

const h2 = document.querySelector(".about__title h2");
const infoTxt = document.querySelector(".about__txt");
const infoImg = document.querySelector(".about__img");
const skill = document.querySelector(".skill");
const skillItemList = document.querySelectorAll(".skill__item");

const h2offsetTop = h2.offsetTop;
let myScroll = 0;


function scorllCheck(offsetTop, item) {
  if (window.scrollY > offsetTop) {
    item.classList.add("show");
  } else {
    item.classList.remove("show");
  }
}

const toggleClass = () => {
  myScroll = window.scrollY;
  if (myScroll !== 0) {
    infoTxt.classList.add("show");
  } else {
    infoTxt.classList.remove("show");
  }
};

const toggleClass1 = () => {
  myScroll = window.scrollY;

  scorllCheck(h2offsetTop, infoImg);
  scorllCheck(infoImg.offsetTop, skill);
  
 skillItemList.forEach((item ,idx) => {
    let itemHeight = item.offsetHeight;
    let total = 0;

    if(window.matchMedia("(min-width:768px)").matches) {
      total = skill.offsetTop + (itemHeight * 0.4) * idx;  
    } else {
      total = skill.offsetTop + itemHeight * idx;
    }

    scorllCheck(total, item)
    });
};

window.addEventListener("scroll", toggleClass);
window.addEventListener("scroll", toggleClass1);
window.addEventListener("load", toggleClass1);
