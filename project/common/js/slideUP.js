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
  /*
  scorllCheck(infoList[0].offsetTop + 300, infoList[0]);
  scorllCheck(infoList[1].offsetTop + 300, infoList[1]);
  scorllCheck(infoList[2].offsetTop + 300, infoList[2]);
  scorllCheck(infoList[3].offsetTop + 300, infoList[3]);
  scorllCheck(infoList[4].offsetTop + 300, infoList[4]);
  scorllCheck(infoList[5].offsetTop + 300, infoList[5]);
  */
};

window.addEventListener("scroll", toggleClass1);
window.addEventListener("load", () => {
  toggleClass1();
});
