var vm = Vue.createApp({
  name: "App",
  data() {
    return { values: { x: 0, y: 0 }, sum: 0 };
  },
  watch: {
    // 4-6예제에서 x,y를 따로 감시해서 구성되어있는 함수를 합친다고 아래처럼 구성을 해본것. 하지만 소스상에서는 문제가 없어서 에러는 안뜨지만 UI흐름이 막힘.
    // values(current) {
    //   var result = Number(current.x) + Number(current.y);
    // current.x 또는 y는 객체내부가 변경된 것이지, 객체의 메모리 주소가 변경된것이 아님, 초기값 0으로 인식이되어 계산할게 없어. 화면도 안바뀜. (메모리 주소 전달에 대한내용 => 자바스크립트책 p.306)
    //   if (isNaN(result)) this.sum = 0;
    //   else this.sum = result;
    // },

    values: {
      // 잘돌아가는 보완소스
      // 위의 values(){}소스는 문제 없기 때문에 실행문들을 그대로 가져오고, handler 익명함수 쓰고 그안에 넣어준다. 그후 deep: true라고 설정하면 values:{} 하위의 모든값을 감지하게된다
      handler: function (current) {
        var result = Number(current.x) + Number(current.y);
        if (isNaN(result)) this.sum = 0;
        else this.sum = result;
      },
      deep: true,
      // handler에 deep: true 조합은 하위 모두감시를 하므로 속도가 느려지는 단점이 있다. 대의를 따져서 소스의 중복(4-6예제의 개별감시)이 나은지 리팩토링한다며 합치는것이 나은지를 잘 따져볼 것!
      // 한국인은 서비스의 규모랑 상관없이 빠른것을 사랑한다.
    },
  },
}).mount("#app");