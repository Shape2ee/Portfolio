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
window.addEventListener("load", toggleClass1)