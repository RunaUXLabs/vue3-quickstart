<template>
  <div>
    <h2> App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckboxItem></CheckboxItem>
      <!-- 태그의 기본형태로도 쓸 수 있고, 단일 태그로 바꿀 수도 있다. -->
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </ul>
  </div>
</template>

<script setup>
// import CheckboxItem from './components/CheckboxItem.vue';
// 분리한 컴포넌트를 <script setup>에 넣으면 <script>에서 export default {}안에 components: {} 선언 필요없음

// <script setup>에선 export default를 쓸수 없다. App.vue는 모이는 곳. 데이터 렌더링을 안하면 됨!
// export default {
//   name: "App",
//   components: {
//     CheckboxItem
//   },
// };
</script>

<script>
// 컴포넌트 분리가 시작되면, 경로, 파일누락, 오타에 의해 오류가 가장많이 뜬다. 화면전체가 시뻘개짐. 에러메시지를 읽고 해결하려고 노력해보자
import CheckboxItem from './components/CheckboxItem.vue';
// <script>안에서 import를 해도 components: {} 선언 필요없게끔 업데이트 됨!
export default {
  name: "App",
  // components: {
  //   CheckboxItem
  // },
  // 컴포넌트 선언 생략가능해짐
};
</script>


<style scoped></style>