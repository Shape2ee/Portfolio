"use strict";

const sideBtn = document.querySelector(".header_menu");
const sideMenu = document.querySelector(".side");
const sideList = document.querySelectorAll(".side_item");

const moveTop = [
  {
    transform: "translateY(20%)",
    opacity: 0,
  },
  {
    transform: "translateY(0)",
    opacity: 1,
  },
];

const moveback = [
  {
    transform: "translateY(0)",
    opacity: 1,
  },
  {
    transform: "translateY(20%)",
    opacity: 0,
  },
];

// const option = (idc) => {
//   let animaOption = {
//     duration: 1000,
//     fill: "forwards",
//     delay: 300 * idc
//   }
//   return animaOption
// }

const sideAnimation = () => {
  sideList.forEach((item, idx) => {
    if (sideMenu.classList.contains("active")) {
      item.animate(moveTop, {
        duration: 1000,
        fill: "forwards",
        delay: 300 * idx,
      });
    } else {
      item.animate(moveback, {
        duration: 500,
        fill: "forwards",
      });
    }
  });
};

const sideToggle = () => {
  sideBtn.classList.toggle("active");

  // sideMenu.classList.toggle('active');
  if (sideMenu.classList.contains("active")) {
    sideMenu.classList.remove("active");
    sideMenu.style.transitionDelay = "0.5s";
    sideAnimation();
  } else {
    sideMenu.classList.add("active");
    sideMenu.style.transitionDelay = "0s";
    setTimeout(sideAnimation, 1000);
  }
};

sideBtn.addEventListener("click", sideToggle);

/*----------------------------------------------------------*/
const goToTop = document.getElementById("goToTop");

// const moveTop = () => {
//   if(window.pageYOffset > 0) {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }
// };

const moveScroll = () => {
  if(window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

const scrollCheck = () => {
  let pageYOffset = window.pageYOffset;

  if(pageYOffset !== 0) {
    goToTop.classList.add('show');
  } else {
    goToTop.classList.remove('show');
  }
}

window.addEventListener('scroll', scrollCheck);
goToTop.addEventListener('click', moveScroll);

