<template>
  <div>
    <h2> App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </ul>
  </div>
</template>

<!-- <script setup>
import CheckboxItem from './components/CheckboxItem.vue';
</script> -->
<script>
// 분리한 컴포넌트를 <script setup>에 넣으면 export default {}에서 components: {} 선언 필요없음
// 컴포넌트 분리가 시작되면, 경로, 파일누락, 오타에 의해 오류가 가장많이 뜬다. 화면전체가 시뻘개짐. 에러메시지를 읽고 해결하려고 노력해보자
import CheckboxItem from './components/CheckboxItem.vue';
export default {
  name: "App",
  components: {
    CheckboxItem
  },
};
</script>


<style scoped></style>