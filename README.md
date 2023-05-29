<p align="center"><img src="https://user-images.githubusercontent.com/103579314/219848280-cee192a1-047f-4f26-8106-b1f245ab3b9e.png"></img></p>

## 실행 방법
[홈페이지 바로가기](letsworkout.store)<br>
### Window
1. letsworkout.store 에 접속
2. Window다운로드 버튼 클릭
3. exe파일 실행
4. Workout!
<br>
### Mac
Mac은 개발자 인증을 받지못해 실행이 되지 않습니다.(개발자인증받은 어플만 실행 옵션을 끄면 가능하지만 가능한 Window를 이용 해 주세요!)

---

## Work Out! 프로젝트!

현대사회에서 운동을 한다고 하면 헬스를 떠올릴 만큼 웨이트트레이닝은 대부분의 사람들이 알고있다.
하지만 프로그램을 짜서 전략적으로 점진적과부하를 시행하는 사람은 초보자라면 쉽지않고 정보또한 부족하기 마련이다.
Work Out은 슬슬 웨이트트레이닝이 진심이 되어가는 헬스인을 위해 루틴,프로그램을 제작,저장,관리하는 웹 어플리케이션이다.

---

## 기능
1. createRoutine - 루틴리스트를 생성하고 생성된 리스트에 운동종류를 추가하는 페이지 (리스트 삭제 가능, 수정은 추가예정)
2. MyRoutine - 생성한 루틴을 확인하고 운동완료버튼을 눌러 이전에 진행한 루틴으로 저장하는 페이지(운동 완료한 기록을 MyPage(개발예정)에서 한눈에 볼수 있는 기능을 제작할 예정입니다.)
3. BackGround - 로그인 후 진입하는 첫 화면으로 createRoutien, MyRoutine, MyPage(예정)을 한눈에 볼 수 있는 페이지
4. NavMeny - 사이드 메뉴 바 입니다. 어디서든 바로 원하는 페이지에 접근할 수 있도록 제작하였습니다, 왼쪽상단의 햄버거 버튼을 누르면 메뉴가 열립니다.

---

## How To Develop?

```
# with npx
$ npx create-nextron-app my-app --example with-material-ui
```

