let contactData = {
  pageno: 1,
  pagesize: 4,
  totalcount: 100,
  contacts: [
    { no: 1011, name: "RM", tel: "010-3456-8299" },
    { no: 1012, name: "정국", tel: "010-3456-8298" },
    { no: 1013, name: "제이홉", tel: "010-3456-8297" },
    { no: 1014, name: "슈가", tel: "010-3456-8296" },
  ],
}; // 외부데이터 변수할당(추천)

var vm = Vue.createApp({
  name: "App",
  data() {
    return contactData;
    // return {
    //   pageno: 1,
    //   pagesize: 4,
    //   totalcount: 100,
    //   contacts: [
    //     { no: 1011, name: "RM", tel: "010-3456-8299" },
    //     { no: 1012, name: "정국", tel: "010-3456-8298" },
    //     { no: 1013, name: "제이홉", tel: "010-3456-8297" },
    //     { no: 1014, name: "슈가", tel: "010-3456-8296" },
    //   ],
    // };
    // 리턴에 데이터를 담은 객체를 호출, 외부데이터JSON을 파싱하여 변수에 할당하고 변수를 적는방식을 추천
  },
}).mount("#app");