import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css'; // 공통css를 전역처리

// createApp(App).mount('#app')
// 아래처럼 바꿀 수 있다.
let app = createApp(App);
app.mount('#app');