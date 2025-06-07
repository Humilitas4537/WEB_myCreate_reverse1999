import { encrypt_text, decrypt_text } from './crypto.js';
import { encryptByAES_GCM } from './crypto2.js';

// 쿼리: 데이터베이스(웹 서버)에게 특정 데이터를 보여달라는 클라이언트(사용자)의 요청
// document.querySelector(); 에서 사용되는 '요소' 표현
// "#myDiv" / id="myDiv" 인 요소
// ".input-box" / class가 input-box 인 요소
// "input" / input 태그 중 "첫 번째"

// querySelector는 document.getElementById()처럼 요소를 찾는다.


/*
export async function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
        // AES 알고리즘으로 비밀번호 암호화 후 세션 추가
        let en_text = encrypt_text(session_pass.value);
        let encrypte_data = await encryptByAES_GCM(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value);
        sessionStorage.setItem("Session_Storage_pass", en_text);
        sessionStorage.setItem("Session_Storage_pass2", encrypte_data);
    } else {
        alert("세션 스토리지 지원 x");
    }
}
*/
export async function session_set(){ //세션 저장(객체)
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프

    const obj = { // 객체 선언
        id : id.value,
        otp : random
    }
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 비밀번호가 아니라 객체(이메일,타임스탬프) 암호화!
        let encrypt_data = await encryptByAES_GCM(password.value);
        sessionStorage.setItem("Session_Storage_id", id.value);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
        sessionStorage.setItem("Session_Storage_pass2", encrypt_data);
    } else {
        alert("세션 스토리지 지원 x");
    }
}

// 회원가입 객체 생성
export function session_set2(object){
    if(sessionStorage){
        const objString = JSON.stringify(object); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString);
        sessionStorage.setItem("Session_Storage_newJoin", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }
}


export function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}
// session_check2에서 사용
function session_get2(){
    if(sessionStorage){
        return sessionStorage.getItem("Session_Storage_id");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

export function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}
// profile.html에서 비정상 접근 확인
export function session_check2(){
    let session_id = session_get2();
    if (!session_id){
        alert("잘못된 접근입니다. 로그인 후 이용해주세요.");
        location.href="login/login.html"; // 로그인 페이지로 이동
    }
}

function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}
    