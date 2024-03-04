import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App1.vue'; // 옵션 API
// import App from './App2.vue'; // 컴포지션 API

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.mount('#app');