"use strict";
// 햄버거 메뉴
const sideBtn = document.querySelector(".header_menu");
const sideMenu = document.querySelector(".side");
const sideList = document.querySelectorAll(".side_item");

const moveTop = [
  {
    transform: "translateY(30%)",
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
    transform: "translateY(30%)",
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
        duration: 300,
        fill: "forwards",
        delay: 200 * idx,
      });
    } else {
      item.animate(moveback, {
        duration: 300,
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
// go to top
const goToTop = document.getElementById("goToTop");

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

/*----------------------------------------------------------*/
// header 높이값 변경

const header = document.querySelector(".header");
const headerWrap = document.querySelector(".header_wrap");
const infoTitle = document.querySelector(".info_txt")

const HEADER_CHANGE = "change";
const HEADER_BG = "bg";

const changeHeader = () => {
  // console.log(window.pageYOffset)
  if(sideMenu.classList.contains("active")) {
    header.classList.remove(HEADER_BG);
    
    if(window.pageYOffset !== 0) {
      header.classList.add(HEADER_CHANGE);
    } else {
      header.classList.remove(HEADER_CHANGE);
    }
    
  } else {
    if(window.pageYOffset !== 0) {
      header.classList.add(HEADER_BG);
      header.classList.add(HEADER_CHANGE);
    } else {
      header.classList.remove(HEADER_BG);
      header.classList.remove(HEADER_CHANGE);
    }
  }
    return;
}
  
const toggleBg = () => {
  if(sideMenu.classList.contains("active")) {
    header.classList.remove(HEADER_BG);
  } else if( window.pageYOffset > 0) {
    header.classList.add(HEADER_BG);
  } else {
    header.classList.remove(HEADER_BG);
  }
}

sideBtn.addEventListener("click", toggleBg);
window.addEventListener("scroll", changeHeader);

/*----------------------------------------------------------*/
// cursor custom
const cursor = document.querySelector("#cursor");
const aAll = document.querySelectorAll("a");
const buttonAll = document.querySelectorAll("button");

addEventListener("mousemove", (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  cursor.style.top = mouseY + 'px';
  cursor.style.left = mouseX + 'px';
})


function cursorToggleClass(item) {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("on");
  })
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("on");
  })
}

aAll.forEach(item => {
  cursorToggleClass(item)
})

buttonAll.forEach(item => {
  cursorToggleClass(item)
})

cursorToggleClass(sideBtn);
