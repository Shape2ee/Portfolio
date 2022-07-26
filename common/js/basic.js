/*********** go to top ***********/

const goToTop = document.getElementById("goToTop");

const topMove = () => {
  if (window.scrollY > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const scrollCheck = () => {
  let windowScroll = window.scrollY;

  if (windowScroll !== 0) {
    goToTop.classList.add("show");
  } else {
    goToTop.classList.remove("show");
  }
};

window.addEventListener("scroll", scrollCheck);
goToTop.addEventListener("click", topMove);

/*----------------------------------------------------------*/
// cursor custom
const cursor1 = document.querySelector("#cursor1");
const cursor2 = document.querySelector("#cursor2");
const aAll = document.querySelectorAll("a");
const buttonAll = document.querySelectorAll("button");

addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor1.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;

  cursor2.style.left = mouseX + "px";
  cursor2.style.top = mouseY + "px";
});

function cursorToggleClass(item) {
  item.addEventListener("mouseenter", () => {
    cursor1.classList.add("on");
  });
  item.addEventListener("mouseleave", () => {
    cursor1.classList.remove("on");
  });
}

aAll.forEach((item) => {
  cursorToggleClass(item);
});

buttonAll.forEach((item) => {
  cursorToggleClass(item);
});

cursorToggleClass(sideBtn);

// cursor 모바일에서 지우기
let timer = null;

const mobileCheck = () => {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (mobile === false) {
    cursor1.style.display = "block";
    cursor2.style.display = "block";
  } else {
    cursor1.style.display = "none";
    cursor2.style.display = "none";
  }
}

window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(mobileCheck, 300);
}, )

window.addEventListener("load", mobileCheck)
