import { decrypt_object } from './crypto.js'

document.addEventListener("DOMContentLoaded", ()=>{
    joinObject_check();
})

function joinObject_check(){
    // 암호화된 (JSON 문자열)객체 가져오기
    const joinObject = sessionStorage.getItem("Session_Storage_newJoin")
    if(joinObject){
        let objString = decrypt_object(joinObject); // 객체 복호화
        let object = JSON.parse(objString); // JSON 문자열 객체 -> 자바스크립트 객체로 변환
        console.log(object);
    }
}