<script setup>
import { ref, computed } from 'vue';

const selectedDate = ref(null);
const formattedDate = computed(() => {
  if (!selectedDate.value) return null;
  const year = selectedDate.value.getFullYear();
  const month = (selectedDate.value.getMonth() + 1).toString().padStart(2, '0');
  const day = selectedDate.value.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
});
</script>

<template>
  <main>
    <v-date-picker v-model="selectedDate" show-adjacent-months />
    <v-text-field v-model="formattedDate" label="Selected Date" readonly />
  </main>
</template>
