"use strict";

var d1 = new Date();
var name = "홍길동";
var r1 = "".concat(name, " \uB2D8\uC5D0\uAC8C ").concat(d1.toDateString(), "\uC5D0 \uC5F0\uB77D\uD588\uB2E4.");
// 날짜객체에서 메서드를 활용하여 원하는 부분을 뜯어낼 수 있지만, 영어권 기준으로 도출됨. 이터내셔널 구문을 이용하면 각 나라 문화권에 맞는 날짜를 도출할 수 있으니 활용해 볼 것!
console.log(r1);
var product = "갤럭시s20 중고폰";
var price = 199000;
var str = "".concat(product, "\uC758 \uAC00\uACA9\uC740\n\n\n        ").concat(price, "\uC6D0 \uC785\uB2C8\uB2E4.");
// 백팃 안에 엔터 칠 수 있지만, 들여쓰기되는 모든 공백을 인식한다.
// 단순 줄바꿈만 쓰고 싶으면 이스케이프 문자를 사용하여 연속되게 기술하고 줄바꿈이 적용되는것을 확인하면 된다.
console.log(str);