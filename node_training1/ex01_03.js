// 콜백 함수(Callback function)
// 함수를 변수에 할당할 수 있다. -> 함수의 파라미터로 함수를 전달할 수 있다.
// 함수의 위쪽, 아래쪽으로 값이 전달될 수 있는데 -> 이 값이 함수일 수 있다.

// 더하기 함수
function calc(a, b) {
    return a + b;
}

let result1 = calc(1, 3);
console.log(`더하기 1: ${result1}`);

function calc2(obj) {
    let result1 = obj(10, 10);
    console.log(`calc2 함수 안에서 더하기 결과 : ${result1}`);
}

let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

calc2(add);

function calc3(obj, a, b) {
    return obj(a, b);
}

let result2 = calc3(subtract, 20, 10);
console.log(`calc3의 결과: ${result2}`);

function add2(a, b) {
    return a + b;
}

// 콜백함수
function add3(a, b, callback) {
    let result = a + b;
    callback(result);
}

add3(10, 10, (result) => {
    console.log(`더하기 결과 : ${result}`);
})