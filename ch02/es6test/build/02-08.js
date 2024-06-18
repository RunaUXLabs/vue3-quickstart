"use strict";

function addContact1(_ref) {
  var name = _ref.name,
    phone = _ref.phone,
    _ref$email = _ref.email,
    email = _ref$email === void 0 ? "이메일없음" : _ref$email,
    _ref$age = _ref.age,
    age = _ref$age === void 0 ? 0 : _ref$age;
  // 함수설정시 파라미터에 객체를 넣을 수 있고, 기본값 매개변수 설정옵션처럼 해당 객체에 값이 설정되어있으면 기본값으로 인식한다
  console.log(name, phone, email, age);
}
addContact1({
  name: "이몽룡",
  phone: "010-3434-8989"
});
// 인자가 객체로 들어왔다. 해당객체의 키이름과 파라미터가 매칭이 되어 구조분해 할당이 일어나고, 기본값 설정된 것이 있으면 덮어쓰기 된다. 

addContact1({
  phone: "010-3434-8989",
  name: "이몽룡"
}); // 순서바꿨는데 어떻게 할당되지?
// 객체 통짜바리가 인자로 사용시, 각 키의 순서는 상관없다(객체엔 순서가 없음)
// 구조분해 할당된 키이름이 짝맞춰 찾아가 분해된다.

function addContact2(contact) {
  if (!contact.email) contact.email = "이메일없음"; // 객체에 키 추가
  if (!contact.age) contact.age = 0; // 객체에 키 추가
  var name = contact.name,
    phone = contact.phone,
    email = contact.email,
    age = contact.age; // 구조분해할당 시도
  console.log(name, phone, email, age);
}
addContact2({
  name: "이몽룡",
  phone: "010-3434-8989"
});

// 평소에 기본매개변수 사용했던 방식
function addContact3(name, phone) {
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "이메일없음";
  var age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  console.log(name, phone, email, age);
}
addContact3("이몽룡", "010-3434-8989");