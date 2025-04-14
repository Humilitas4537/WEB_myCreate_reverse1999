document.getElementById("search_button_msg").addEventListener('click', search_message);

/*
• 최상위 객체 : document 라고 한다.
• getElementById : document에서 특정 id를 가져온다.
• addEventListener로 이벤트를 등록한다.
• click 은 마우스 이벤트의 한 종류
• search_message는 함수이다.
• alert은 메시지 출력!
*/

function search_message(){
alert("검색을 수행합니다!");
}

function search_message(){
    let msg="나중께 실행"
    alert(msg)
}

/*
함수 중복이 되면 마지막 함수가 실행됨
이유는 함수가 여러개 중복이 되면 마지막 함수로 덮어씌어지면서
함수 오버라이딩(재정의)이 되기 때문.
*/