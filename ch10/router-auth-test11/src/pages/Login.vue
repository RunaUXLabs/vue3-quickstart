<template>
  <div>
    <h2>로그인</h2>
    사용자 : <input type="text" v-model="info.userid" /><br />
    암호 : <input type="password" v-model="info.password" /><br />
    <br />
    <button @click="login">로그인</button>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { loginProcess } from '@/utils/AuthUtil.js';

  export default {
    name: "Login",
    setup() {
      const router = useRouter();
      const currentRoute = useRoute();
      const fromname = currentRoute.query.fromname;
      // 로그인 화면으로 이동하기 전에 접근하려고 했던 경로(미로그인상태에서 접근하려던 위치)를 fromname에 할당
      console.log(fromname); // 초기값은 undefined
      /** 예시) 로그인을 하기전에 인증 전에 접근이 불가한 페이지 A로 클릭을 했다.
       *  로그인이 안되어 있으므로 router.beforeEach()에 의해 로그인 페이지로 이동됨.
       *  로그인을 성공하고 나면 접근하려던 A페이지의 정보를 successCallback에 넘겨서
       *  A페이지가 바로 뜰 수 있게 만들어 줌
       * */

      const info = reactive({ userid: "", password: "" });


      // 로그인 성공시
      const successCallback = () => {
        // 로그인은 성공을 하고 
        if (fromname) { router.push({ path: fromname }); }
        // fromname이 존재하면 path에 값으로 전달하여 라우터 이동
        // 로그인 전에 가려했던 곳으로 보내주므로, 사용성 개선에 한몫
        // UX상 무조건 메인으로 보내졌던 경험이라면? 다른 입장에 관련된 정보가 없거나 제거되어 메인으로 보내는 경우도 있다. ex)대박딜 마감
        else router.push({ name: 'home' });
        // fromname이 없으면 홈으로 보내라
        // 사용자, 관리자로 로그인 해도 홈으로 이동해서 UI가 출력됨
      };
      // 로그인 실패시
      const failCallback = () => {
        alert('로그인 실패');
      };

      const login = () => {
        loginProcess(info.userid, info.password, successCallback, failCallback);
      };

      return { info, login }; // setup()가 반환하는 값
    }
  };
</script>