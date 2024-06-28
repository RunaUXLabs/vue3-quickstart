import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/VideoPlayer.vue'; // VideoPlayer 가져오기

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },

        // /members, /members/:id(\\d+)'는 동적 라우트 
        { path: '/members', component: Members },
        { path: '/members/:id(\\d+)', component: MemberInfo },

        // /videos는 children: []을 가지고 있는 중첩 라우트
        {
            path: '/videos', component: Videos,
            // 중첩라우트는 한 화면에 상위, 하위가 다표시되기 때문에
            // path에 상위경로를 설정 해두어야 한다.
            children: [
                { path: ":id", component: VideoPlayer }
                // /videos/:id로 도출됨
            ]
            // 중첩라우트 표현시, children: []을 이용한다. 이부분은 routes: []과 구조가 같다.
            // 모달창에 상세정보를 출력시키는 UI를 구성할 수 있다.
        },
    ]
});

export default router;