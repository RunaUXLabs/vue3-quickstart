"use strict";

function foodReport(name, age) {
  var _console;
  console.log("".concat(name, ", ").concat(age));
  for (var _len = arguments.length, favoriteFoods = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }
  console.log(favoriteFoods); // 나머지 짬처리 하여 배열로 반환
  (_console = console).log.apply(_console, favoriteFoods); // 나머지 짬처리 하여 스트링으로 반환
}
foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥");