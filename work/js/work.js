const tab = document.querySelector(".grid_tab")
const tabList = tab.querySelectorAll("li");
const workItem = document.querySelectorAll(".grid_item");
let selectTab = "";

const toggleClass = (e) => {
  selectTab = e.target;
  console.log(selectTab)

  tabList.forEach( item => {
    item.classList.remove("active");
  })

  selectTab.classList.add("active");

  workCategory()
}

const workCategory = (e) => {
  let tabText = selectTab.textContent;

  if(tabText === "디자인") {
    grid_item.classList.con
  }
}

tabList.forEach( item => {
  item.addEventListener("click", toggleClass)
})
