var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      name1: "",
      name2: "",
    };
  },
  methods: {
    changeName(e) {
      this.name2 = e.target.value;
      // 이벤트 함수를 만들어서 해당 이벤트가 일어나는 요소에서 value를추출해서 this(부모객체)의 name2 키의 값으로 할당하게 만든다.
    },
  },
}).mount("#app");