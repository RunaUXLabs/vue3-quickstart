<template>
  <div class="container">
    <Header />
    <router-view />
    <Loading v-if="isLoading" />
    <!-- computed()를 통해 전달받은 isLoading의 true/false
    값에 따라 로딩중 화면이 노출이 결정된다. -->
  </div>
</template>

<script setup>
  // pinia를 통해 상태관리를 하게 되면 변경되는 상태값에 대한 부분만 재렌더링하는 라이브러리이다 보니, 메인 App.vue에서는 계산된 속성인 computed()를 통해 데이터를 가지고 와야 반영이 된다
  import { computed } from 'vue';

  import Header from '@/components/Header.vue';
  // pinia에서 데이터 가져오기
  import { useTodoListStore } from '@/stores/todoList.js';
  import Loading from '@/components/Loading.vue';

  // 데이터 디스턱쳐링하기, 분해할당
  const todoListStore = useTodoListStore(); // 반환값이 객체임
  const isLoading = computed(() => todoListStore.isLoading);
  const fetchTodoList = todoListStore.fetchTodoList;

  fetchTodoList();
</script>
