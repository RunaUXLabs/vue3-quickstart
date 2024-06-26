import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

const app = createApp(App);
app.config.unwrapInjectedRef = true;
// 하위 컴포넌트에서 상위 컴포넌트의 초기데이터를 변경하지 않도록 설정, vue 3.3이상에서는 작성생략
window.vm = app.mount('#app');
