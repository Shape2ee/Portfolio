const tab = document.querySelector(".grid_tab")
const tabList = tab.querySelectorAll("li");
const workItem = document.querySelectorAll(".grid_item");
let selectTab = "";

const workCategory = (selectTab) => {
  let txtData = selectTab.textContent;
  // console.log(workItem[0].classList.contains('web'))
  switch(txtData){
    case "ALL":
      workItem.forEach(item => {
        item.classList.remove('none');
      })
      break;
    case "WEBSITE":
      workItem.forEach(item => {
        item.classList.remove('none')
        if(item.classList.contains('web') === false){
          item.classList.add('none')
        }
      })
      break;
    case "DESIGN":
      workItem.forEach(item => {
        item.classList.remove('none')
        if(item.classList.contains('design') === false){
          item.classList.add('none')
        }
      })
      break;
    case "TOY":
      workItem.forEach(item => {
        item.classList.remove('none')
        if(item.classList.contains('toy') === false){
          item.classList.add('none')
        }
      })
      break;
  }
}

const toggleClass = (e) => {
  selectTab = e.currentTarget;

  tabList.forEach( item => {
    item.classList.remove("active");
  })

  selectTab.classList.add("active");

  workCategory(selectTab)
}

tabList.forEach( item => {
  item.addEventListener("click", toggleClass)
})