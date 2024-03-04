"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  var _this = this;
  var inner = function inner() {
    _this.result = x + y;
  };
  inner();
};
obj.add(3, 4);
console.log(obj); // { result: 7 }