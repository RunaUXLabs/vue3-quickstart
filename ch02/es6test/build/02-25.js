"use strict";

var arr = [10, 20, 30];
var proxy = new Proxy(arr, {
  get: function get(target, key, receiver) {
    console.log("## get " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    return target[key];
  },
  set: function set(target, key, value) {
    console.log("## set " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    target[key] = value;
  }
});
proxy[1] = 99;
//proxy[4] = 100;     //오류발생