import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/members', component: Members }, // 상위
        { path: '/members/:id(\\d+)', component: MemberInfo },// 하위
        // 멤버의 세부정보가 담겨있음, 기본형식의  path 다음에 :id(\\d+) 패턴(정규식으로 구성)이 추가되어있다.
        { path: '/videos', component: Videos },
    ]
});

export default router;