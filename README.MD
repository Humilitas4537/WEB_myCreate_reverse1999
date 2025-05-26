# HTML 개인 프로젝트 - 깃허브
- [프로젝트 메인 주소](https://github.com/Humilitas4537/Web_myCreate_Reverse1999)
## 교수님께
- 수업용이 아닌 복습용이라서 실제 수업일과 업로드 날짜는 다릅니다.
- 모든 개인문제, 응용문제 다 풀었으며 기능도 빠짐없이 다 구현되어 있습니다.
- 9주차 업로드 때 9~11주차 기능이 같이 업로드되었고 
- 이후 연습문제나 빠진 기능들을 보안하는 것으로 10,11주차를 업로드했습니다.

## 2주차 수업 메인화면 개발 완료! (문제 포함)
'스테이징' --커밋--> '로컬 저장소' --푸쉬--> '원격 저장소'
커밋은 스테이징 영역에 있는 파일을 커밋하는 거기 때문에 커밋하기 위해서는 작업한 파일을 스테이징할 필요가 있다. 
따라서 우리가 커밋을 할때 "스테이징된 변경사항이 없습니다. 모든 변경사항을 스테이징하고 직접 커밋하시겠습니까?"라고 물어보는 것.
하지만 커밋했다고 해도 깃허브에 바로 저장되는 것이 아니라 로컬 리포지터리에 있기 때문에 
여기서 한번 더 원격 리포지터리로 푸쉬해야 한다.

## 3주차 수업 부트스트랩 적용 완료! (문제 포함)
네비바 하이퍼링크 추가, 색상스키마 변경(purple), 테이블 색상 변경

색상: primary, secondary, success, danger, warning, info
클래스 안에서 bg-body-tertiary를 bg-properly처럼 bg-*로 바꾸든가, 지우고 style=""을 지정해줘야 함: 아래 속성 참고, nav에서는 bg- 뒤에 추가
테이블에 색상 적용했을시 예시: table에 calss="table" 작성, table- 뒤에 추가
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

badWord=["시발","tlqkf","병신","qudtls","느금마"];
    if (searchTerm.length === 0){  // (!searchTerm): 공백과 null, undefined를 의미
        alert("검색어를 입력하세요");
        return false;
    }
    for(const word of badWord){
        if (word === searchTerm){
            alert("비속어를 제외하세요");
            return false;
        }
    }

## 6주차 수업 로그인 화면 추가 완료 (문제 포함)
js 및 html 정리

## 9주차 XSS방지, 팝업창 쿠키 완료(문제 포함)
개인 문제 진행도 확인 -> 전부 완료
Readme.md 정리 완료

## 10주차 수업 완료(문제 제외)

## 11주차 수업 완료