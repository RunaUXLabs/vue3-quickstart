import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';
import router from './router';
// 5. 내보낸 라우터 가져오기

const app = createApp(App);
app.use(router); // 6. 가져온 라우터 사용한다고 선언하기
app.mount('#app');