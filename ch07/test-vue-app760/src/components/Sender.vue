<template>
  <div class="box">
    <h2>Sender</h2>
    <hr />
    <button @click="sendMessage">이벤트 발신</button>
  </div>
</template>

<script>

export default {
  name: "Sender",
  methods: {
    sendMessage() {
      // this.emitter.emit("message", `${Date.now()}에 발신된 메시지`); // 밀초리로 표현됨
      // 중앙관리소 emitter에 메시지를 보낸다

      let timeStyle = {
        dateStyle: 'short',
        timeStyle: 'medium'
      };
      let now = new Date();

      this.emitter.emit("message",
        `${new Intl.DateTimeFormat('kr', timeStyle).format(now)}에 발신된 메시지`
      ); // 인터내셔널 구문으로 시간정보 한국화
    }
  }
};
</script>

<style scoped>
.box {
  border: solid 1px gray;
  padding: 5px;
  box-sizing: border-box;
}
</style>