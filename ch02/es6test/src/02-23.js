let obj1 = { name: "박문수", age: 29 };
let obj2 = obj1;        // obj1, obj2는 동일한 객체를 참조(메모리주소 전달)
let obj3 = { ...obj1 };
// 객체 리터럴에서 키와 인자가 같은단어이면 줄여쓸 수 있었다.
// 이걸 전개구문에 엮어서 보면, ...배열 = 값1,값2,값3,값4 이런형식인데
// {값1,값2,값3,값4,값5,값6} 라는 형태이니 값1:값1, 값2:값2, 값3:값3,의 형태가 축약된 개념 
// **객체 내부의 값은 복사하지만 전개구문을 거쳤기 때문에 obj3, obj1은 다른 객체**
let obj4 = { ...obj1, email: "mspark@gmail.com" };  //새로운 속성 추가

obj2.age = 19; // 재할당 함
console.log(obj1);  //{ name:"박문수", age:19 }
console.log(obj2);  //{ name:"박문수", age:19 }   obj1과 동일!!

console.log(obj3);  //{ name:"박문수", age:29 }   age가 바뀌지 않음
console.log(obj1 == obj2); //true
console.log(obj1 == obj3); //false


let arr1 = [100, 200, 300];
let arr2 = ["hello", ...arr1, "world"];
console.log(arr1);      // [ 100, 200, 300 ]
console.log(arr2);      // [ "hello", 100, 200, 300, "world" ]

// 외부 데이터를 받아오면 구조분해 할당으로 뜯고, 필요한 부분만 전개구문으로 합쳐서 변수 할당해서 쓰면 이것이 바로 전처리!