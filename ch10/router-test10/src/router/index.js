import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router';

/** 지연로딩을 사용하려면 import()함수형을 사용해야하고, 이 익명함수를 변수에 할당하고
 *  아래 컴포넌트에서 해당 변수를 콜링하면 비동기 처리가 되면서 지연로딩이 발생된다.
 *  웹팩의 청크 스플릿팅을 통해 청크 이름을 분리해 놓으면 빌드할 때 같은 이름끼리 묶여
 *  js가 세부적으로 분리되는것을 볼 수 있다.
 *  import()안에 주석처럼 보는 청크네임 주석까는거 아님!!! 주의 할 것!
 */
const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue');
const About = () => import(/* webpackChunkName: "home" */ '@/pages/About.vue');
const Members = () => import(/* webpackChunkName: "members" */'@/pages/Members.vue');
const MemberInfo = () => import(/* webpackChunkName: "members" */'@/pages/MemberInfo.vue');
const Videos = () => import(/* webpackChunkName: "videos" */'@/pages/Videos.vue');
const VideoPlayer = () => import(/* webpackChunkName: "videos" */'@/pages/VideoPlayer.vue');
const NotFound = () => import(/* webpackChunkName: "home" */ '@/pages/NotFound.vue');

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
            beforeEnter: membersIdGuard
        },
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