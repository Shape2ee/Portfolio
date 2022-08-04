const header = document.querySelector(".header");
const overView = document.querySelector("main");
console.log(overView.offsetTop)
const headerChange = () => {
  if(window.scrollY > overView.offsetTop - 100) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
}

addEventListener("scroll", headerChange)