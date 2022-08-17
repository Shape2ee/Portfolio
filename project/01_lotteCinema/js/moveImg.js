"use strict";

const imgContianer = document.querySelector(".site-img")
const img = document.querySelector(".site-img_box");
let mouseClick = false;

console.dir(imgContianer);


const moveImg = () => {
  let moveStart = imgContianer.offsetTop - 70;
  if(window.scrollY > moveStart) {
    img.classList.add("move")
  } else {
    img.classList.remove("move")
  }
}

function stopImg() {
  img.style.animationPlayState = "paused";
}
let startY = 0;

function clickImg(e) {
  mouseClick = true;
  stopImg()
  console.log(e.offsetY, e.clientY, e.pageY)
  img.addEventListener("mousemove", dragImg)
  img.addEventListener("mouseup", outImg)
  img.addEventListener("mouseleave", outImg)

  startY = e.pageY;

  // let active = e.offsetY
  
  // img.style.backgroundPositionY = `${imgPosition - active}px`;
}

let position = 0
let activePositioin = 0;
function dragImg(e) {
  // console.log(e);
  if(mouseClick) {
    let mouseY = startY - e.pageY;
    let imgPosition = img.getAttribute("data-position");  
    
    // console.log(mouseY)
    let imgHeight = img.clientHeight / 2;
    // console.log(imgHeight)
    // console.log(mouseY - imgHeight);
    // console.log(mouseY + imgHeight);
    // position = mouseY  imgHeight;
    activePositioin = Number(imgPosition) + mouseY;
    img.style.backgroundPositionY = `${-activePositioin}px`;
    console.log(activePositioin)
    // console.log(position, imgPosition, imgHeight);
  }
}

function outImg() {
  mouseClick = false;
  img.setAttribute("data-position", activePositioin)
  
  if(activePositioin <= 0) {
    img.style.backgroundPositionY = "20px";
    img.setAttribute("data-position", 0)
  }

  // console.log(img.style.height)
  console.dir((img.clientHeight - activePositioin) / img.clientHeight)
}

window.addEventListener("scroll", moveImg)

img.addEventListener("mouseover", stopImg);
img.addEventListener("mousedown", clickImg);
// img.addEventListener("")

const defalutUrl = document.defaultView.getComputedStyle(img).backgroundImage;

let url = defalutUrl.substring(4, defalutUrl.length - 1);
console.dir(url)

