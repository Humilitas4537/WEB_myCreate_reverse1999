var close_time2 = 10; // 10초 설정

setTimeout("close_window()", 10000);
//원래 close_widnow()하면 코드가 읽히면서 바로 실행이 됨.
//하지만 이름만 써서 함수를 참조하게 하거나 
// ""안에 close_window()라 하면 정상 작동함!!! <-- chatgpt도 모르는 방식!!!

show_time(); // 실시간 시간 보여주기

function show_time(){
let divClock = document.getElementById('Time');
divClock.innerText = close_time2; // 10초 삽입 시작
close_time2--; // 1초씩 감소
setTimeout(show_time, 1000); //1초마다 갱신
}

function close_window() { // 함수 정의
window.close(); // 윈도우 닫기
}