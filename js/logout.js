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
    return ;
}


function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function logout_count(){
    session_del();
    let count = getCookie("logout_cnt");
    if (!count){
        count = 1;
    }
    else{
        count = parseInt(count) + 1;
    }
    setCookie("logout_cnt", count, 1);
    location.href="../index.html";
}

document.getElementById("logout_btn").addEventListener('click', logout_count);