/*
• 최상위 객체 : document 라고 한다.
• getElementById : document에서 특정 id를 가져온다.
• addEventListener로 이벤트를 등록한다.
• click 은 마우스 이벤트의 한 종류
• search_message는 함수이다.
• alert은 메시지 출력!
*/
document.getElementById("search_button_msg").addEventListener('click', search_message);
/*
document.getElementById("search_button_msg").addEventListener('click', function search_message(){
    let msg="검색 확인 중"
    alert(msg)
}());
//자바스크립트는 코드를 읽자마자 실행하기 때문에 함수()면 바로 실행되어서 함수 실행값이 이벤트 핸들러에 저장됨.
//이벤트가 정상적으로 등록되지 않음. 이벤트 리스너는 두번째 인자를 참조하기 때문에 ()실행이 아니라 함수이름: 참조할 주소를 적어야 함.
//다만 직접 해본 결과 인자에서 함수를 선언하면 문제 없이 작동함. 대신 이 경우에도 선언 끝에 ()를 붙이면 함수실행으로 간주함->함수 객체로 받아들이지 못함 */

/*
const search_message = () => alert("검색 확인 중"); 오류 발생! 화살표 함수는 호이스팅되더라도 실제로 접근할 수 없음!!!
호이스팅: 변수나 함수들의 '선언'이 최상단으로 올라가는 것(그래서 선언 전 변수를 출력하면 undefined 출력)
function을 통한 함수 선언은 호이스팅되어 최상단으로 올라가기 때문에 실제로 함수 선언 전에 함수를 호출하더라도 문제없이 작동함
하지만 let,const와 같은 변수나 화살표함수(이 경우에도 let/const로 선언)는 호이스팅되더라도 TDZ로 인해 사용할 수 없어서 오류가 남!
따라서 let,const와 같은 변수나 화살표함수들은 호출 전에 선언되어야 함!
*/

function search_message(){
alert("검색을 수행합니다!");
}

function search_message(){
    let msg="검색 확인 중"
    alert(msg)
}
/*
함수 중복이 되면 마지막 함수가 실행됨
이유는 함수가 여러개 중복이 되면 마지막 함수로 덮어씌어지면서
함수 오버라이딩(재정의)이 되기 때문.

추가로) search_message() 함수가 중복해서 정의되었기 때문에 맨 위에 있는 함수의 코드는
아무도 참조하고 있지 않아서 '가비지 컬렉션' 상태가 되버림
*/

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
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

    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`; 
    // 새 창에서 구글 검색을 수행
    // 주소 url에 들어가는 문자는 변환이 필요하다. 서버에서 올바르게 해석 X
    // 그래서 encodeURIComponent UTF-8 인코딩 처리
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
}