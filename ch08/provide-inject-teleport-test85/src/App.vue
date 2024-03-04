<template>
  <div>
    <h2>최신 인기곡</h2>
    <SongList :songs="songs" />
  </div>
</template>

<script>
import { computed } from 'vue';
// composition API의 recative, ref, computed 등을 적용하지않으면 반응성이 제거된다.
import SongList from './components/SongList.vue';

export default {
  name: "App",
  components: { SongList },
  data() {
    return {
      songs: [
        { id: 1, title: "Blueming", done: true },
        { id: 2, title: "Dynamite", done: true },
        { id: 3, title: "Lovesick Girls", done: false },
        { id: 4, title: "마리아(Maria)", done: false },
      ]
    };
  },
  provide() {
    return {
      icons: {
        checked: "far fa-check-circle",
        unchecked: "far fa-circle",
      },

      // provide()는 기본적으로 반응성을 제공하지 않음, composition API의 recative, ref, computed 등을 사용해야 반응성이 생김
      // 콘솔에서 체크여부를 변경시 doneCount가 변경됨.
      doneCount: computed(() => {
        return this.songs.filter((s) => s.done === true).length;
      })

      // 반응성 제거시, 콘솔에서 체크여부를 변경해도 doneCount가 변경되지 않는다.
      // doneCount: this.songs.filter((s) => s.done === true).length

      /* 
      주의) provide,inject는 읽기전용에만 적용할 것, 반응성 구현은 비추천. 데이터 변경추적이 쉽지않다.
      반응성이 필요하다면 pinia를 활용하고 DB도 연동하면 log추적을 할 수 있다.  */
    };
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
