const tab = document.querySelector(".grid_tab")
const tabList = tab.querySelectorAll("li");
const workItem = document.querySelectorAll(".grid_item");
let selectTab = "";

const workCategory = (selectTab) => {
  console.log(selectTab)
  let txtData = selectTab.textContent;
  // console.log(workItem[0].classList.contains('web'))
  switch(txtData){
    case "전체보기":
      workItem.forEach(item => {
        item.classList.remove('none');
      })
      break;
    case "웹사이트":
      workItem.forEach(item => {
        item.classList.remove('none')
        if(item.classList.contains('web') === false){
          item.classList.add('none')
        }
      })
      break;
    case "디자인":
      workItem.forEach(item => {
        item.classList.remove('none')
        if(item.classList.contains('design') === false){
          item.classList.add('none')
        }
      })
      break;
  }
}

const toggleClass = (e) => {
  selectTab = e.target;
  console.log(selectTab)

  tabList.forEach( item => {
    item.classList.remove("active");
  })

  selectTab.classList.add("active");

  workCategory(selectTab)
}

tabList.forEach( item => {
  item.addEventListener("click", toggleClass)
})