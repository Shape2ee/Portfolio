# 😎 DoHyoung Portfolio

지금까지의 작업과 앞으로의 작업들이 담길 공간입니다.<br>
전체적인 컨셉은 최대한 심플하면서 포인트들을 추가하자는 생각으로 작업하였고,<br>
홈 화면은 하얀 도화지에 물감을 칠한 것 같은 느낌으로 작업을 하였습니다.<br>

[Portfolio 바로가기](https://shape2ee.github.io/Portfolio/)

## 🖥 Overview

- Responsive Web
- 개인 프로젝트 100%
- 작업기간 : 22.07.25 ~ 22.08.22

<br>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>

## 📌 Publishing
- Chrome 브라우저 최적화
- PC : 1920px ~ 1025px / Tablet : 1024px ~ 769px / Mobile : 768px~
- `flex, grid, position`을 이용한 레이아웃
- bem 방식의 네이밍 규칙 적용
- 미디어 쿼리와 가변 단위 값, `rem`을 이용한 사용자별 환경, 디바이스 제약 해결
- 다크모드 적용으로 사용성 개선

## 📝 Review

- 처음으로 가장 많은 페이지를 작업을 한 프로젝트여서 기간도 오래걸리고 많은 스크립트 오류와의 전쟁이었습니다.<br>
  하지만 스스로 검색을 통해서 문제를 해결하는 과정을 갖으므로 인하여 스스로 더 성장하는 계기가 되었습니다.<br>
  앞으로는 React를 더 공부해서 포트폴리오 사이트를 React로 작업을 할 예정입니다.
  
- `Swiper js`를 이용하여 메인 홈 화면에 프로젝트들의 슬라이드를 구현을 하였고,<br>
  텍스트에 시차를 부여한 애니메이션과 인덱스 번호와 컨텐츠 슬라이드를 연결하여<br>
  슬라이더 자체에 재미를 느낄 수 있도록 하였습니다.

- 가장 큰 문제였던 것은 `JavaScript`를 이용해서 About페이지의 Fade In이 되는 Animation 작업을 구현하였는데,<br>
  처음에는 item을 감싸고 있는 `skill` 박스에 `offsetTop` 만큼 더해서 하나하나 다르게 진행되도록 했지만,<br>
  ios 환경에서는 구현되지 않는 문제가 있었고, `offsetTop` 값이 제대로 적용이 되지 않는 문제라는 것을  파악 후<br>
  `offsetTop`이 아닌 item의 높이값 `clientHeight` 만큼을 더해주면서 문제를 해결하였습니다.<br>
  ios의 환경이 많이 다르다는것은 알고 있었지만 직접 겪어보니, 크로스브라우징하는 것은 쉽지않았고,<br>
  ios환경에 대해서 더욱 공부를 하고 싶어졌습니다.