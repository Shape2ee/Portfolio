const sideBtn = document.querySelector(".header_menu");
const sideMenu = document.querySelector(".side");
const sideList = document.querySelectorAll(".side_item");

const moveTop = [
  {
    transform: "translateY(30%)",
    opacity: 0,
  },
  {
    transform: "translateY(0)",
    opacity: 1,
  },
];

const moveback = [
  {
    transform: "translateY(0)",
    opacity: 1,
  },
  {
    transform: "translateY(30%)",
    opacity: 0,
  },
];


const sideAnimation = () => {
  sideList.forEach((item, idx) => {
    if (sideMenu.classList.contains("active")) {
      item.animate(moveTop, {
        duration: 300,
        fill: "forwards",
        delay: 200 * idx,
      });
    } else {
      item.animate(moveback, {
        duration: 300,
        fill: "forwards",
      });
    }
  });
};

const sideToggle = () => {
  sideBtn.classList.toggle("active");

  // sideMenu.classList.toggle('active');
  if (sideMenu.classList.contains("active")) {
    sideMenu.classList.remove("active");
    sideMenu.style.transitionDelay = "0.5s";
    sideAnimation();
  } else {
    sideMenu.classList.add("active");
    sideMenu.style.transitionDelay = "0s";
    setTimeout(sideAnimation, 1000);
  }
};

sideBtn.addEventListener("click", sideToggle);
