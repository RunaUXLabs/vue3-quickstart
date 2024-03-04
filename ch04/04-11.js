const BASEURL = "https://contactsvc.bmaster.kro.kr";
var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "", contacts: [], isLoading: false };
  },
  created() {
    console.log("## created");
  },
  mounted() {
    this.name = "se";
    console.log("## mounted");
  },
  updated() {
    const lis = document.getElementsByTagName("li");
    console.log("## li tags count : " + lis.length);
  },
  watch: {
    name(current) {
      if (current.length >= 2) {
        this.fetchContacts();
      } else {
        this.contacts = [];
      }
    },
  },
  methods: {
    fetchContacts: _.debounce(function () {
      this.isLoading = true;
      axios.get(BASEURL + `/contacts_long/search/${this.name}`).then((response) => {
        this.isLoading = false;
        this.contacts = response.data;
      });
    }, 300),
  },
}).mount("#app");