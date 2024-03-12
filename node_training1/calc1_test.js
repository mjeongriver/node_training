// CommonJs 방식 (자바스크립트에서 표준으로 사용하지 않음)
// require로 불러온 객체는 모듈 파일의 exports 객체가 된다.
const calc = require('./calc1');

const result = calc.add(10, 10);
console.log(`더하기 결과: ${result}`); 

