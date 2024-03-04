// html5모드 사용시
// import { createRouter, createWebHistory } from 'vue-router';

// 해시모드 사용시
// import { createRouter, createWebHashHistory, isNavigationFailure } from 'vue-router'

// 원본
import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/VideoPlayer.vue';
// 마지막으로 구성해 놓는 NotFound
import NotFound from '@/pages/NotFound.vue';

const membersIdGuard = (to, from) => {
    // members/:id 경로는 반드시 이전 경로가 
    // /members, /members:id 인 경우만 내비게이션 허용함
    if (from.name !== "members" && from.name !== "members/id") {
        return false;
    }
};

const router = createRouter({
    // html5모드
    history: createWebHistory(),
    // 해시모드
    // history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/members', name: 'members', component: Members, },
        {
            path: '/members/:id', name: 'members/id', component: MemberInfo,
            beforeEnter: membersIdGuard
        },
        {
            path: '/videos', name: 'videos', component: Videos,
            children: [
                { path: ':id', name: 'videos/id', component: VideoPlayer }
            ]
        },
        { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
        // 라우트 구성에서도 맨 마지막에 배치한다. 위에서부터 이전까지 전부매칭하고도 없을경우에 NotFound가 연결되기 때문이다.
        // /:paths(.*)* // 정규식으로 패턴화 한 모든 라우트 매칭(선언된 라우트는 제외) 문자열임.
        // p.363참고하기
    ]
});

router.beforeEach((to) => {
    //to.query에 속성이 존재할 경우 제거된 경로로 재이동
    if (to.query && Object.keys(to.query).length > 0) {
        return { path: to.path, query: {}, params: to.params };
    }
});

router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.log("@@ 내비게이션 중단 : ", failure);
        return { name: "home" };
    }
});

export default router;