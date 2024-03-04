var vm = Vue.createApp({
  name: "App",
  data() {
    return { num: 0 };
  },
  computed: {
    // 복잡한 구조의 *전처리*를 하여 머스태시로 바인딩 해야하는 부분을 미리 작성할 때 사용한다. 계산된 속성이라 칭하며 computed: { 함수(){}, 함수2(){}, 함수3(){} } 구성으로 작성한다.
    sum() {
      console.log("## num : " + this.num);
      var n = parseInt(this.num);
      if (Number.isNaN(n)) return 0;
      // NaN값이 나오면 if문의 return을 만나서 그다음에 만나는 return을 무효화 함

      return (n * (n + 1)) / 2;
      // 위의 if문을 거치지 않을경우 만나는 sum함수의 반환값(return)이다
    },
  },
}).mount("#app");