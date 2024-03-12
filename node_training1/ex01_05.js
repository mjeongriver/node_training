// 콜백 함수
let add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 300);
}

let subtract = (a, b, callback) => {
    setTimeout(() => {
        callback(a - b);
    }, 200);
}

let multiply = (a, b, callback) => {
    setTimeout(() => {
        callback(a * b);
    }, 400);
}

let divide = (a, b, callback) => {
    setTimeout(() => {
        callback(a / b);
    }, 100)
}

// Promise를 이용해서 함수 감싸기
let addFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        add(a, b, (result) => {
            resolve(result);
        })
    })
}

let subtractFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        subtract(a, b, (result) => {
            resolve(result);
        })
    })
}

let multiplyFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        multiply(a, b, (result) => {
            resolve(result);
        })
    })
}

let divideFunc = (a, b) => {
    return new Promise((resolve, reject) => {
        divide(a, b, (result) => {
            resolve(result);
        })
    })
}

let doCalc1 = async () => {
    let result = 
    await divideFunc(
        await multiplyFunc(
            await subtractFunc(
                await addFunc(100, 200),
                20),
            3),
        5);
    console.log(`doCalc1의 결과: ${result}`);
}

doCalc1();