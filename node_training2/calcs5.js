export const message = '안녕!';

export function show(message) {
    console.log(`메시지 : ${message}`);
} 

const calc = {};

calc.add = (a, b) => {
    return a + b;
}

export { calc };