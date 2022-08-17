const h2 = document.querySelector(".about__title h2");
const infoTxt = document.querySelector(".about__txt");
const infoImg = document.querySelector(".about__img");
const skill = document.querySelector(".skill");
const skillItemList = document.querySelectorAll(".skill__item");

const h2offsetTop = h2.offsetTop;
let myScroll = 0;

function scorllCheck(offsetTop, item) {
  if (myScroll > offsetTop) {
    item.classList.remove("hide");
  } else {
    item.classList.add("hide");
  }
}

const toggleClass = () => {
  myScroll = window.scrollY;
  if (myScroll !== 0) {
    infoTxt.classList.remove("hide");
  } else {
    infoTxt.classList.add("hide");
  }
};

const toggleClass1 = () => {
  myScroll = window.scrollY;
  console.log(myScroll);

  scorllCheck(h2offsetTop, infoImg);
  scorllCheck(infoImg.offsetTop, skill);

  skillItemList.forEach((item) => {
    // item.style.backgroundColor = "red";
    let num = skill.offsetTop + item.offsetTop;
    item.innerText = `${num}`;
    // let total = num - item.clientHeight * 0.8;
    // scorllCheck(total, item);
  });
};

window.addEventListener("scroll", toggleClass);
window.addEventListener("scroll", toggleClass1);
window.addEventListener("load", toggleClass1);
