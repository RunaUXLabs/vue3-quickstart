"use strict";

function addContact1(_ref) {
  var name = _ref.name,
    phone = _ref.phone,
    _ref$email = _ref.email,
    email = _ref$email === void 0 ? "이메일없음" : _ref$email,
    _ref$age = _ref.age,
    age = _ref$age === void 0 ? 0 : _ref$age;
  console.log(name, phone, email, age);
}
addContact1({
  name: "이몽룡",
  phone: "010-3434-8989"
});
function addContact2(contact) {
  if (!contact.email) contact.email = "이메일없음";
  if (!contact.age) contact.age = 0;
  var name = contact.name,
    phone = contact.phone,
    email = contact.email,
    age = contact.age;
  console.log(name, phone, email, age);
}
addContact2({
  name: "이몽룡",
  phone: "010-3434-8989"
});
function addContact3(name, phone) {
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "이메일없음";
  var age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  console.log(name, phone, email, age);
}
addContact3("이몽룡", "010-3434-8989");