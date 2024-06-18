"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  this.result = x + y;
};
var add2 = obj.add;
console.log(add2 === obj.add); //true, 메모리 주소가 복사, 동일한 함수
add2(3, 4);
// obj객체의 함수 add를 호출한게 아님, 함수 내 this가 객체를 가르키는것이 아니므로
// this.result = x + y;는 전역변수 result가 되어 연산된 값 7이 할당됨.

console.log(obj); //{ result: 0 }
console.log(result); //7