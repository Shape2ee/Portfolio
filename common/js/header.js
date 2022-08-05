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
