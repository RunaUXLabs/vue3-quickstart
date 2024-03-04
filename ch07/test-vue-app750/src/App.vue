<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :id="idol.id" :name="idol.name" :checked="idol.checked" />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';
export default {
  name: "App",
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink" },
        { id: 3, name: "EXO" },
        { id: 4, name: "ITZY" },
      ]

      // p.191 옵션변경예제
      // idols: [
      //   { id: 1, name: "BTS", checked: true },
      //   { id: 2, name: "Black Pink", checked: 1 },
      //   { id: 3, name: "EXO" },
      //   { id: 4, name: { special: "ITZY" } },
      //   // 유효성검사 에러가 뜬다
      //   // CheckboxItem.vue에서 유효성 검사를 위해 props에 데이터 형태를 넣어놓은 기준으로, App.vue에서 전달한 데이터가 지정된 데이터 형태가 아닐경우에 유효성이 어긋났으므로 경고메시지를 뿌려준다.
      //   // name이 String을 받는다고 했는데, Object가 들어와서 경고메시지가 떴다.
      // ]

    };
  }
};
</script>