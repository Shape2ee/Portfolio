"use strict";
const siteImgBox = document.querySelector(".site-img");
const imgContianer = document.querySelector(".site-img_wrap");
const img = document.querySelector(".site-img_box");

let mouseClick = false;
let position = 0
let activePositioin = 0;
let startY = 0;

function clickImg(e) {
  e.preventDefault();

  mouseClick = true;

  imgContianer.addEventListener("mousemove", dragImg)
  imgContianer.addEventListener("touchmove", dragImg)
  imgContianer.addEventListener("mouseup", outImg)
  imgContianer.addEventListener("touchend", outImg)
  imgContianer.addEventListener("mouseleave", outImg)

  startY = e.clientY;
}

function dragImg(e) {
  e.preventDefault();

  if(mouseClick) {
    let mouseY = startY - e.clientY;
    let imgPosition = img.getAttribute("data-position");  
    activePositioin = Number(imgPosition) + mouseY;
    img.style.transform = `translateY(-${activePositioin}px)`;
    // console.log(Number(imgPosition), mouseY)
  }
  
}

function outImg(e) {
  e.preventDefault();

  let imgHeight = img.clientHeight;
  let imgBottom = imgHeight - imgContianer.clientHeight;

  mouseClick = false;
  img.setAttribute("data-position", activePositioin)
  
  if(activePositioin <= 0) {
    img.style.transform = `translateY(0)`;
    img.setAttribute("data-position", 0);
    
  } else if(activePositioin > imgBottom) {
    img.style.transform = `translateY(-${imgBottom}px)`
    img.setAttribute("data-position", imgBottom)
  }
}

imgContianer.addEventListener("mousedown", clickImg);
imgContianer.addEventListener("touchstart", clickImg);

// cursor 제어
imgContianer.addEventListener("mouseenter", () => {
  const cursor = document.querySelector("#cursor1");

  cursor.classList.add("on");

  imgContianer.addEventListener("mouseleave", () => {
    cursor.classList.remove("on");
  })
})

function resetPosition() {
  
}

let positionReset = null;
// window.addEventListener("resize", () => {
//   clearTimeout(positionReset);
//   positionReset = setTimeout(resetPosition, 300)
// })