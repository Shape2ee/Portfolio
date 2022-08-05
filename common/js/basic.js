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
