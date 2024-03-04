var vm = Vue.createApp({
  name: "App",
  data() {
    return { amt: 99999 };
  },
  computed: {
    amount: {
      get() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return this.amt.toString().replace(regexp, ",");
      },
      set(amount) {
        var amt = parseInt(amount.replace(/,/g, ""));
        this.amt = Number.isNaN(amt) ? 0 : amt;
      },
    },
  },
}).mount("#app");