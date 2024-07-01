import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/VideoPlayer.vue';

const membersIdGuard = (to, from) => {
  // members/:id 경로는 반드시 이전 경로가 
  // /members, /members:id 인 경우만 내비게이션 허용함, 다른 경로에서 바로 /members:id로 접근하면 화면이 안뜨면서, 전역 내비게이션 가드가 동작하여 접근불가 메시지가 뜨는 것을 확인할 수 있다.
  if (from.name !== "members" && from.name !== "members/id") {
    return false;
  }
};
// const 함수1 = (to, from) => {반환문}
// const 함수2 = (to, from) => {반환문}
// 라고 작성시, beforeEnter에서 함수들을 넣은 배열을 값으로 사용할 수 있다.

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/members', name: 'members', component: Members, },
    {
      path: '/members/:id', name: 'members/id', component: MemberInfo,
      // 라우트 수준에서 내비게이션 가드 실행
      // beforeEnter: (to, from)=>{반환문}
      // beforeEnter: [(to, from)=>{반환문}, (to, from)=>{반환문}]
      // beforeEnter: [함수1, 함수2 ...]
      beforeEnter: membersIdGuard
    },
    {
      path: '/videos', name: 'videos', component: Videos,
      children: [
        { path: ':id', name: 'videos/id', component: VideoPlayer }
      ]
    },
  ]
});

// 전역수준의 내비게이션 가드 구현
// 내비게이션 일어나기 전(눌러놓고 취소했을 때 처리 담당)

// // .beforeEach() 기본구조
// router.beforeEach((to, from)=> {
//     // to 이동하려는 경로, from 이동 전 현재경로
//     // 실행문을 적을 때 정규식들을 이용하여 원하는 정보와 비교작업 후 보낸다.
//     // 내비게이션이 취소되면 false를 리턴한다.
//     // 정상적인 기능을 하게 만든다면 true를 반환을 하거나
//     // return이 없는 형식으로 만든다.
//     return false
// })

router.beforeEach((to) => {
  if (to.query && Object.keys(to.query).length > 0) {
    //to.query에 속성이 존재할 경우(정상적인 기능을 하는 return true의 개념)
    return { path: to.path, query: {}, params: to.params };
    // 파라미터로 들어온 to에서 path에 접근하여
    // 이동해야할 path에 할당하여 보내라
    // 해당 path에 쿼리정보, 파라미터 정보가 더 있으면 보완해서 보내라. 
  }
});
// 내비게이션 일어난 후 실패처리를 담당 .afterEach()
router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log("@@ 내비게이션 중단 : ", failure);
    return { name: "home" };
  }
});

export default router;