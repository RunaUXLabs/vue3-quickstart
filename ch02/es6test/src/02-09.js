// 익명함수
const test1 = function (a, b) {
    return a + b;
};

// function 버려, () {}사이에 화살표 쿡!
const test2 = (a, b) => {
    return a + b;
};
// const test2 = (a, b) => {
//     console.log(`${a+b}`)
// };

// 그와중에 실행문이 1줄이면 {} 삭제
const test3 = (a, b) => a + b;
// const test3 = (a, b) => console.log(`${a+b}`)

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));