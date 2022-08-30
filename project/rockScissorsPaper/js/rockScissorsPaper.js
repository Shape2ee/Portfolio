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
      src: "./images/minigame_rsp_m.gif",
      alt: "Rock Scissers Paper Game mobile",
    },
    {
      src: "./images/minigame_rsp.gif",
      alt: "Rock Scissers Paper Game",
    },
  ];
  const imgTag = document.createElement("img");

  imgTag.setAttribute("loading", "lazy");

  if (window.matchMedia("(min-width: 768px)").matches) {
    imgTag.setAttribute("src", imgList[1].src);
    imgTag.setAttribute("alt", imgList[1].alt);
    imgBox.appendChild(imgTag);
  } else {
    imgTag.setAttribute("src", imgList[0].src);
    imgTag.setAttribute("alt", imgList[0].alt);
    imgBox.appendChild(imgTag);
  }
}

window.addEventListener("load", createImage);
