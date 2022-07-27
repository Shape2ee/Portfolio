const prev = document.querySelector(".work_prev");
const next = document.querySelector(".work_next");
const slideWrap = document.querySelector('.work_slide');
const liList = slideWrap.querySelectorAll("li");
let liIndex = liList.length;
let positionValue = slideWrap.getAttribute("data-position");

// console.log(liList[0].clientWidth)

const transNext = (e) => {
  e.preventDefault();
  
  positionValue = Number(positionValue) - 100;

  // if(positionValue === -(liIndex - 1) * 100) {
  //   next.removeEventListener('click', transNext);
  //   next.classList.remove("work_next-hover");
  // }
  
  console.log(positionValue)
  console.log(-(liIndex - 1) * 100)
  slideWrap.style.transform = "translateX(" + positionValue + "%)"
  slideWrap.style.transition = "transform 1s"
  slideWrap.setAttribute("data-position", positionValue)

  if(Number(positionValue) < 0) {
    prev.addEventListener('click', transPrev);
    prev.classList.add("work_prev-hover");
  }
}

const transPrev = (e) => {
  positionValue = Number(positionValue) + 100;

  slideWrap.style.transform = "translateX(" + positionValue + "%)"
  slideWrap.style.transition = "transform 1s"
  slideWrap.setAttribute("data-position", positionValue)

  if(Number(positionValue) === 0) {
    prev.removeEventListener('click', transPrev);
    prev.classList.remove("work_prev-hover");
  }
}

// if(Number(positionValue) !== 0) {
//   prev.addEventListener('click', transPrev);
//   prev.classList.add("work_prev-hover");
// } else {
//   prev.removeEventListener('click', transPrev);
//   prev.classList.remove("work_prev-hover");
// }

if(slideWrap.clientWidth < liIndex * liList[0].clientWidth) {
  next.addEventListener('click', transNext);
  next.classList.add("work_next-hover");
} 

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