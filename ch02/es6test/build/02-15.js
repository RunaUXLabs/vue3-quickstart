"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  var _this = this;
  var inner = function inner() {
    // 화살표함수 사용
    _this.result = x + y;
  }; // 화살표함수를 사용하면 함수가 정의되는 스코프 범위의 this를 자신의 유효범위 this로 연결하므로 추가적인 바인딩 필요없음!
  // 일반적으로 걍 화살표함수에서는 this라고만 외웠던 내용(최상위 객체 window를 가르킴)을 반대로 활용하는 방법이다. 함수가 바라보는 최상위를 가르키기 때문에 obj에 연결되는 것이다.
  inner();
};
obj.add(3, 4);
console.log(obj); // { result: 7 }