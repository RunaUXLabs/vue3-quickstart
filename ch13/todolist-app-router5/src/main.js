import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router/index.js';
import './main.css';
// 상태관리를 위한 pinia 가져오기
import { createPinia } from 'pinia';

const pinia = createPinia(); // 인스턴스 생성
const app = createApp(App);
app.use(pinia).use(router).mount('#app'); // 사용선언