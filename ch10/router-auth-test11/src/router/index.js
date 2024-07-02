import { createRouter, createWebHistory } from 'vue-router';
import { isMatchToRoles } from '@/utils/AuthUtil.js';
// AuthUtil.js에서 isMatchToRoles함수만 받아도 인증처리 가능

import Home from '@/pages/Home.vue';
import Users from '@/pages/Users.vue';
import Admins from '@/pages/Admins.vue';
import Login from '@/pages/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/users', name: 'users', component: Users },
    { path: '/admins', name: 'admins', component: Admins },
  ]
});

// 권한 없는 유저만 막는용도(내비게이션 가드), 다른페이지로 모셔감
router.beforeEach((to) => {
  // AuthUtil.js에서 내보낸 isMatchToRoles()가 반환하는 값이 true/fslse로 인해 
  if (!isMatchToRoles(to.path)) {
    // 매칭되는정보가 없으면(false를 받음) 로그인페이지로 보내라
    return { name: 'login', query: { fromname: to.name } };
  }
});

export default router;