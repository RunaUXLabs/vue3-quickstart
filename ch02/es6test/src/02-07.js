let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr; // 배열은 키가 없으므로, 쓰고싶은 변수명으로 배열구성하여 구조분해하기
console.log(a1, a2, a3);

let p1 = { name: "홍길동", age: 20, gender: "M" };
let { name: n, age: a, gender } = p1;
// 기존 키 이름을 쓸거면 키이름을 변수로 작성,
// 변경할거면  기존키:할당변수로 변경하면 됨
console.log(n, a, gender);