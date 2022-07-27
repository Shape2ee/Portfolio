"use strict";

const darkBtn = document.getElementById("dark_btn");
const osTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(osTheme);

// 로컬스토리지의 다크모드 상태 읽기
if (osTheme === true) {
  document.documentElement.dataset.dark = "true";
}

// 로컬스토리지의 다크모드 상태 읽기
if (localStorage.getItem("dark") === "true") {
  document.documentElement.dataset.dark = "true";
}

const darkMode = () => {
  if (document.documentElement.dataset.dark === "false") {
    // 다크모드 설정
    document.documentElement.dataset.dark = "true";
    // 다크모드 유지
    localStorage.setItem('dark', 'true');
  } else {
    // 다크모드 설정 해지
    document.documentElement.dataset.dark = "false";
    // 로컬스토리지에 다크모드 해제 저장
    localStorage.setItem('dark', 'false');
  }
}

darkBtn.addEventListener("click", darkMode)