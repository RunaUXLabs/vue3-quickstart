var obj = { result: 0 };
obj.add = function (x, y) {
  function inner() {
    //선언식 함수사용
    this.result = x + y;
  }
  inner = inner.bind(this);
  // 필수추가! .bind(this)로 바인딩하여 inner에 재할당
  inner(); // 콜링
};
obj.add(3, 4); // 객체안 add함수 실행

console.log(obj); // { result: 7 }
console.log(result); // 에러가 나면 성공!! 왜? result는 obj꺼니까 쌩으로 result를 찍는것이 아니라 obj.result라 콜링해야한다