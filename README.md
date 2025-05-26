# 🦁 멋쟁이사자처럼 13기 React 4번째 세션 과제입니다 🦁

React Router를 이용하여 배경색 전환 페이지를 구현한 과제입니다.

<br/>

## ⭐️ 과제 시작 방법
- github 레포지토리를 fork 하신 다음, 복제된 레포지토리를 로컬에 clone 해주세요!
- ColorPage.jsx / MainPage.jsx / App.jsx 만 수정해주세요! 

<br/>

## 💡 과제 설명

사용자가 특정 색상을 클릭하면, 해당 색상의 이름이 URL 경로에 반영되고  
**React Router의 동적 파라미터**를 이용하여 배경색이 해당 색으로 바뀌는 페이지가 출력됩니다.

다음의 다섯가지 색으로 페이지 이동을 해보아요 🎨
 > red/ blue / pink / orange / yellow

예시 URL:  
`/color/red` —> 빨간색 배경의 페이지<br/>
`/color/blue` —> 파란색 배경의 페이지



## ✅ 구현 방식

- `react-router-dom` 라이브러리를 사용하여 라우팅 구현
- `:id` 파라미터를 통해 URL에 따라 동적으로 색상 렌더링
- `useParams` 훅을 사용하여 URL에서 색상 값 추출
- `useNavigate`로 버튼 클릭 시 페이지 이동 처리
- 색상 목록은 `MainPage`에서 배열로 관리

## 🤷🏻‍♀️ 제출 방식

- '본인' 레포지토리에 pull request를 생성해주세요!
- 만들어진 PR 링크를 Lioz에 제출해주세요 !
