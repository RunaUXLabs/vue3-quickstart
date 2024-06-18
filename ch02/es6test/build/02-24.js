"use strict";

var obj = {
  name: "홍길동",
  age: 20
};
// new Proxy(타켓객체, 할일들) 
var proxy = new Proxy(obj, {
  //get(타겟객체, 접근할속성명){실행문}
  get: function get(target, key) {
    console.log("## get " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    return target[key];
  },
  //set(타겟객체, 접근할속성명, 속성값){실행문}
  set: function set(target, key, value) {
    console.log("## set " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    target[key] = value;
  }
});
console.log(proxy.name); //읽기 작업 get 호출
// proxy.name = "이몽룡";          //쓰기 작업 set 호출
// proxy.age = 30;                 //쓰기 작업 set 호출