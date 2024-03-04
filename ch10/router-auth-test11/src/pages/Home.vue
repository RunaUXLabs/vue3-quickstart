<template>
    <div>
        <h2>Home</h2>
        <p>인증되지 않아도 접근 가능한 페이지</p>
        <!-- authenticated가 true라면 사용자 정보를 출력해라
            setup()이 반환하는 data값을 이용하여 UI구성 -->
        <div v-if="data.userInfo.authenticated">
            <p>사용자 : {{ data.userInfo.userid }}</p>
            <p>사용자의 역할 : [ {{ data.userInfo.roles.join(', ') }} ]</p>
            <!-- 전개구문으로 바꾸기 -->
            <p>사용자의 역할 : {{ [...data.userInfo.roles] }}</p>
            <button @click="logout">로그아웃</button>
        </div>
    </div>
</template>

<script>
import { getUserInfo, logoutProcess } from '@/utils/AuthUtil.js';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

export default {
    name: "Home",
    setup() {
        const router = useRouter();
        const data = reactive({ userInfo: getUserInfo() });
        console.log(data);
        const logout = () => {
            logoutProcess(() => {
                data.userInfo = {}; // 사용자 정보 빈객체로 재할당
                router.push({ name: 'home' }); // 홈으로 보내라
            });
        };
        return { data, logout };
    }
};
</script>