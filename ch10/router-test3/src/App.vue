<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<!-- <script>
import Header from '@/components/Header.vue';

export default {
  name: "App",
  components: { Header },
};
</script> -->
<script setup>
  import Header from '@/components/Header.vue';
</script>

<style>
  .container {
    text-align: center;
    margin-top: 10px;
  }
</style>