// '스테이징' --커밋--> '로컬 저장소' --푸쉬--> '원격 저장소'
// 커밋은 스테이징 영역에 있는 파일을 커밋하기 때문에 커밋하기 위해서는 작업한 파일을 먼저 스테이징할 필요가 있다. 
// 따라서 우리가 커밋을 할때 "스테이징된 변경사항이 없습니다. 모든 변경사항을 스테이징하고 직접 커밋하시겠습니까?"라고 물어보는 것.
// 하지만 커밋했다고 해도 깃허브에 바로 저장되는 것이 아니라 아직 로컬 리포지터리에 존재.
// 여기서 한번 더 원격 리포지터리로 푸쉬해야 한다.


/*
자바스크립트 변수 타입: 원시 타입, 참조 타입
원시 타입: 값 자체 저장 / 값 복사 시 다른 변수에 영향을 받지 않음
참조 타입: 주소 저장 / 값 복사 시 다른 변수에 영향을 받음
*/

// 원시 타입: number, string, boolean, undefined, null, symbol
// symbol은 고유한 값 생성, 다른 symbol과 중복되지 않고 객체{}의 프로퍼티 키로 사용 -> 키 숨김
let number = 5;
let str = "문자열 입력";
let prime = 1.5123;
let is_ok = true; // 참
let is_not = false; // 거짓
let undefi; // 변수 이름만, 초기화 x
let empty = null; // 비어 있음
console.log(number, str, prime, is_ok, is_not, undefi, empty); // 여러 개 출력

// 참조 타입: (객체)object, array, function
const sym1 = Symbol('test'); // 심볼 함수로 값 생성
let symbolVar1 = sym1; // 변수 초기화
const airline = ["비행기", 320, "airbus", ["V1", true]];
// 다양한 데이터 배열
// 빈 객체 생성
const obj1 = {};
// 속성을 추가하여 객체 생성
const obj2 = {
name: "John Doe",
age: 30,
isMale: true,
};
console.log(symbolVar1.toString()); // 문자열 변환 출력 "Symbol(test)" -> Symbol(test) 출력
console.log(obj1, obj2, airline); // 여러 개 출력

const obj3={
    id: 20221018,
    age: 22,
    name:"전민성",
    feel: "scare"
}
// age, feel, id, name 순으로 키-값 출력: 크롬 브라우저 콘솔에서는 키를 알파벳 순으로 표현
console.log(obj3);
// 이렇게 하면 배열로 키가 제대로 된 순서로 출력됨: ["id", "age", "name", "feel"]
// 예외) object는 정수형 키를 오름차순으로 먼저 출력: 1, 2... a, b 순
console.log(Object.keys(obj3))


//유의깊게 봐야할 것: 반복문을 통해 Map과 Set 정보를 출력할 때, ""가 아니라 ``사용!
//변수도 {}앞에 &가 아니라 $사용! (템플릿 리터럴) / 마치 파이썬의 f스트링과 비슷하다 f"~{}"
const users = new Map(); // 사용자 정보 Map 객체 생성
users.set("user1", { // 사용자 정보 추가
id: 1, password: "password123",
});
users.set("user2", {
id: 2, password: "password456",
});
// Map 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
console.log(`비밀번호: ${user.password}`);
}

// Set 객체 활용 (예), 이름만 저장할 Set 객체 생성
const usernames = new Set();
usernames.add("user1"); // 사용자 이름 추가
usernames.add("user2");
// Set 객체의 모든 사용자 이름 반복 출력
for (const username of usernames) {
console.log(`사용자 이름: ${username}`);
}