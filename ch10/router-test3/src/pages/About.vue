<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
    <!-- $route.프로퍼티를 추출하여 머스태시로 본문에 삽입가능,
      this.$route 라고 입력하면 안됨  -->
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log(this.$route);
    // 컴포넌트 내에서 라우터에 접근할 때 this.$route 작성한다.
  }
};
</script>
