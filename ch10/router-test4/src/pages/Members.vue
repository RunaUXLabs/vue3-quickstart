<template>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <!-- json을 통해 import된 멤버스 배열을 순회하며 각 컨텐츠 출력 -->
        <div v-for="m in members" :key="m.id" class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <!-- 멤버 세부정보로 이동할 수 있도록 router-link의 동적접근을 구성해 놓음
            그 안의 정보는 각 객체m에서 필요정보만 노출시킴  -->
          <router-link :to="'/members/' + m.id">
            <!-- http://localhost:5173/members/1 형식이 됨 -->
            <img class="img-thumbnail" :src="m.photo" :title="m.name" :alt="m.name" />
            <br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import members from '@/members.json';

export default {
  name: "Members",
  setup() {
    return { members };
  }
};
</script> -->
<script setup>
  import members from '@/members.json';
</script>

<style scoped>
.img-thumbnail {
  width: 90px;
  height: 110px;
}
</style>