<template>
  <div className="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }} </p>
    <a v-if="member.insta && member.insta !== ''" class="fa fa-instagram m-1" :href="member.insta"></a>
    <a v-if="member.facebook && member.facebook !== ''" class="fa fa-facebook m-1" :href="member.facebook"></a>
    <a v-if="member.youtube && member.youtube !== ''" class="fa fa-youtube m-1" :href="member.youtube"></a>
    <br /><br />
    <!-- v-bind:to="객체"를 이용하여 바인딩 되어있음 -->
    <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
  </div>
</template>

<!-- <script>
  import { useRoute } from 'vue-router';
  import members from '@/members.json';

  export default {
    name: "MemberInfo",
    setup() {
      const currentRoute = useRoute();
      const id = parseInt(currentRoute.params.id, 10);
      const member = members.find((m) => m.id === id);
      return { member };
    }
  };
</script> -->
<script setup>
  import { useRoute } from 'vue-router';
  import members from '@/members.json';

  const currentRoute = useRoute();
  const id = parseInt(currentRoute.params.id, 10);
  const member = members.find((m) => m.id === id);
</script>
