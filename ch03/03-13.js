var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      regions: {
        A: "Asia",
        B: "America",
        C: "Europe",
        D: "Africa",
        E: "Oceania",
      },
    };
  },
}).mount("#app");