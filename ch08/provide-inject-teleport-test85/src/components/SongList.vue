<template>
  <ul>
    <SongListItem v-for="s in songs" :key="s.id" :song="s" />
  </ul>
  <div>체크된 곡 수 : {{ doneCount }}</div>
</template>
  
<script>
import SongListItem from './SongListItem.vue';
export default {
  name: "SongList",
  components: { SongListItem },
  props: ["songs"],
  inject: ["doneCount"],
  // computed() API통해 provide()된 정보
  // this.songs.filter((s) => s.done === true).length를 doneCount값으로 주입
};
</script>
 