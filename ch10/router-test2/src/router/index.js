import { createRouter, createWebHistory } from 'vue-router';
// 1.라우터에서 쓸 기능을 불러온다
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
// 2.페이지구성(하위)할 컴포넌트들을 불러온다. 여기서 사용되는 변수명은 각 .vue에서 export default로 내보내고있는 이름들이다.

// 3. createRouter(옵션객체)로 인스턴스 생성, 옵션객체는 외부에서 작성하고 변수로 넣어도 되고, 인자로 직접넣어도 된다.
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/members', component: Members },
        { path: '/videos', component: Videos },
    ]
});

// 4. 인스턴스를 변수에 할당하여 내보낸다.
export default router;