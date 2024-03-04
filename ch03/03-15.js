var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      contacts: [
        { no: 1011, name: "RM", tel: "010-3456-8299" },
        { no: 1012, name: "정국", tel: "010-3456-8298" },
        { no: 1013, name: "제이홉", tel: "010-3456-8297" },
        { no: 1014, name: "슈가", tel: "010-3456-8296" },
        { no: 1015, name: "진", tel: "010-3456-8295" },
        { no: 1016, name: "뷔", tel: "010-3456-8294" },
        { no: 1017, name: "지민", tel: "010-3456-8293" },
      ],
      addData: ['사과', '복숭아', '오렌지', '귤', '자몽']// 추가데이터
    };
  },
}).mount("#app");