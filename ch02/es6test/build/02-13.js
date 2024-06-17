var obj = { result: 0 };
obj.add = function (x, y) {
  function inner() {
    // 함수 중첩구조
    this.result = x + y;
  }
  inner(); // 콜링
};
console.log(obj);
obj.add(3, 4); // 실행함, result는 obj꺼
console.log(obj); // obj확인
console.log(result);
// result는 중첩함수 콜링으로 인해 전역변수가 되어버림, 7
// 나는 result가 obj 소유이길 원했지, 전역을 원한게 아님!!