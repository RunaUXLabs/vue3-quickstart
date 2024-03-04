const BASEURL = "https://contactsvc.bmaster.kro.kr";
var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "", contacts: [], isLoading: false };
  },
  methods: {
    search(e) {
      console.log(e);
      // 5-11예제에서는 모든키에 반응하여 함수가 다회 콜링, .enter 수식어는 엔터를 쳤을때만 함수 콜링이 되므로 스크립트 과부하가 없다. 조건문으로 엔터를 판별하는 소스도 필요없다.
      if (this.name.length >= 2) {
        this.fetchContacts();
      } else {
        this.contacts = [];
      }
    },
    fetchContacts() {
      this.isLoading = true;
      axios.get(BASEURL + `/contacts_long/search/${this.name}`).then((response) => {
        this.isLoading = false;
        this.contacts = response.data;
      });
    },
  },
}).mount("#app");