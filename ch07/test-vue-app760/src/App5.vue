<template>
  <div>
    <Sender />
    <hr />
    <Receiver />
  </div>
</template>

<script setup>
import Receiver from './components/Receiver.vue';
import Sender from './components/Sender.vue';
</script>

<script>
// import Receiver from './components/Receiver.vue';
// import Sender from './components/Sender.vue';
export default {
  name: "App5",
  // components: { Sender, Receiver }
};
</script>