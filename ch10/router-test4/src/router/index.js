import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members }, // 상위
    { path: '/members/:id(\\d+)', component: MemberInfo },// 하위
    // 하위 구성할 때 디렉토리가 상위를 포함해야한다, 개별 path를 사용하지 말자
    // 멤버의 세부정보가 담겨있음, 기본형식의  path 다음에 :id(\\d+) 패턴(정규식으로 구성)이 추가되어있다. 정규식 패턴을 추가한 이유는 좀 더 대규모 데이터에 대응하기 위해 패턴화 규칙을 활용한것이다.
    { path: '/videos', component: Videos },
  ]
});

export default router;