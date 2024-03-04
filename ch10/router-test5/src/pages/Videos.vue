<template>
  <div class="card card-body">
    <h2 class="m-3">영상 리스트</h2>
    <ul class="list-group">
      <li v-for="v in videos" :key="v.id" class="list-group-item text-left" :class="playingVideo(v.id)">
        <!-- currentRoute 정보에서 파라미터로 들어온 v.id가 존재하면 중복클래스로 list-group-item-secondary가 붙는다. -->
        {{ v.title }} ( {{ v.category }} )

        <!-- 중첩라우트에 의해 출력될 부분, router-link :to는 html에서 a와 같은 기능 -->
        <router-link :to="'/videos/' + v.id">
          <span class="float-end badge bg-secondary">듣기</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "Videos",
  setup() {
    const videos = inject('videos');
    // App.vue에서 provide를 통해 연결된 정보를 inject('대상')을 이용하여 videos변수에 할당함.
    const currentRoute = useRoute();
    const playingVideo = (id) => {
      return id === currentRoute.params.id ? "list-group-item-secondary" : "";
      // 삼항연산자를 이용하여 playingVideo()콜링시, currentRoute에서 id값을 찾아서 존재하는경우 플레이 중이라는 클래스명 지정 반환
    };
    return { playingVideo, videos }; //setup()의 반환값
  }

};
</script>