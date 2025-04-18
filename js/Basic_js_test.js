var jb = 'hi'; // 변수 선언 후 주석 가능(한줄 주석)
var a = 1;
var b;
b = 5;
/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.

var 변수의 문제점:
{} 블록 안의 변수도 외부 접근 가능, 변수의 중복선언 빈번

let 변수: (추천)
{} 블록 안의 변수 외부 접근 X, 재할당 O, 재선언 X

const 변수: (상수: 변하지 않는 값)
재할당 및 재선언 X
*/

if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
    }
    //console.log(c); // Error
    console.log(c_1);

    let d = 5;
    d = "값 재할당"
    //let d = '값 재선언'; // Error
    console.log(d);

    const e = '상수1 접근';
    //e = 5;  // Error
    //const f // Error: const는 선언과 동시에 값을 초기화 해야함
    console.log(e);

    // 완전 중요! 아래 코드에서 재선언,재할당의 문제는 없다!
    // 이러한 이유로 for (const 임의의 변수 of 객체)같은 반복문에서 const가 여러번 재선언,재할당 되어도 문제가 없다!
    function exFunction1()
    {
        const A="const A 선언,할당"
        console.log(`블록 안, exFunction1: ${A}`)
        //const A = "새로운 const A 선언,할당" //오류
        //console.log(`블록 안: ${A}`)
    }
    
    function exFunction2()
    {
        const A="const A 선언,할당"
        console.log(`블록 안: exFunction2: ${A}`)
    }
    exFunction1()
    exFunction2()
    const A = "새로운 const A 선언,할당" //오류 없음
    console.log(`블록 밖: ${A}`) 