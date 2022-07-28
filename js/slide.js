const prev = document.querySelector(".work_prev");
const next = document.querySelector(".work_next");
const slideWrap = document.querySelector('.work_slide');
const liList = slideWrap.querySelectorAll("li");
let liIndex = liList.length;
let dataPosition = slideWrap.getAttribute("data-position");

// console.log(liList[0].clientWidth)

const transNext = (e) => {
  e.preventDefault();
  
  dataPosition = Number(dataPosition) - 100;

  // if(positionValue === -(liIndex - 1) * 100) {
  //   next.removeEventListener('click', transNext);
  //   next.classList.remove("work_next-hover");
  // }
  
  console.log(dataPosition)
  console.log(-(liIndex - 1) * 100)
  slideWrap.style.transform = "translateX(" + dataPosition + "%)"
  slideWrap.style.transition = "transform 1s"
  slideWrap.setAttribute("data-position", dataPosition)

  if(Number(dataPosition) < 0) {
    prev.addEventListener('click', transPrev);
    prev.classList.add("work_prev-hover");
  }

  if(Number(dataPosition) === -(liIndex - 1) * 100) {
    next.removeEventListener('click', transNext);
    next.classList.remove("work_next-hover");
  }
}

const transPrev = (e) => {
  dataPosition = Number(dataPosition) + 100;

  slideWrap.style.transform = "translateX(" + dataPosition + "%)"
  slideWrap.style.transition = "transform 1s"
  slideWrap.setAttribute("data-position", dataPosition)

  next.addEventListener('click', transNext);
  next.classList.add("work_next-hover");

  if(Number(dataPosition) === 0) {
    prev.removeEventListener('click', transPrev);
    prev.classList.remove("work_prev-hover");
  }
}


if(slideWrap.clientWidth < liIndex * liList[0].clientWidth) {
  next.addEventListener('click', transNext);
  next.classList.add("work_next-hover");
} 
/*----------------------------------------------*/
let touchStartX = 0;
let mouseStart = false;
let currentTarget = "";
let transPos = 0;
let currentClassList;
let swipeStartTime = 0;
let swipeEndTime = 0;
let currentIndex = 1;


const touchEnd = () => {
  mouseStart = false;
  dataPosition = slideWrap.getAttribute("data-position");
  console.log(slideWrap.clientWidth / 2)
  console.log(dataPosition)
  
  if(mouseStart === false) {
    slideWrap.removeEventListener('mousemove', touchMove);
    slideWrap.removeEventListener('mouseup', touchEnd);

    slideWrap.removeEventListener('touchmove', touchMove);
    slideWrap.removeEventListener('touchend', touchEnd);  
   
    console.log(mouseStart)
  }
}

let transValue = 0;

const touchMove = (e) => {
  e.preventDefault();
  console.log(dataPosition)

  if(mouseStart) {
    let currentX = e.clientX || e.touches[0].screenX;
    console.log(currentX, touchStartX)
    console.log(transPos);
    transPos = Number(dataPosition) + Number(currentX) - Number(touchStartX);
    
    // transValue += transPos;
    console.log(transPos);
  }

  slideWrap.setAttribute("data-position", transPos)    
  
  slideWrap.style.transform = "translateX(" + transPos + "px)"
  // slideWrap.style.transition = "transform 0s linear"

}

const touchStart = (e) => {
  e.preventDefault();

  mouseStart = true;
  touchStartX = e.clientX || e.touches[0].screenX;
  dataPosition = slideWrap.getAttribute("data-position");
  console.log(touchStartX);
  
  slideWrap.addEventListener('mousemove', touchMove);
  slideWrap.addEventListener('mouseup', touchEnd);
  
  slideWrap.addEventListener('touchmove', touchMove);
  slideWrap.addEventListener('touchend', touchEnd);  
}

liList.forEach( slide => {
  slide.addEventListener("mousedown", touchStart);  
})

window.addEventListener('dragend', touchEnd);
window.addEventListener('mouseup', touchEnd);




function tranSlide () {
    slideWrap.style.transform = "translateX(" + currentIndex * 100 + "%)"
    slideWrap.style.transition = "transform 1s"
    slideWrap.setAttribute("data-position", currentIndex * 100)    
}