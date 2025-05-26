// 쿼리: 데이터베이스(웹 서버)에게 특정 데이터를 보여달라는 클라이언트(사용자)의 요청
// document.querySelector(); 에서 사용되는 '요소' 표현
// "#myDiv" / id="myDiv" 인 요소
// ".input-box" / class가 input-box 인 요소
// "input" / input 태그 중 "첫 번째"

// querySelector는 document.getElementById()처럼 요소를 찾지만
// 더 강력하고 유연한 방식이다.
// 또한 맨 처음 일치하는 요소 하나를 찾아서 반환함.
/*
function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX");
    if (sessionStorage) {
        sessionStorage.setItem("Session_Storage_test", session_id.value);
    } else {
        alert("세션 스토리지 지원 x");
    }
}
*/
function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
        let en_text = encrypt_text(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value);
        sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }
}

/*
function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}       
*/
function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}

/*
function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}
*/  
function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}
    