import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

// 전역컴포넌트로 사용한 객체 가져오기
// import CheckboxItem from './components/CheckboxItem.vue';

createApp(App).mount('#app');
// createApp(App)
//   .component('CheckboxItem', CheckboxItem)
//   // 전역컴포넌트 설정법
//   // .component('내가쓸태그명', 컴포넌트객체)
//   .mount('#app');
