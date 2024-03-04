const BASEURL = "https://contactsvc.bmaster.kro.kr";
var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "", contacts: [], isLoading: false };
  },
  // 4-8의 감시기능 watch를 빼고 methods에서 새로운 함수 searchName() {}을 구성하여 리팩토링함. 분석과 디버깅이 쉬워진다. 모든 상황은 넓게 보고 상황에 맞게 판단하는 시야가 필요하다!
  methods: {
    searchName() {
      if (this.name.length >= 2) {
        this.fetchContacts();
      } else {
        this.contacts = [];
      }
    },
    fetchContacts: _.debounce(function () {
      this.isLoading = true;
      axios.get(BASEURL + `/contacts_long/search/${this.name}`)
        .then((response) => {
          this.isLoading = false;
          this.contacts = response.data;
        });
    }, 300),
  },
}).mount("#app");