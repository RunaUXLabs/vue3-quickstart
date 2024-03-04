"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports["default"] = exports.add = void 0;
var base = 100;
var add = exports.add = function add(x) {
  return base + x;
};
var multiply = exports.multiply = function multiply(x) {
  return base * x;
};
var getBase = function getBase() {
  return base;
};
var _default = exports["default"] = getBase; // 이 모듈을 이용할 때 마다 매번 사용하는 함수라면 export default로 내보낸다