<template>
  <div style="border:solid 1px gray; margin:5px; padding:5px;">
    <h2>Receiver</h2>
    <hr />
    <h2>전송된 텍스트 : {{ textMessage }}</h2>
    <!-- 머스태시는 현재 렌더링 된 textMessage만 읽어온다 -->
  </div>
</template>

<script>
export default {
  name: "Receiver",
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