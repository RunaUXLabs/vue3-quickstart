<template>
  <div class="box">
    <h2>Receiver</h2>
    <hr />
    <h2>전송된 텍스트 : {{ textMessage }}</h2>
    <!-- 머스태시는 현재 렌더링 된 textMessage만 읽어온다 -->
  </div>
</template>

<script>
export default {
  name: "Receiver",
  // 생명주기로 이벤트 관계 연결
  created() {
    this.emitter.on("message", this.receiveHandler);
  },
  data() {
    return {
      textMessage: ""
      // 초깃값 공백, string이라서 최신 1개값 만 할당
      // 업글) 배열로 발신된 이벤트를 받아서 누적시키면 채팅, 메일 등등 각 정보를 객체에 담아 초기 렌더링 함수에 넣어놓으면 화면의 실시간 동기화를 만들 수 있다.
    };
  },
  methods: {
    receiveHandler(msg) {
      this.textMessage = msg;
    }
  },
};
</script>

<style scoped>
.box {
  border: solid 1px gray;
  padding: 5px;
  box-sizing: border-box;
}
</style>