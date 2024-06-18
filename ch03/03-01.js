const model = {
  message: "이해",
  name: '루나'
};
// const model = { message: "Hello Vue3!" };
let vm = Vue.createApp({
  name: "App",
  data() {
    return model;
  },// 초기 렌더링함수가 전역으로 선언된 model객체를 퉤 뱉어내고 있음
}).mount("#app");
// 02-25.js에서 프록시 객체랑 동일시 하면 된다.
// Vue.createApp({옵션})로 생성된 인스탄스객체는 반응성을 제공한다. 여기서 반응성이란 뺑글뺑글, UI뒤에 소스 일하는 순환과정을 대입하면 된다.
