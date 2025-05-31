import { session_set2 } from './session.js'

class SignUp {
    constructor(name, email, password, re_password) {
        // 생성자 함수: 객체 생성 시 회원 정보 초기화
        this._name = name;
        this._email = email;
        this._password = password;
        this._re_password = re_password;
    }

    // 전체 회원 정보를 한 번에 설정하는 함수
    setUserInfo(name, email, password, re_password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._re_password = re_password;
    }

    // 전체 회원 정보를 한 번에 가져오는 함수
    getUserInfo() {
        return {
            name: this._name,
            email: this._email,
            password: this._password,
            re_password: this._re_password
        };
    }
}

function join(){ // 회원가입 기능
    const nameRegex = /^[가-힣]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let form = document.querySelector("#join_form"); // 로그인 폼 식별자
    let name = document.querySelector("#form3Example1c"); // 이름 식별자
    let email = document.querySelector("#form3Example3c"); // 이메일 식별자
    let password = document.querySelector("#form3Example4c"); // 패스워드 식별자
    let re_password = document.querySelector("#form3Example4cd"); // 패스워드 확인 식별자
    let agree = document.querySelector("#form2Example3c");

    form.action = "../index.html"; // 로그인 성공 시 이동
    form.method = "get"; // 전송 방식

    // /정규식/.test('문자열') : 왼쪽 정규식에 대해서 오른쪽 문자열이 패턴이 일치하는지 확인 -> 일치 : true, 불일치 : false 반환,
    // '문자열'.match(/정규식/) : 왼쪽 문자열에 대해서 오른쪽 정규식에 일치하는 부분을 배열로 반환, 일치하지 않으면 null 반환
    if (!nameRegex.test(name.value)) { // 이름 검사
        alert("이름은 한글만 입력 가능합니다.");
        name.focus();
        return;
    }
    if (!emailRegex.test(email.value)) { // 이메일 검사
        alert("이메일 형식이 올바르지 않습니다.");
        email.focus();
        return;
    }
    if (!pwRegex.test(password.value)) { // 비밀번호 검사
        alert("비밀번호는 8자 이상이며 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
        password.focus();
        return;
    }
    if (password.value !== re_password.value) { // 비밀번호 일치 검사
        alert("비밀번호가 일치하지 않습니다.");
        re_password.focus();
        return;
    }
    if (!agree.checked) { // 약관 동의 확인
        alert("약관에 동의하셔야 가입이 가능합니다.");
        return;
    }

    if(name.value.length === 0 || email.value.length === 0 || password.value.length === 0 || re_password.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
    }
    else{
        const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입 정보 객체 생성
        session_set2(newSignUp); // 세션 저장 및 객체 전달
        form.submit(); // 폼 실행
    }
}
document.getElementById("join_btn").addEventListener('click', join); // 이벤트 리스너