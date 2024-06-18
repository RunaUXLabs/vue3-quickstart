"use strict";

var p = new Promise(function (resolve, reject) {
  resolve("first!");
});
p.then(function (msg) {
  console.log(msg);
  // throw new Error("## 에러!!");
  // 납치! 무조건 에러 만들어서 내가 만든 메시지로 catch구문으로 던져!
  return "second";
}).then(function (msg) {
  console.log(msg);
  return "third";
}).then(function (msg) {
  console.log(msg);
})["catch"](function (error) {
  console.log("오류 발생 ==>  " + error);
});