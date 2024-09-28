# 🐶유기동물 조회 서비스: 다시-펫(DASI-PET)🐱
- 배포 URL : https://group-project-green-six.vercel.app/
- OpenAPI: https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15098931
- UI, Image 참고: 국가동물보호정보시스템 홈페이지

## 🖥️ 프로젝트 소개
"다시-펫(DASI-PAT)" 서비스는 현재 구조된 유기동물에 대한 정보를 습득하고, 해당 동물이 위치한 보호소를 조회할 수 있는 웹 사이트 입니다.
현재(2024년 09월) 기준 구조된 유기 동물은 약 75,000마리입니다. 아기 유모차보다 반려동물 유모차의 판매율이 더 높아지는 상황에서, 유기 동물의 수도 점점 증가하고 있습니다.

> 불법 번식장, 펫샵에서 동물을 분양받는 것보단,
> 새로운 가족을 애타게 기다리는 유기 동물들의 따뜻한 보호자가 되는 것은 어떨까요?

## 👨‍💻 팀원 소개
- 박승원(PO) - 동물카드, 메인 Carousel, 동물 페이지(검색, 필터링), NotFoundPage, 입양정보 페이지 제작.
- 김희진(SM) - 로그인 페이지, 로그인 관리, 동물 찜하기 기능 제작.
- 김서희 - 초기 파일 및 라우터 세팅, 메인 Banner, 동물 상세페이지, Footer, 메인 Aside, ScrollTop 제작.
- 김승현 - 로고 제작, 네비게이션 바, 입양안내 페이지, 전체적인 CSS 관리.
- 이제의 - 보호소 지도 리스트, 지도에 마커, 보호소 상세페이지 제작.

## 📺 화면 구성
|메인페이지|  |
|--|--|
| img |img  |


## 🔥 주요 기능

- **보호 중인 동물 검색**
	- 보호 중인 전체 동물 조회 가능
	- 공고기간, 지역, 보호소, 품종, 중성화 여부로 검색 가능
	
- **전국의 동물보호소 정보 조회**
	- 위치, 연락처, 운영시간, 시설 정보, 지도 확인 가능
	
- **입양자 준수사항, 입양 교육를 위한 외부링크**
	- 입양자 준수사항 9가지 공지
	- "동물사랑배움터" 링크로 이어지는 입양 교육
	
- **관심있는 동물 즐겨찾기**
	- 동물카드에 있는 "하트"를 누르면 "즐겨찾기" 메뉴에서 모아보는 기능

## ⚙️ 개발 환경
**Environment**
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 

**Config**
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

**Development**
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

**Communication**
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

