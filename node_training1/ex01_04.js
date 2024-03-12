// 비동기 (Async)

// 1. 더하기 함수에 대한 콜백 함수
function add1(a, b) {
    return a + b;
}

let result1 = add1(10, 10);
console.log(`더하기 결과 1 : ${result1}`)

let add2 = (a, b, callback) => {
    callback(a + b);
}

add2(10, 10, (result) => {
    console.log(`더하기 결과 2 : ${result}`);
})

// 시간차를 두고 실행해보기
setTimeout(() => {
    let result1 = add1(10, 10);
    console.log(`더하기 결과 1 : ${result1}`);
}, 1000);

let add3 = (a, b, callback) => {
    setTimeout(() => {
        callback(null, a + b);
    }, 500);
}

let divide3 = (a, b, callback) => {
    setTimeout(() => {
        if (b == 0) {
            console.error(`더하기 함수의 분모가 0입니다.`);
            callback(new Error());
        }
        callback(a / b);
    }, 1000);
}

// 나누기 실행 -> 더하기 실행 : 결과는 더하기 먼저 나오고 나누기가 출력됨
// 코드 실행 순서와 결과 실행 순서가 달라졌다.
let doCalc1 = () => {
    divide3(200, 10, (result) => {
        console.log(`doCalc1 함수 안에서 나누기 결과 : ${result}`);
    });

    add3(200, 100, (result) => {
        console.log(`doCalc1 함수 안에서 더하기 결과 : ${result}`);
    })
}
doCalc1();

// 나누기 코드 실행 후 더하기 코드를 실행 : 결과 (전제: add3, divide3 내가 고칠 수 없음)
let doCalc2 = () => {
    divide3(200, 10, (err, result) => {
        if (err) {
            console.log(`doCalc2 함수 안에서 나누기 에러: ${err}`)
            return;
        }
        console.log(`doCalc1 함수 안에서 나누기 결과 : ${result}`)

        add3(200, 100, (err, result2) => {
            if (err) {
                console.log(`doCalc2 함수 안에서 더하기 에러: ${err}`)
                return;
            }
            console.log(`doCalc1 함수 안에서 더하기 결과 : ${result2}`)
        });
    })
}
doCalc2();

// 프로미스(Promise)를 이용해서 함수를 감싸기
let addFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        add3(a, b, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

let divideFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        divide3(a, b, (err, result) => {

            if (err) {
                reject(err);
                return;
            }
            resolve(err, result);
        })
    })
}

// async ~ await 역할: 언제 결과값이 넘어오는지 모를 때 순서대로 오게 해줌 
// async ~ await을 사용하면 promise가 반환되는 것이 아니라 promise의 결과값을 반환
let doCalc3 = async () => {
    try {
        let output1 = await divideFunc(200, 0);
        console.log(`doCalc3의 나누기 결과: ${output1}`);
    
        let output2 = await addFunc(output1, 100);
        console.log(`doCalc3의 더하기 결과: ${output2}`);    
    } catch(err) {
        console.log(`doCalc3 실행 시 에러: ${err}`)
    }
}
doCalc3();