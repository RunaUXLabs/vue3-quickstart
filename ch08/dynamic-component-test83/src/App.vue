<template>
  <div class="header">
    <h1 class="headerText">태평양 전쟁의 해전</h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <!-- 배열컨텐츠에 의해 탭버튼 세개 생성 -->
          <a style="cursor:pointer;" class="nav-link" :class="{ active: tab.id === currentTab }"
            @click="changeTab(tab.id)">{{ tab.label }}</a>
          <!-- 클릭시 id와 현재탭이 같으면 객체가 true로 변경되면서 키이름이 클래스로 추가됨,
              changeTab(tab.id) 이벤트가 실행되면서 해당 탭의 id가 this.currentTab에 재할당됨  -->
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <!-- is특성값에 의해 탭컨텐츠 출력되는 부분, 정적콘텐츠라면 <keep-alive include="컴포넌트이름">을 통해
      매번 실행되지 않게 만들어 메모리를 아낀다.  -->
    <keep-alive include="MidwayTab,CoralSeaTab">
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import CoralSeaTab from './components/CoralSeaTab.vue';
import LeyteGulfTab from './components/LeyteGulfTab.vue';
import MidwayTab from './components/MidwayTab.vue';

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
