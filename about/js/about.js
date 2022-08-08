const h2 = document.querySelector(".about__title h2");
const infoTxt = document.querySelector(".about__txt");
const infoImg = document.querySelector(".about__img");
const skill = document.querySelector(".skill");
const skillItem1 = document.querySelector('.skill__item:nth-child(1)');
const skillItem2 = document.querySelector('.skill__item:nth-child(2)');
const skillItem3 = document.querySelector('.skill__item:nth-child(3)');
const skillItem4 = document.querySelector('.skill__item:nth-child(4)');

const h2offsetTop = h2.offsetTop;
let myScroll = 0;

function scorllCheck(offsetTop, item) {
  if(myScroll > offsetTop) {
    item.classList.add("on")
  } else {
    item.classList.remove("on")
  }
}

const toggleClass = () => {
  myScroll = window.scrollY
  if(myScroll !== 0) {
    infoTxt.classList.add("on")
  } else {
    infoTxt.classList.remove("on")
  }
};

const toggleClass1 = () => {
  myScroll = window.scrollY;
  scorllCheck(h2offsetTop, infoImg);
  scorllCheck(infoImg.offsetTop, skill);
  const skillTop = skill.offsetTop - 300;
  const Item1Top = skillItem1.offsetTop;
  const Item2Top = skillItem2.offsetTop;
  const Item3Top = skillItem3.offsetTop;
  console.log(Item1Top,Item2Top,Item3Top)
  scorllCheck(skillTop, skillItem1);
  scorllCheck(skillTop + 300, skillItem2);
  scorllCheck(skillTop + 600, skillItem3);
  scorllCheck(skillTop + 900, skillItem4);
};

window.addEventListener("scroll", toggleClass);
window.addEventListener("scroll", toggleClass1);
window.addEventListener("load", toggleClass1);