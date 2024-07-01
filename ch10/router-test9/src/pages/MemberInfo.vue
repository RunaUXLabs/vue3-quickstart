<template>
  <div className="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }} </p>
    <a v-if="member.insta && member.insta !== ''" class="fa fa-instagram m-1" :href="member.insta"></a>
    <a v-if="member.facebook && member.facebook !== ''" class="fa fa-facebook m-1" :href="member.facebook"></a>
    <a v-if="member.youtube && member.youtube !== ''" class="fa fa-youtube m-1" :href="member.youtube"></a>
    <br /><br />
    <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
  </div>
</template>

<script>
  //import { useRoute } from 'vue-router'
  import members from '@/members.json';

  export default {
    name: "MemberInfo",
    props: ['id',],
    setup(props) {
      // 라우트객체가 있어야지만 사용할 수 있는 코드 주석(예외사항으로 해당프로젝트에서 라우트를 사용 안하게 된다면 route관련 요소들을 걷어내야함, 이걸 속성으로 처리하면 한줄이면 끝!)
      // const currentRoute = useRoute()
      // const id = parseInt(currentRoute.params.id, 10);
      // const member = members.find((m)=>m.id === id)

      // 라우터 의존적인 정보(동적파라미터, 쿼리문자열 정보 등)를 props로 대체하기
      const member = members.find((m) => m.id === parseInt(props.id, 10));

      return { member };
    }
  };
</script>
