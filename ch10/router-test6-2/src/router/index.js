// // 동적인 라우터 구성하는 법!
//     1. 컴포넌트안에 객체를 구성하기
//     2. 프로그래밍 방식으로 구성하기 p.346
//         // 동적인라우터 구성시 추가내용
//         // import { defineAsyncComponent } from 'vue';
//         // 아래에 router.addRoute({패스, 네임, 컴포넌트})구성을
//         // 완료시킨다

import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import HomeLeft from '@/components/home/HomeLeft.vue';

// 멤버스 안에서 사용할 하위 컴포넌트들
import Members from '@/pages/Members.vue';
import MembersLeft from '@/components/members/MembersLeft.vue';
import MembersFooter from '@/components/members/MembersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // 컴포넌트에 변수만 할당하다가, 객체를 할당하여 그 하위 연동을 1개로 처리할 수 있다.
      // 루트의 레이아웃 구성
      components: {
        default: Home,
        left: HomeLeft,
      }
    },
    {
      path: '/members',
      // 멤버스의 레이아웃 구성
      components: {
        default: Members,
        left: MembersLeft,
        footer: MembersFooter,
      }
    },
  ]
});

//  인스턴스 객체로 분리된 router에 .addRoute({패스, 네임, 컴포넌트})구성으로 추가를 한다면 경로정보, 이름, 컴포넌트 경로 만 있으면 동적 라우터 구성 가능함.
export default router;