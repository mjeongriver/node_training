// 클래스(붕어빵 틀), 붕어빵 : 객체(변수, 함수를 모아둔 것, 속성을 모아둔 것)
// 클래스 정의하기 
class Person {

    // 생성자 함수
    constructor(name, age) {
        this.name = name; // name 변수 상자가 자동 생성, 파라미터로 넘어온 name값을 할당
        this.age = age; 
    }

    // class 안에서는 function 생략
    walk() {
        console.log(`사람 ${this.name}이 걸어갑니다`);
    }
}

// 클래스에서 객체 만들기(붕어빵 틀에서 붕어빵 찍어내기)
let person1 = new Person('홍길동6', 26);
console.log(`person1의 이름: ${person1.name}`);

person1.walk();
person1['walk']();

let person2 = new Person('홍길동7', 27);
let personInfo2 = JSON.stringify(person2);
console.log(`person2: ${JSON.stringify(personInfo2)}`); // 객체를 JSON 문자열로 만들어주기
console.dir(person2); // 객체 정보를 그대로 출력

let person3 = JSON.parse(personInfo2);
console.log(`person3의 이름: ${person3.name}`);

// 상속
class Student extends Person {

}

let student1 = new Student('학생1', 21); // 생성자 함수 상속
console.log(`student1의 이름 : ${student1.name}`);

let student2 = new Student('학생2', 22);

Student.prototype.mobile = '010-2000-2000'; //Student 클래스에 공통 속성 추가

student1.mobile = '010-1000-1000'; // 이미 만들어진 객체라도 속성 추가 가능 
console.log(`student1의 전화 번호: ${student1.mobile}`); 

console.log(`student2의 전화 번호: ${student2.mobile}`); // mobile이라는 속성에 대한 값이 없다. 


// 배열 : 대괄호
let names = ['홍길동1', '홍길동2', '홍길동3'];
console.log(`names 안의 원소 갯수 : ${names.length}`);
console.log(`names 배열의 첫번째 값 : ${names[0]}`);

// 배열 원소들을 순회 출력
// 1. C-style for문 (잘 안 쓴다-성능 이슈)
for(let i=0; i<names.length; i++) {
    console.log(`names의 #${i} : ${names[i]}`);
}

// 2. forEach문 (자바스크립트에서 예전부터 사용하던 방식)
names.forEach((value, index) => { // 한번 실행하고 끝날 거라서 이름으로 구분할 필요가 없음(function에 이름 부여 X), 익명함수 사용
    console.log(`names의 #${index} : ${value}`)
})

// 3. for of (상당히 많이 사용함)
let index = 0; 
for (let name of names) {
    console.log(`names의 #${index} : ${name}`);
    index++;
}

// 4. for in
index = 0;
for (let name in names) {
    console.log(`names의 #${index} : ${name}`);
    index++;
}

for(let index2 in names) {
    console.log(`names의 #${index2} : ${names[index2]}`);
    index++;
}

let person4 = {
    name: '홍길동4',
    age: 24
}

for(let key in person4) { // key값을 반환
    console.log(`person4의 ${key} : ${person4[key]}`);
}

let keys = Object.keys(person4);
for(let i = 0; i<keys.length; i++) {
    console.log(`person4의 #${keys[i]} : ${person4[keys[i]]}`);
}
console.log(keys);