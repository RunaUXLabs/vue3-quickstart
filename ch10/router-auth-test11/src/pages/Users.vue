<template>
  <div>
    <h2>Users</h2>
    <p>users 역할이 있어야만 접근할 수 있는 페이지</p>
    <!-- 애시당초 로그인을 안한 사용자는 접근조차 못하게 내비게이션 가드가 열일한다.
             그래서 이 페이지에는 별다른 내용이 없다. -->
    <p>사용자 : {{ userInfo.userid }}</p>
    <p>사용자의 역할 : [ {{ userInfo.roles.join(', ') }} ]</p>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script>
  import { getUserInfo, logoutProcess } from '@/utils/AuthUtil.js';
  import { useRouter } from 'vue-router';

  export default {
    name: "Users",
    setup() {
      const router = useRouter();
      const userInfo = getUserInfo();
      const logout = () => {
        logoutProcess(() => {
          router.push({ name: 'home' });
        });
      };
      return { userInfo, logout };
    }
  };
</script>
