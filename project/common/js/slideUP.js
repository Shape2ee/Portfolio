const overViewTitle = document.querySelector(".overview_main-tit");
const overview = document.querySelector(".overview");
const siteImg = document.querySelector(".site-img");
const infoList = document.querySelectorAll(".info_item");

// const infoItem1 = document.querySelector(".info_item:nth-child(1)");
// const infoItem2 = document.querySelector(".info_item:nth-child(2)");
// const infoItem3 = document.querySelector(".info_item:nth-child(3)");
// const infoItem4 = document.querySelector(".info_item:nth-child(4)");

let myScroll = 0;

function scorllCheck(offsetTop, item) {
  if (myScroll > offsetTop) {
    item.classList.add("on");
  } else {
    item.classList.remove("on");
  }
}

const toggleClass1 = () => {
  myScroll = window.scrollY;
  let overViewValue = main.offsetTop + overViewTitle.offsetTop;
  // let siteImgValue = main.offsetTop + siteImg.offsetTop

  scorllCheck(overViewValue, siteImg);

  infoList.forEach((item) => {
    scorllCheck(item.offsetTop + 300, item);
  });
};

window.addEventListener("scroll", toggleClass1);
window.addEventListener("load", () => {
  toggleClass1();
});
