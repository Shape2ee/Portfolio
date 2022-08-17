const mobileSize = matchMedia('(min-width:768px)');
const siteImage = document.getElementById("siteImg");

// console.log(siteImage);
const imgChange = () => {
  if(mobileSize.matches) {
    siteImage.setAttribute("src","../01_lotteCinema/images/lotte.png")
  } else {
    siteImage.setAttribute("src","../01_lotteCinema/images/lotte_m.png")
  }
}

window.addEventListener("resize", imgChange);
window.addEventListener("load", imgChange);