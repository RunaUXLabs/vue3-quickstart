<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>전체 요청 경로 : {{ $route.fullPath }}</p>
    <!-- $route.프로퍼티를 추출하여 머스태시로 본문에 삽입가능,
      this.$route 라고 입력하면 안됨  -->
    <p>매칭된 라우트 : {{ $route.matched }}</p>
    <p>동적으로 전달된 파라미터 : {{ $route.params }}</p>
    <p>요청 URI 경로 : {{ $route.path }}</p>
    <p>요청된 쿼리문자열 : {{ $route.query }}</p>
    <p>다른경로에서 리디렉트된 경우 리디렉트 시킨 URI 경로 : {{ $route.redirectedFrom }}</p>
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
