<template>
  <div className="mt-5">
    <!-- setup의 함수가 반환한 member에 점표기법으로 접근하여 머스태시로 렌더링하여 화면 구성 -->
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }} </p>
    <!-- 각 멤버의 sns종류별 값이 설정 되어있으면 보여주고
    없으면 안보여주도록 a태그에 v-if문 구성 -->
    <a v-if="member.insta && member.insta !== ''" class="fa fa-instagram m-1" :href="member.insta"></a>
    <a v-if="member.facebook && member.facebook !== ''" class="fa fa-facebook m-1" :href="member.facebook"></a>
    <a v-if="member.youtube && member.youtube !== ''" class="fa fa-youtube m-1" :href="member.youtube"></a>
    <br /><br />

    <!-- 라우터링크를 통해 상위 페이지인 members로 이동  -->
    <router-link to="/members">멤버 목록으로</router-link>
  </div>
</template>

<!-- <script>
import { useRoute } from 'vue-router';
import members from '@/members.json';

export default {
  name: "MemberInfo",
  setup() {
    const currentRoute = useRoute();
    // useRoute함수 콜링하여 반환되는 값(프록시 오브젝트)을  currentRoute 할당
    const id = parseInt(currentRoute.params.id, 10);
    // 반환된 프록시 오브젝트에서 .params.id까지 접근하여 추출한 값을 정수화하여 id할당
    const member = members.find((m) => m.id === id);
    // json에서 연동된 members배열에서 해당 id를 찾아 member에 할당
    return { member };
    // setup의 함수가 member를 뱉어줌
  }
};
</script> -->

<script setup>
  import { useRoute } from 'vue-router';
  import members from '@/members.json';

  const currentRoute = useRoute();
  // useRoute함수 콜링하여 반환되는 값(프록시 오브젝트)을  currentRoute 할당
  const id = parseInt(currentRoute.params.id, 10);
  // 반환된 프록시 오브젝트에서 .params.id까지 접근하여 추출한 값을 정수화하여 id할당
  const member = members.find((m) => m.id === id);
</script>