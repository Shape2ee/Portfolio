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

function clickImg(e) {
  mouseClick = true;
  stopImg()
  console.log(e.offsetY, e.clientY, e.pageY)
  img.addEventListener("mousemove", dragImg)
  img.addEventListener("mouseup", outImg)
  img.addEventListener("mouseleave", outImg)
}
let position = 0
let activePositioin = 0;
function dragImg(e) {
  // console.log(e);
  if(mouseClick) {
    let mouseY = e.offsetY;
    let imgHeight = img.clientHeight / 2;

    let imgPosition = img.getAttribute("data-position");    

    position = mouseY - imgHeight;
    activePositioin = Number(imgPosition) + position;
    img.style.backgroundPositionY = `${activePositioin * 0.1}px`;
    // console.log(position, imgPosition, imgHeight);
    
  }

  img.setAttribute("data-position", activePositioin)
}

function outImg() {
  mouseClick = false;
  // img.setAttribute("data-position", position)

}

window.addEventListener("scroll", moveImg)

img.addEventListener("mouseover", stopImg);
img.addEventListener("mousedown", clickImg);
// img.addEventListener("")