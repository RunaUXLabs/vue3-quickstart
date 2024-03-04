<template>
  <li>
    <i :class="song.done ? icons.checked : icons.unchecked"></i> {{ song.title }}
  </li>
</template>

<script>
export default {
  name: "SongListItem",
  inject: ["icons"], // 부모컴포넌트에서 provide된 값을 주입
  props: ["song"],
};
</script>