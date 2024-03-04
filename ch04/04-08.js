const BASEURL = "https://contactsvc.bmaster.kro.kr";
var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "", contacts: [], isLoading: false };
  },
  watch: {
    name(current) {
      if (current.length >= 2) {
        this.fetchContacts();
        // methods에 선언된 fetchContacts키에 _.debounce(함수, 시간)가 값으로 지정되어있음. 변수에 함수가 할당된 익명함수로 이해를 하고 키 이름에 ()붙여 콜링한다.
      } else {
        this.contacts = []; // 입력값이 2자 미만이면 빈배열 뱉기
      }
    },
  },
  methods: {
    fetchContacts: _.debounce(function () {
      this.isLoading = true; // 검색중 보이기
      // 비동기처리 axios.get(url)
      axios.get(BASEURL + `/contacts_long/search/${this.name}`)
        .then((response) => {
          this.isLoading = false; // 검색중 감추기
          this.contacts = response.data;
          // 요청된 정보로 contacts업데이트 되면 렌더링 함수 data()전달해서 배열이 변경된다.
        });
    }, 300),
    // loadash 라이브러리의 _.debounce(함수, 시간)
    // 짧은 시간내에 너무 많은 API요청을 막는 함수
    // 0.3초 후에 함수가 일할 수 있도록 처리(타이핑마다 콜링이 되면 API호출이 과부화가 걸리기 때문)
  },
}).mount("#app");
// 소스읽는 순서(디버깅제외, 최초리딩)
// 1. *.vue에서 ui확인
// 2. 스크립트 부분에서 인스턴스 객체 1단확인
// 3. data() {}에서 초기 렌더링 확인(데이터흐름 확인)
// 4. methods에서 함수 확인(이벤트나 분류되어있는 기능 확인)
// 5. 각 함수가 어디에서 호출되는지 확인하고 전체적인 기능흐름을 확인
// 6. UI에 가서 인터렉션 및 호출 확인
