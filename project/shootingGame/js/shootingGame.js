"use strict";

let imgChange = null;

window.addEventListener("resize", () => {
  clearTimeout(imgChange);
  imgChange = setTimeout(() => {
    console.log("resize");
    document.querySelector(".site-img_box").children[0].remove();
    createImage();
  }, 300);
});

function createImage() {
  const imgBox = document.querySelector(".site-img_box");
  const imgList = [
    {
      src: "./images/shooting_game.gif",
      alt: "JS Shooting Game - Space2023",
    },
  ];
  const imgTag = document.createElement("img");

  imgTag.setAttribute("loading", "lazy");
  imgTag.setAttribute("src", imgList[0].src);
  imgTag.setAttribute("alt", imgList[0].alt);
  imgBox.appendChild(imgTag);
}

window.addEventListener("load", createImage);
