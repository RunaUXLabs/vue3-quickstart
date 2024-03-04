const BASEURL = "https://contactsvc.bmaster.kro.kr";
var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "", contacts: [], isLoading: false };
  },
  methods: {
    // 각 키에서 손을 뗄 때마다 이벤트 발생
    search(e) {
      // 이함수가 실행되는 중간에 엔터를 눌렀다면?
      if (e.keyCode === 13) {
        if (this.name.length >= 2) {
          this.fetchContacts();
        } else {
          this.contacts = [];
        }
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