**디렉터리 구조 (src)**
src  
 ┣ common  
 ┃ ┣ AnimalCard  
 ┃ ┃ ┣ AnimalCard.jsx  
 ┃ ┃ ┗ AnimalCard.style.css  
 ┃ ┣ ShelterCard  
 ┃ ┃ ┣ ShelterCard.jsx  
 ┃ ┃ ┗ ShelterCard.style.css  
 ┃ ┗ URLCard  
 ┃ ┃ ┣ URLCard.jsx  
 ┃ ┃ ┗ URLCard.style.css  
 ┣ constants  
 ┃ ┗ ScrollTop.js  
 ┣ hooks  
 ┃ ┣ useAnimalCardData.js  
 ┃ ┣ useKindSearch.js  
 ┃ ┣ useMainCardData.js  
 ┃ ┣ useShelter.js  
 ┃ ┣ useShelterDetails.js  
 ┃ ┣ useShelterList.js  
 ┃ ┣ useShelterPage.js  
 ┃ ┣ useShelterSearch.js  
 ┃ ┣ useSidoSearch.js  
 ┃ ┗ useSigunguSearch.js  
 ┣ layout  
 ┃ ┣ AppLayout  
 ┃ ┃ ┣ AppLayout.jsx  
 ┃ ┃ ┗ AppLayout.style.css  
 ┃ ┗ Footer  
 ┃ ┃ ┣ Footer.jsx  
 ┃ ┃ ┗ Footer.style.css  
 ┣ map  
 ┃ ┣ ListMap  
 ┃ ┃ ┣ ListMap.jsx  
 ┃ ┃ ┗ ListMap.style.css  
 ┃ ┗ Map  
 ┃ ┃ ┣ Map.jsx  
 ┃ ┃ ┗ Map.style.css  
 ┣ pages  
 ┃ ┣ AdoptGuidePage  
 ┃ ┃ ┣ components  
 ┃ ┃ ┃ ┗ ContentCard  
 ┃ ┃ ┃ ┃ ┣ ContentCard.jsx  
 ┃ ┃ ┃ ┃ ┗ ContentCard.style.css  
 ┃ ┃ ┣ AdoptGuidePage.jsx  
 ┃ ┃ ┗ AdoptGuidePage.style.css  
 ┃ ┣ AnimalDetailPage  
 ┃ ┃ ┣ AnimalDetailPage.jsx  
 ┃ ┃ ┗ AnimalDetailPage.style.css  
 ┃ ┣ AnimalEduPage  
 ┃ ┃ ┣ AnimalEduPage.jsx  
 ┃ ┃ ┗ AnimalEduPage.style.css  
 ┃ ┣ AnimalLikePage  
 ┃ ┃ ┣ component  
 ┃ ┃ ┃ ┗ FavoritesPagination.jsx  
 ┃ ┃ ┣ AnimalLikePage.jsx  
 ┃ ┃ ┗ AnimalLikePage.style.css  
 ┃ ┣ AnimalsPage  
 ┃ ┃ ┣ component  
 ┃ ┃ ┃ ┣ AnimalCardWrapper  
 ┃ ┃ ┃ ┃ ┣ AnimalCardWrapper.jsx  
 ┃ ┃ ┃ ┃ ┗ AnimalCardWrapper.style.css  
 ┃ ┃ ┃ ┣ AnimalFilter  
 ┃ ┃ ┃ ┃ ┣ AnimalFilter.jsx  
 ┃ ┃ ┃ ┃ ┗ AnimalFilter.style.css  
 ┃ ┃ ┃ ┗ pagination  
 ┃ ┃ ┃ ┃ ┣ Pagination.jsx  
 ┃ ┃ ┃ ┃ ┗ Pagination.style.css  
 ┃ ┃ ┣ AnimalsPage.jsx  
 ┃ ┃ ┗ AnimalsPage.style.css  
 ┃ ┣ HomePage  
 ┃ ┃ ┣ component  
 ┃ ┃ ┃ ┣ AnimalCardComp  
 ┃ ┃ ┃ ┃ ┣ AnimalCard.jsx  
 ┃ ┃ ┃ ┃ ┗ AnimalCard.style.css  
 ┃ ┃ ┃ ┣ Banner  
 ┃ ┃ ┃ ┃ ┣ Banner.jsx  
 ┃ ┃ ┃ ┃ ┗ Banner.style.css  
 ┃ ┃ ┃ ┣ HomeAnimalSearch  
 ┃ ┃ ┃ ┃ ┣ AnimalCardSlider  
 ┃ ┃ ┃ ┃ ┃ ┣ AnimalCardSlider.jsx  
 ┃ ┃ ┃ ┃ ┃ ┗ AnimalCardSlider.style.css  
 ┃ ┃ ┃ ┃ ┣ HomeAnimalSearch.jsx  
 ┃ ┃ ┃ ┃ ┗ HomeAnimalSearch.style.css  
 ┃ ┃ ┃ ┣ Information  
 ┃ ┃ ┃ ┃ ┣ Information.jsx  
 ┃ ┃ ┃ ┃ ┗ Information.style.css  
 ┃ ┃ ┃ ┗ ShelterMap  
 ┃ ┃ ┃ ┃ ┣ ShelterMap.jsx  
 ┃ ┃ ┃ ┃ ┗ ShelterMap.style.css  
 ┃ ┃ ┣ HomePage.jsx  
 ┃ ┃ ┗ HomePage.style.css  
 ┃ ┣ LoginPage  
 ┃ ┃ ┣ LoginPage.jsx  
 ┃ ┃ ┗ LoginPage.style.css  
 ┃ ┣ NotFound  
 ┃ ┃ ┣ 404page.png  
 ┃ ┃ ┣ NotFound.jsx  
 ┃ ┃ ┗ NotFound.style.css  
 ┃ ┣ ShelterDetailPage  
 ┃ ┃ ┣ ShelterDetailPage.jsx  
 ┃ ┃ ┗ ShelterDetailPage.style.css  
 ┃ ┗ SheltersPage  
 ┃ ┃ ┣ component  
 ┃ ┃ ┃ ┗ ShelterFilter  
 ┃ ┃ ┃ ┃ ┣ ShelterFilter.jsx  
 ┃ ┃ ┃ ┃ ┗ ShelterFilter.style.css  
 ┃ ┃ ┣ SheltersPage.jsx  
 ┃ ┃ ┗ SheltersPage.style.css  
 ┣ store  
 ┃ ┗ redux  
 ┃ ┃ ┣ animalSearchSlice.js  
 ┃ ┃ ┣ AuthSlice.js  
 ┃ ┃ ┣ favoritesSlice.js  
 ┃ ┃ ┣ shelterSlice.js  
 ┃ ┃ ┗ store.js  
 ┣ utils  
 ┃ ┣ api.js  
 ┃ ┗ shelterApi.js  
 ┣ App.css  
 ┣ App.js  
 ┣ App.test.js  
 ┣ index.css  
 ┣ index.js  
 ┣ logo.svg  
 ┣ reportWebVitals.js  
 ┗ setupTests.js
