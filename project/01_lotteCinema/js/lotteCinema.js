const overViewTitle = document.querySelector(".overview_main-tit");
const overview = document.querySelector(".overview");
const siteImg = document.querySelector(".site-img");
const infoItem1 = document.querySelector(".info_item:nth-child(1)");
const infoItem2 = document.querySelector(".info_item:nth-child(2)");
const infoItem3 = document.querySelector(".info_item:nth-child(3)");
const infoItem4 = document.querySelector(".info_item:nth-child(4)");


let myScroll = 0;

function scorllCheck(offsetTop, item) {
  if(myScroll  > offsetTop) {
    item.classList.add("on")
  } else {
    item.classList.remove("on")
  }
}

const toggleClass1 = () => {
  myScroll = window.scrollY;
  let overViewValue = main.offsetTop + overViewTitle.offsetTop;
  // let siteImgValue = main.offsetTop + siteImg.offsetTop

  scorllCheck(overViewValue, siteImg)
  scorllCheck(infoItem1.offsetTop + 300, infoItem1);
  scorllCheck(infoItem2.offsetTop + 300, infoItem2);
  scorllCheck(infoItem3.offsetTop + 300, infoItem3);
  scorllCheck(infoItem4.offsetTop + 300, infoItem4);
}

window.addEventListener("scroll", toggleClass1)
window.addEventListener("load", () => {
  toggleClass1()
  createImage()
})

let imgChange = null;


window.addEventListener("resize", () => {
  clearTimeout(imgChange)
  imgChange = setTimeout(() => {
    

    console.log("resize")
    document.querySelector(".site-img_box").children[0].remove()
    createImage()
  }, 300);
})

function createImage() {
  const imgBox = document.querySelector(".site-img_box");

  const imgList = [
    {
      src: "../01_lotteCinema/images/lotte_m.png",
      alt: "lotte cinema mobile"
    },
    {
      src: "../01_lotteCinema/images/lotte.png",
      alt: "lotte cinema pc"
    }
  ]
  const imgTag = document.createElement("img");
  
  if(window.matchMedia("(min-width: 768px)").matches) {
    imgTag.setAttribute("src", imgList[1].src);
    imgTag.setAttribute("alt", imgList[1].alt);
    imgBox.appendChild(imgTag);
  } else {
    imgTag.setAttribute("src", imgList[0].src);
    imgTag.setAttribute("alt", imgList[0].alt);
    imgBox.appendChild(imgTag);
  }
}