"use strict";

const itemBoxList = document.querySelectorAll(".info_item");

const bgImg = document.querySelectorAll(".info_bg")

itemBoxList.forEach((item, idx) => {
  item.addEventListener("mousemove", (e) => {
    console.log(e)
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    let moveX = mouseX / 50;
    let moveY = mouseY / 50;

    bgImg[idx].style.top = moveY + "px";
    bgImg[idx].style.left = moveX + "px";
  })
})