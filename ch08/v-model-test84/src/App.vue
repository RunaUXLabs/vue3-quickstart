<template>
  <div>
    <label>아무기능 안되는 껍데기 input</label>
    <InputName />

    <label>:name="searchName" @update:name="changeSearchName"사용</label>
    <InputName :name="searchName" @update:name="changeSearchName" />
    <!-- 부모에 있는 데이터를 자식에게 전달하는 방법으로 양방향 바인딩 v-model 사용가능
      자식컴포넌트에 @update:수신하는props명="값을 재할당하는 함수명" 또는
      v-model:수신하는props명="재할당되는속성명"을 적는다.
      v-model의 한글처리문제가 있어 이벤트수신처리를 했던(참고p.70)부분도 덤으로 해결가능 -->

    <label>v-model:name="searchName"사용</label>
    <InputName v-model:name="searchName" />
    <InputName v-model:name="searchName" v-model:email="email" />
    <!-- 여러개 v-model 설정가능하나, 기능 구현이 안되면 경고가 뜨고 구현된 기능만 반영된다. -->

    <h3>검색어 : {{ searchName }}</h3>
    <p>자식쪽에서 데이터 보내고, 부모쪽에서 수신됨<br>
      기본값 searchName: "John"은 최초로딩시 양방향 바인딩 됨
    </p>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';

export default {
  name: "App",
  components: { InputName },
  data() {
    return { searchName: "John" };
  },
  methods: {
    changeSearchName(name) {
      console.log(name);
      this.searchName = name;
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
div input {
  width: 50%;
  margin: 0 0 20px 0;
}
</style>