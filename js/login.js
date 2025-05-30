function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if(get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }
    session_check(); // 로그인 버튼이 아닌 init()에다가 추가, 로그인 버튼에다가 추가하는 것은 자원낭비
}

async function init_logined(){
    if(sessionStorage){
        decrypt_text(); // 복호화 함수

        // 문자열로 받은 key, iv 다시 복원
        const base64key = sessionStorage.getItem("key");
        const rawkey = base64ToArrayBuffer(base64key); // arrayBuffer로 변환
        const key = await crypto.subtle.importKey(  // key import
            'raw',
            rawkey,
            { name: 'AES-GCM' },
            true,
            ['encrypt', 'decrypt']
        );
        const base64iv = sessionStorage.getItem("iv");
        const iv = base64ToArrayBuffer(base64iv); // arrayBuffer로 변환
        const base64encrypted = sessionStorage.getItem("Session_Storage_pass2");
        const encrypted = base64ToArrayBuffer(base64encrypted);
        await decryptByAES_GCM(encrypted, key, iv);
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}


// 로그인 횟수 함수는 login.js, 로그아웃 횟수 함수는 logout.js
function login_count(){
    let count = getCookie("login_cnt");
    if (!count){
        count = 1;
    }
    else{
        count = parseInt(count) + 1;
    }
    setCookie("login_cnt", count, 1);
}
// 3번 이상 실패 시 로그인 제한
function login_failed(){
    let count=getCookie("failcount");
    if (!count){
        count = 1;
    }
    else{
        count = parseInt(count) + 1;
    }
    setCookie("failcount", count, 1);
    // 3번 이상 로그인 실패 시
    if (parseInt(count) >= 3){
        // 로그인 실패 횟수 쿠키 삭제
        setCookie("failcount", count, 0);
        // 로그인 제한 쿠기 1분간 생성
        setCookie_Min("loginBlock", "Y", 1)
        alert("로그인을 3회 이상 실패하여서 1분 간 로그인이 제한됩니다.")
    }
    return;
}
// 로그인 제한 쿠키 전용 set함수
function setCookie_Min(name, value, expireMin) {
    var date = new Date();
    date.setTime(date.getTime() + expireMin * 1000 * 60);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
}


// script태그로 pop_up.js를 불러오지 않고 set/getCookie()를 복사해서 login.js에 따로 생성하는 이유?
// pop_up.js의 getCookie()와 검사하는 내용이 다르기 때문에 코드를 따로 생성한 것.
// 또 pop_up.js에 있는 필요없는 기능들까지 로딩되기 때문에 무거워짐
function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
}

function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == name) {
                        return cookie_name[1];
                    }   
            }
        }
    return;
}


const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
        // XSS 공격 가능성 발견 시 에러 처리
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
    };

const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    // 전역 변수 추가, 맨 위 위치
    const idsave_check = document.getElementById('idSaveCheck');
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const sanitizedPassword = check_xss(passwordValue);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailValue);
    // check_xss 함수로 이메일 Sanitize

    // 가장 먼저 로그인 제한 상태 확인
    if (getCookie("loginBlock") === "Y"){
        alert("로그인을 3회 이상 실패하여서 1분 간 로그인이 제한됩니다.")
        return false;
    }

    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const payload = {
        id: emailValue,
        exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
    };
    const jwtToken = generateJWT(payload);     

    if (emailValue === "") {
        alert('이메일을 입력하세요.');
        login_failed();
        return false;
    }
    if (passwordValue === "") {
        alert('비밀번호를 입력하세요.');
        login_failed();
        return false;
    }
    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        login_failed();
        return false;
        }
    if (passwordValue.length < 10) {
        alert('비밀번호는 반드시 10글자 이상 입력해야 합니다.');
        login_failed();
        return false;
    }
    // match 함수는 없으면 null을 반환, / /사이의 문자열을 찾는 정규표현식
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }

    if (!sanitizedEmail) {
        // Sanitize된 이메일 사용
        login_failed();
        return false;
    }
    if (!sanitizedPassword) {
        // Sanitize된 비밀번호 사용
        login_failed();
        return false;
    }

    // 정규식 표현으로 문자열 확인
    if (passwordValue.match(/(.)\1{2,}/)){
        alert("같은 문자가 3번 이상 반복되었습니다.")
        login_failed();
        return false;
    }
    if (passwordValue.match(/(\d{2,}).*\1/)){
        alert("숫자 그룹이 반복되었습니다.")
        login_failed();
        return false;
    }

    // 검사 마무리 단계 쿠키 저장, 최하단 submit 이전
    if(idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1); // 1일 저장
        alert("쿠키 값 :" + emailValue);
    }
    else{ // 아이디 체크 x
        setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
    }

    // 로그인 횟수 쿠키 생성 및 변경
    login_count();

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    session_set(); // 세션 생성
    localStorage.setItem('jwt_token', jwtToken);
    loginForm.submit();
};

document.getElementById("login_btn").addEventListener('click', check_input);