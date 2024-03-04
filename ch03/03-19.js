var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      pageno: 1,
      pagesize: 4,
      totalcount: 100,
      contacts: [
        { no: 1011, name: "RM", tel: "010-3456-8299" },
        { no: 1012, name: "정국", tel: "010-3456-8298" },
        { no: 1013, name: "제이홉", tel: "010-3456-8297" },
        { no: 1014, name: "슈가", tel: "010-3456-8296" },
      ],
    };
  },
}).mount("#app");