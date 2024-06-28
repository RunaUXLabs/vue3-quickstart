<template>
  <div class="card card-body">
    <h2>Members</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
    <!-- currentRoute는 Proxy(Object)이며 이 안의 정보를
       점표기법으로 접근하여 화면에 출력하고 있다. -->
    <p>전체 요청 경로 : {{ currentRoute.fullPath }}</p>
    <!-- $route.프로퍼티를 추출하여 머스태시로 본문에 삽입가능,
      this.$route 라고 입력하면 안됨  -->
    <p>매칭된 라우트 : {{ currentRoute.matched }}</p>
    <p>동적으로 전달된 파라미터 : {{ currentRoute.params }}</p>
    <p>요청 URI 경로 : {{ currentRoute.path }}</p>
    <p>요청된 쿼리문자열 : {{ currentRoute.query }}</p>
    <p>다른경로에서 리디렉트된 경우 리디렉트 시킨 URI 경로 : {{ $route.redirectedFrom }}</p>
  </div>
</template>

<!-- <script>
// 컴포지션API 형식으로 변경 1
import { useRoute } from 'vue-router';

export default {
  name: "Members",
  setup() {
    // 선언
    const currentRoute = useRoute();
    //콜링해서 변수할당 했으므로 currentRoute는 이미 리턴값을 보유하고 있음
    console.log(currentRoute);
    return { currentRoute };
    // setup()의 리턴값에 currentRoute을 쓰고 있음
  }
};
</script> -->

<script setup>
  // 컴포지션API 형식으로 변경 2
  import { useRoute } from 'vue-router';
  const currentRoute = useRoute();
  console.log(currentRoute);
</script>