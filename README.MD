# HTML 개인 프로젝트 - 깃허브
- [프로젝트 메인 주소](https://github.com/Humilitas4537/Web_myCreate_Reverse1999)

## 2주차 수업 메인화면 개발 완료! (문제 포함)
- HTML 시작
- 주제 선정 : 'Reverse 1999' 모바일 게임 홈 페이지 구현
- 상단 
로고 이미지, 메뉴 텍스트 바 구현
- 중단
배경 색상 변경, 배경 이미지 생성
- 하단
하단 텍스트 구현(회사 이름, 이미지 및 저작권, 약관 정보)

## 3주차 수업 부트스트랩 적용 완료! (문제 포함)
- 배경 이미지 - 공식 홈페이지 링크 연결
- 하단 - table로 캐릭터 표 생성
- 응용 문제 완료
1) 텍스트 + 이미지 추가
2) 캐릭터 소개 웹 페이지 연결
3) 테이블 색상 추가

네비바 하이퍼링크 추가, 색상스키마 변경(purple), 테이블 색상 변경

- 색상: primary, secondary, success, danger, warning, info
- 클래스 안에서 bg-body-tertiary를 bg-properly처럼 bg-*로 바꾸든가, 지우고 style=""을 지정해줘야 함: 아래 속성 참고, nav에서는 bg- 뒤에 추가
- 테이블에 색상 적용했을시 예시: table에 calss="table" 작성, table- 뒤에 추가
"table-primary"
"table-secondary"
"table-success"
"table-danger"
"table-warning"
"table-info"

## 4주차 수업 자바스크립트 적용 완료! (문제 포함)
식별자(id) 수정, 함수 중복 시 재정의되어 마지막 함수 실행, let 변수로 출력 완료

## 5주차 수업 자바스크립트 추가 완료! (문제 포함)
googleSearch() 수정: 비속어 포함, 공백일시 검색 중단(if,반복문,배열 활용)

## 6주차 수업 로그인 화면 추가 완료 (문제 포함)
- js 및 html 정리

## 9주차 수업 XSS방지, 팝업창 쿠키 완료(문제 포함)
- 개인 문제 진행도 확인 -> 전부 완료
- Readme.md 정리 완료

## 10주차 수업 쿠키, 세션 추가 완료(문제 포함)
- login_count / logout_count 함수 추가 완료 : 로그인&로그아웃 횟수 count
- login_failed 함수 추가 완료 : 로그인 3회 이상 실패 시 1분간 차단

## 11주차 수업 암호화, JWT 토큰 구현 완료(문제 포함)
- Web Crypto API 활용, AES-256-GCM 알고리즘 암/복호화 기능 추가 완료
1) 로그인 시 패스워드 암호화 -> export/문자열로 변환해서 pass2, key, iv 세션에 추가
2) 로그인 후 화면 -> arrayBuffer로 변환/import로 복구해서 패스워드 복호화 -> 콘솔 출력
- 로그아웃 기능 추가 : 로컬스토리지 jwt_token 삭제

## 12주차 수업 모듈화, 객체 저장 구현 완료(문제 포함)
- 객체 생성 후 JSON문자열 변환 -> AES256 암호화 -> 세션 저장
- 세션에 newJoin이 있으면, 복호화 -> 객체로 변환 -> 콘솔 출력

## 13주차 수업 프로필, 지도 구현 완료(문제 포함)
- 프로필 수정 : 사진, 프로필 내용, 관심사 변경
- profile.html 접근 제한 완료
1) target="_self"로 기존 세션 정보 유지 -> 세션 내 id 요소 확인
2) id가 없으면 로그인 페이지로 이동
- 마커에 주소 출력, 지도 좌측 하단에 현재 지역 표시