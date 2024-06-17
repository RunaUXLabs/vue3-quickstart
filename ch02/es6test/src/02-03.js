const p1 = { name: "john", age: 20 };
// p1.age = 22; // 객체의 점표기법 객체명.키
// 대괄호표기법
p1["age"] = 30;

// p1[age2] // 심볼접근과 구분하기
console.log(p1);
console.log(p1.age);