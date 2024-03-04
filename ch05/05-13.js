var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      itemlist: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item8", "Item9"],
      currentIndex: 0,
    };
  },
}).mount("#app");