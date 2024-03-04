"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
var p1 = {
  name: "john",
  age: 20
};
({
  name: "susan",
  age: 20
}), _readOnlyError("p1");
console.log(p1);