<template>
  <div class="header">
    <h1 class="headerText">태평양 전쟁의 해전</h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <a style="cursor:pointer;" class="nav-link" :class="{ active: tab.id === currentTab }"
            @click="changeTab(tab.id)">{{ tab.label }}</a>
          <!-- 탭 클릭에 의해 해당탭의 값이 currentTab에 재할당됨 -->
        </li>
      </ul>
    </nav>
  </div>

  <div>
    <component :is="currentTab" />
    <!-- v-bind:is="currentTab" 탭선택값에 따라(currentTab값에 따라) 컴포넌트 변경 -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'; // 비동기컴포넌트 import
import pMinDelay from 'p-min-delay';
import Loading from './components/Loading.vue';

/* 비동기 콜링시 defineAsyncComponent() 사용,
콜링 통신요청에 의해 딜레이 적용됨,
예제에선 일부러 딜레이 2초 적용시킴 pMinDelay() */
const CoralSeaTab = defineAsyncComponent({
  loader: () => pMinDelay(import('./components/CoralSeaTab.vue'), 2000),
  loadingComponent: Loading, // 로딩되는 동안 보여줄 컴포넌트
});
const LeyteGulfTab = defineAsyncComponent({
  loader: () => pMinDelay(import('./components/LeyteGulfTab.vue'), 2000),
  loadingComponent: Loading,
});
const MidwayTab = defineAsyncComponent({
  loader: () => pMinDelay(import('./components/MidwayTab.vue'), 2000),
  loadingComponent: Loading,
});

export default {
  name: 'App',
  components: { CoralSeaTab, LeyteGulfTab, MidwayTab },
  data() {
    return {
      currentTab: 'CoralSeaTab',
      tabs: [
        { id: "CoralSeaTab", label: "산호해 해전" },
        { id: "MidwayTab", label: "미드웨이 해전" },
        { id: "LeyteGulfTab", label: "레이테만 해전" }
      ]
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>
<style>
.header {
  padding: 20px 0px 0px 20px;
}
.headerText {
  padding: 0px 20px 40px 20px;
}
.tab {
  padding: 30px
}
</style>
