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
let touchstartX = 0;
let mouseStart = false;
let currentTarget = "";
let currentActiveLi;
let nowAcriveLi;
let currentClassList;


const processTouchEnd = (e) => {
  if(mouseStart === true) {
    currentTarget.removeEventListener('mousemove', processTouchMove);
    currentTarget.removeEventListener('mouseup', processTouchEnd);

    currentTarget.removeEventListener('touchmove', processTouchMove);
    currentTarget.removeEventListener('touchend', processTouchEnd);  

  }
}

const processTouchMove = (e) => {
  e.preventDefault();

  let currentX = e.clientX || e.touches[0].screenX;
  nowAcriveLi = (Number(currentX) - Number(touchstartX));
  console.log(nowAcriveLi, currentActiveLi, currentX, touchstartX)

  slideWrap.style.transition = 'transform 0s linear';
  slideWrap.style.transform = "translateX(" + nowAcriveLi + "px)"
}

const processTouchStart = (e) => {
  mouseStart = true;

  e.preventDefault()

  touchstartX = e.clientX || e.touches[0].screenX;
  currentTarget = e.target

  currentTarget.addEventListener('mousemove', processTouchMove);
  currentTarget.addEventListener('mouseup', processTouchEnd);

  currentTarget.addEventListener('touchmove', processTouchMove);
  currentTarget.addEventListener('touchend', processTouchEnd);  

  currentActiveLi = dataPosition;
}

liList.forEach( item => {
  item.addEventListener("mousedown", processTouchStart);
  item.addEventListener("touchstart", processTouchStart);
});

window.addEventListener('dragend', processTouchEnd);
window.addEventListener('mouseup', processTouchEnd);
// if(Number(positionValue) !== 0) {
//   prev.addEventListener('click', transPrev);
//   prev.classList.add("work_prev-hover");
// } else {
//   prev.removeEventListener('click', transPrev);
//   prev.classList.remove("work_prev-hover");
// }

// else if (positionValue === -(liIndex - 1) * 100) {
//   next.removeEventListener('click', transNext);
//   next.classList.remove("work_next-hover"); 
// }

// if(slideWrap.clientWidth < liIndex * liList[0].clientWidth + positionValue) {
  
// }


// const slide = () => {
//   let getTransformValue = slideWrap.getAttribute("data-position");
//   console.log(getTransformValue);

//     getTransformValue += 100

//     slideWrap.style.transform = "translateX(-" + getTransformValue + "%)";
//     slideWrap.style.transition = "transform 1s";
//     slideWrap.setAttribute("data-position", getTransformValue);
// }

// prev.addEventListener('click', slide)