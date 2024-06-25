<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" v-bind="idol" />
      <!-- 개별적으로 바인딩을 한다면 객체.키 형식으로 연결하겠지만, 반복문이 돈다면 해당 객체 통째로 연결해줘!시키면 하위컴포넌트에서 바인딩 될 키를 선정할 수 있다. -->
    </ul>
  </div>
</template>

<script setup>
// 9장에서 컴포지션API를 더 집중적으로 다룰거지만, vue3에서부터 반영되는 이것은 컴포넌트 선언, Props전달부분에서 간소화를 제공한다.
import CheckboxItem from './components/CheckboxItem.vue';
</script>

<script>
// import CheckboxItem from './components/CheckboxItem.vue';
export default {
  name: "App",
  // components: { CheckboxItem },
  // <script>에서는 컴포넌트 선언을 해주지 않으면 안뜬다
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: false },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "뉴진스", checked: false },
        { id: 4, name: "임영웅", checked: true },
      ]
    };
  }
};
</script>