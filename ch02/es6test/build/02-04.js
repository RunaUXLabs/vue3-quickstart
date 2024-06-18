"use strict";

function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
var p1 = {
  name: "john",
  age: 20
};
({
  name: "susan",
  age: 20
}), _readOnlyError("p1");
// 02-03에서는 해당 객체의 개별키 값을 변경(const로 선언된 객체의 값을 바꾸는건 조물주인 나는 가능), 하지만 통짜바리로 변경하는 개념은 const에서 허용되지 않음

console.log(p1);