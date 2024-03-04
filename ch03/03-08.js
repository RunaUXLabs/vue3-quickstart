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
    },
  },
}).mount("#app");