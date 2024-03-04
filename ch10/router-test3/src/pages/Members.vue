<template>
  <div class="card card-body">
    <h2>Members</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
    <!-- currentRoute는 Proxy(Object)이며 이 안의 정보를
       점표기법으로 접근하여 화면에 출력하고 있다. -->
  </div>
</template>

<script>
// 컴포지션API 가져오기
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
</script>
