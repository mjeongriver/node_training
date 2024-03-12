console.log(`안녕하세요!`);

// 변수 
var name1 = '홍길동1'; // 예전에 사용하던 변수 선언
let name2 = '홍길동2'; // 변수 선언
const name3 = '홍길동3'; //상수(변경되지 않는 값)

name2 = '홍길동4' // 변수 상자의 값 변경
console.log(`name2 변수 상자의 값 : ${name2}`);

// 객체(변수 상자를 모아놓은 것)
let person1 = {
    name: '홍길동5',
    age: 21,
}
console.log(`person1 객체의 이름: ${person1.name}`) // 객체 안의 변수를 접근할 때는 . 연산자를 사용한다.
console.log(`person1 객체의 이름: ${person1['name']}`) // 위와 동일한 코드, . 연산자 외에 대괄호와 그 안에 변수의 이름(문자열)으로 접근할 수도 있다.

let varName = 'age';
let personName = person1[varName];
console.log(`사람 이름: ${personName}`);

// 함수 정의
function run() {
    console.log('달려갑니다.');
}
run(); // 함수 실행

// 함수 상자의 모양 변경 -> 화살표 함수
// 함수 상자를 변수 상자에 할당 : 함수를 일급 객체로 다룬다.
let run2 = () => {
    console.log('달려갑니다.');
}
run2();

// 객체 안에 변수 상자를 모아놓는데, 변수 상자에 함수상자를 할당할 수 있다.
// 객체 안에 변수상자, 함수상자가 들어갈 수 있는데, 변수상자와 함수 상자가 구분되지 않는다. -> 속성(attribute, property)
let person2 = {
    name: '홍길동6',
    run: function () { // 익명 함수
        console.log(`${this.name}이 달려갑니다.`);
    },
    walk: () => { // 화살표 함수는 this를 자기 자신으로 이해하지 못한다.
        // console.log(`${this.name}이 걸어갑니다.`);
        console.log(`${person2.name}이 걸어갑니다.`);
    } 
}

person2.run();
person2.walk();
console.log(`${person2.run}`)

// undefined : 자료형(type, 타입)이 결정되지 않았습니다.
// 자료형(type)은 변수상자에 처음으로 값이 할당될 때 결정된다.
let name4; // 선언만 했을 때
let name5 = '홍길동4'
console.log(`name4 변수상자의 값 : ${name5}, ${typeof(name5)}`);
