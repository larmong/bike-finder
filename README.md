
# [ BIKE FINDER ] 따릉이 파인더

###### 따릉이 파인더는 서울시 공공자전거 대여 서비스인 따릉이 웹사이트를 기반으로 리디자인한 반응형 웹사이트이며, 서울시 공공자전거 대여소 정보 API를 활용하여 따릉이 스테이션의 위치를 지도에 표시하여 언제든지 웹사이트에서도 스테이션의 위치를 볼 수 있습니다!

🔗 https://bike-finder-larmong.netlify.app

### 테스트 계정
    - ID: admin@gmail.com
    - PW: 12341234

### 개발 스택
    - Front-end: Nextjs, Reactjs, TypeScript, Javascript
    - Back-end: Nodejs
    - Database: Firebase

### 프로젝트 목표
    - 모바일 및 데스크톱에서 쉽게 접근할 수 있는 반응형 웹
    - 지도를 통해 서울시 자전거 대여소 정보 확인
    - 자전거 대여/반납을 위한 결제 기능
    - Firebase를 사용하여 데이터베이스를 구축

### 프로젝트 페이지, 기능 설명
    - 메인: 배너와 도움주신분 슬라이더와 사업소개로 이루어져 있도록 배치하였고 마지막엔 자전거와 함께하는 SNS사진을 연동하였습니다.(API연동은 불가하여 개인DB이용 하였습니다!)
    - 대여소조회: 카카오 지도에 따릉이 대여소 api를 활용하여 마커로 표시하였습니다. 위치정보의 액세스를 허용한다면 사용자의 위치 기준으로 로드됩니다.
    - 이용권구매: 실제로 결제가 이루어질 때 처럼 결제창을 보여주기 위해 아임포트를 연동하였습니다.
    - 문의하기: 자주하는 질문은 DB에 데이터를 연동해서 보여주었고, 문의하기 페이지에서는 웹 에디터와 이미지 업로드(미리보기)기능을 넣었습니다. 또한 문의를 등록하게되면 글이 등록되고 마이페이지 > 문의내역으로 이동하게 됩니다.
    - 시민센터: 공지사항에서는 같은 데이터이지만 최상단에 고정되어야하는 글을 1페이지에서 보여줍니다.
    - 마이페이지 > 회원정보 > 개인정보 : 비밀번호 변경을 위한 메일을 보내고, 주소 변경을 하고 저장할 수 있습니다.
    - 마이페이지 > 회원정보 > 환승카드 : 약관에 동의하면 카드유형을 선택하고 카드번호를 입력하고 저장할 수 있습니다.
    - 마이페이지 > 회원정보 > 대여비밀번호: 대여비밀번호를 변경할 수 있습니다.
    - 마이페이지 > 회원정보 > 문의내역 : 나의 문의내역 리스트를 확인하고 상세페이지로 이동할 수 있습니다.
    - 마이페이지 > 결제관리 > 결제내역 : 결제수단과 결제일자에 따라서 검색 할 수 있습니다.
    - 마이페이지 > 결제관리 > 추가과금결제 : 추가과금이용내역을 결제하는것 처럼 보여주기 위해 아임포트를 연동하였습니다.
    - 회원가입 : 필수 약관에 모두 동의 후 휴대폰 인증(숫자6자리)을 받고 다음페이지로 넘어가면 인증 받은 이름, 휴대폰번호, 생년월일이 고정되어있습니다.
    - 아이디찾기 : 이름, 생년월일, 휴대폰을 인증을 받으면 아이디를 찾을 수 있습니다.(실제 찾기 기능 x)
    - 비밀번호: 아이디, 생년월일, 휴대폰 인증을 받으면 비밀번호를 변경 할 수 있습니다.(실제 찾기 기능 x)
    - 소셜회원가입: 구글, 페이스북, 깃허브 (가입은 되지만 미완료)

### 배포 이후 수정 사항 (23.07.23~)
    # 수정완료
    - 배포후 상세페이지 에러페이지 뜨는 문제 : gitHub pages(정적웹만 배포 가능) => netlify로 다시 배포하면서 수정 했습니다!
    - 대여소 조회의 지도가 뜨지 않는 오류 : 배포서버(https)에서 따릉이 open api(http)를 요청했을때 발생하는 오류로 안전하지 않을 수 있어서 요청이 차단됨 => 현재 따릉이 api는 https를 지원하지 않아서 기존의 따릉이 api를 apollo로 감싸서 heroku에 재배포해서 수정 했습니다!

    # 수정중
    - 모바일에서 게시판 너비 줄어들면서 게시판 내용 확인 불가능한 오류
    - 로그인했을때만 이용 가능 한 페이지로 이동할때 alert창 뜨면서 페이지가 미리보여지는 오류(이용권구매, 1:1문의하기, 따릉이이용랭킹)
    - 모바일에서 회원가입하면 회원정보가 안뜨는 오류
    - 모바일 사이드메뉴 최신 공지사항 api 연동 안되어있음
    - pc버전 게시판 검색할 때, 엔터키로 검색 가능하도록 수정

    
