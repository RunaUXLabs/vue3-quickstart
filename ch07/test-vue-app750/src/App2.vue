<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
      <!-- 3번) :idol="idol"은 v-bind:idol="idol"의미하며,
        단방향 연동을 책임지는 v-bind는 초기 렌더링 함수의 반환값
        idols를 연동했고, 이는 CheckboxItem2.vue의 props: ["idol"]이
        객체가 되어 읽히게끔 한다.  -->
      <!-- 작성순서는 1->2->3이지만, 렌더링 순서는 3->2->1인 점을
        이해하면 props를 통해 부모에서 자식으로 정보를 전달됨을 볼수있다.
        vue devtools에서 확인 가능! -->

    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem2.vue';
export default {
  name: "App2",
  components: { CheckboxItem },
  data() {
    return {
      // 보유 데이터
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "EXO", checked: false },
        { id: 4, name: "ITZY", checked: false },
      ]
    };
  }
};
</script>