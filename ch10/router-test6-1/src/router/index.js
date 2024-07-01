import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/VideoPlayer.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/members', name: 'members', component: Members },
        { path: '/members/:id', name: 'members/id', component: MemberInfo },
        {
            // path: '/videos' 였으나, name:'videos'로 변경해 놓고 각 *.vue에서 바인딩 되는 부분을 객체로 바꾸어 놓으면, 상위 라우트가 파일명이 바뀌어서(path: '/songs'로 변경) 하위로 연결되는 모든 기능이 별다른 수정없이 제대로 작동된다. 처음엔 번거로울지 몰라도 이러한 형식으로 바인딩을 한다면 수정할 꺼리가 현저히 줄어든다.
            path: '/videos', name: 'videos', component: Videos,
            // path: '/songsong', name: 'videos', component: Videos,
            children: [
                { path: ':id', name: 'videos/id', component: VideoPlayer }
            ]
        },
    ]
});

export default router;