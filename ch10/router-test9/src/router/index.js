import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/VideoPlayer.vue';
import NotFound from '@/pages/NotFound.vue';

const membersIdGuard = (to, from) => {
  // members/:id 경로는 반드시 이전 경로가 
  // /members, /members:id 인 경우만 내비게이션 허용함
  if (from.name !== "members" && from.name !== "members/id") {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/members', name: 'members', component: Members, },
    {
      path: '/members/:id', name: 'members/id', component: MemberInfo,
      beforeEnter: membersIdGuard, props: true
      // vue-router와의 결합을 분리시키기 위하여 데이터의 키이름을 props라 지정하고 그의 값에 true라고 정해 놓으면 속성으로 전달하여 라우터정보를 활용할 수 있다.
    },
    // 컴포넌트가 객체형으로 들어오는 것처럼, props도 객체형으로 변경할 수 있다.
    // {
    //     path: '/members',
    //     // 멤버스의 레이아웃 구성
    //     components: {
    //         default: Members,
    //         left: MembersLeft,
    //         footer: MembersFooter,
    //     },
    //     props: { // 컴포넌트로 분리되어 라우팅 정보를 연결한 구조에
    //                // props의 세부항목을 true/false로 구분하면 명명된 뷰마다
    //              // 전달 여부를 결정 할 수 있다.
    //         default: true,
    //         left: true,
    //         footer: false,
    //      },
    // },
    {
      path: '/videos', name: 'videos', component: Videos,
      children: [
        { path: ':id', name: 'videos/id', component: VideoPlayer }
      ]
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
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