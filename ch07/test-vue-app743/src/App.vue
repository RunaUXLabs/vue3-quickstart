<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :id="idol.id" :name="idol.name" :checked="idol.checked" />
    </ul>
  </div>
</template>


<script setup>
import CheckboxItem from './components/CheckboxItem.vue';
</script>

<script>
// import CheckboxItem from './components/CheckboxItem.vue';
export default {
  name: "App",
  // components: { CheckboxItem },
  data() {
    return {
      // 임의적으로 데이터 타입을 엉망진창으로 넣기
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: 1 },
        { id: 3, name: "뉴진스" },
        { id: 4, name: { s: "임영웅" } },
      ]
      // 원본
      // idols: [
      //   { id: 1, name: "BTS", checked: true },
      //   { id: 2, name: "Black Pink" },
      //   { id: 3, name: "뉴진스" },
      //   { id: 4, name: "임영웅" },
      // ]
    };
  }
};
</script>