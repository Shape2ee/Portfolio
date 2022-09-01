"use strict";

const header = document.querySelector(".header");
const main = document.querySelector("main");

const HEADER_CHANGE = "change";
const HEADER_PROJECT = "project";
const changeHeader = () => {
  if(window.scrollY !== 0) {
    header.classList.add(HEADER_CHANGE);
  } else {
    header.classList.remove(HEADER_CHANGE);
  }
}

const headerChange = () => {
  if(sideMenu.classList.contains("active")) {
    header.classList.remove(HEADER_PROJECT);
  } else if(window.scrollY > main.offsetTop - 100) {
    header.classList.add("on");
    header.classList.remove(HEADER_PROJECT);
  } else {
    header.classList.remove("on");
    header.classList.add(HEADER_PROJECT);
  }
}

const sideCheck = () => {
  if (sideMenu.classList.contains("active")) {
    header.classList.remove(HEADER_PROJECT);
    header.classList.remove("on");
  } else {
    headerChange()
  }
}

window.addEventListener("scroll", () => {
  changeHeader();
  headerChange();
});

sideBtn.addEventListener("click", sideCheck);

window.addEventListener("load", () => {
  changeHeader();
  headerChange();
});
