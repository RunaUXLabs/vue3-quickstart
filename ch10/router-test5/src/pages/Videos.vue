<template>
  <div class="card card-body">
    <h2 class="m-3">영상 리스트</h2>
    <ul class="list-group">
      <!-- inject()로 가져온 videos 정보에서 각 객체 v에 대해 반복문을 돌려 li를 구성한다 -->
      <li v-for="v in videos" :key="v.id" class="list-group-item text-left" :class="playingVideo(v.id)">
        <!-- playingVideo(v.id) 콜링을 통해 넘긴 v.id에 대해 반환갑을 가져와 중복클래스로 list-group-item-secondary를 바인딩한다. -->
        {{ v.title }} ( {{ v.category }} )

        <!-- 중첩라우트에 마운팅할 구간 -->
        <router-link :to="`/videos/${v.id}`">
        <!-- <router-link :to="'/videos/' + v.id"> -->
          <span class="float-end badge bg-secondary">듣기</span>
        </router-link>
      </li>
    </ul>

    <router-view />
    <!-- router index.js 에서 선언한 children: []이 마운트되는 곳. App.vue의 <router-view>와 동일한 구조를 가지고 있다. -->
  </div>
</template>

<!-- <script>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "Videos",
  setup() {
    const videos = inject('videos');
    console.log(videos);
    // App.vue에서 provide를 통해 연결된 정보를 inject('대상')을 이용하여 videos변수에 할당함.
    const currentRoute = useRoute();
    const playingVideo = (id) => {
      return id === currentRoute.params.id ? "list-group-item-secondary" : "";
      // 삼항연산자를 이용하여 playingVideo()콜링시, currentRoute에서 id값을 찾아서 존재하는경우 플레이 중이라는 클래스명 지정 반환
    };
    return { playingVideo, videos }; //setup()의 반환값
  }

};
</script> -->

<script setup>
  import { inject } from 'vue';
  import { useRoute } from 'vue-router';

  const videos = inject('videos');
  // App.vue에서 provide()로 제공한 정보를 inject()로 가져와 videos에 할당
  // console.log(videos);
  const currentRoute = useRoute(); // currentRoute객체를 사용하기 위해 useRoute() 선언
  const playingVideo = (id) => {
    return id === currentRoute.params.id ? "list-group-item-secondary" : "";
    // currentRoute객체의 params의 id정보와 인자로 들어온 id랑 비교하여 바인딩 할 클래스를 반환한다.
  };
</script>