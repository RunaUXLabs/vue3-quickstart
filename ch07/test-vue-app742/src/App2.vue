<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>

<script setup>
import CheckboxItem from './components/CheckboxItem2.vue';
</script>

<script>
// import CheckboxItem from './components/CheckboxItem2.vue'
export default {
  name: "App2",
  // components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "뉴진스", checked: false },
        { id: 4, name: "임영웅", checked: false },
      ]
    };
  }
};
</script>