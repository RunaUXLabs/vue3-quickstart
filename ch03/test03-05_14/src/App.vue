<script>
let hobbyClubData = {
  pageno: 1,
  pagesize: 5,
  totalcount: 100,
  data: [
    { no: 1011, name: "득근득근 운동모임", fare: 80000 },
    { no: 1012, name: "아는체하는 다독다독", fare: 30000 },
    { no: 1013, name: "고막콘서트 음악감상동아리", fare: 50000 },
    { no: 1014, name: "쉐킷쉐킷 댄스동", fare: 70000 },
    { no: 1015, name: "사탐의 연장 히스토리", fare: 20000 },
  ],
  dataCategory: {
    C01: "레저",
    C02: "가전",
    C03: "음식",
    C04: "도서",
    C05: "주방",
  }
};
export default {
  name: "App",
  data() {
    return {
      name2: "",
      hobby: [],
      // 값이 여러개로 들어오는 경우 배열로 설정
      category: "관심사 선택해주세요",
      // 값이 한개로 들어오는 경우 문자열로 설정
      sex: "M",
      // 값이 한개로 들어오는 경우 문자열로 설정
      agree: "no",
      level: 5,
      dataCategory: hobbyClubData.dataCategory,
      hobbyClub: hobbyClubData.data,
      // hobbyClub: [
      //   { no: 1011, name: "득근득근 운동모임", fare: 80000 },
      //   { no: 1012, name: "아는체하는 다독다독", fare: 30000 },
      //   { no: 1013, name: "고막콘서트 음악감상동아리", fare: 50000 },
      //   { no: 1014, name: "쉐킷쉐킷 댄스동", fare: 70000 },
      //   { no: 1015, name: "사탐의 연장 히스토리", fare: 20000 },
      // ],
    };
  },
  methods: {
    changeName(e) {
      this.name2 = e.target.value;
      // 이벤트 함수를 만들어서 해당 이벤트가 일어나는 요소에서 value를추출해서 this(부모객체)의 name2 키의 값으로 할당하게 만든다.
    },
  },
}
</script>
<!-- 응용해보기
  v-model 양방향디렉티브에 대한 개념을 이해했다면

  1.data()에서 초기값 만들어놓기
  2.템플릿에 새로운 폼식구들 넣기
  3.맨 아래에 있는 div에 연동되는 머스태시 작성
 -->
<template>
  <div>
    <h2>이름</h2>
    <input id="a2" type="text" :value="name2" @input="changeName">
  </div>
  
  <div>
    <h2>성별</h2>
    <input type="radio" id="sexA" name="sex" value="M" v-model="sex" checked>
    <label for="sexA">남성</label><br>
    <input type="radio" id="sexB" name="sex" value="F" v-model="sex">
    <label for="sexB">여성</label>
  </div>
  <div>
    <h2>취미생활</h2>
    <input type="checkbox" id="hobbyA" value="A" v-model="hobby">
    <label for="hobbyA">운동</label><br>
    <input type="checkbox" id="hobbyB" value="B" v-model="hobby">
    <label for="hobbyB">독서</label><br>
    <input type="checkbox" id="hobbyC" value="C" v-model="hobby">
    <label for="hobbyC">음악</label><br>
    <input type="checkbox" id="hobbyD" value="D" v-model="hobby">
    <label for="hobbyD">댄스</label><br>
    <input type="checkbox" id="hobbyE" value="E" v-model="hobby">
    <label for="hobbyE">역사</label><br>
  </div>
  <table id="hobbyClub">
      <thead>
        <tr>
          <th>번호</th>
          <th>취미동아리 구분</th>
          <th>월 이용료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(club, index) in hobbyClub" :key="club.no">
          <!-- <td>{{club.no}}</td> -->
          <td>{{index+1}}</td>
          <td>{{club.name}}</td>
          <td>{{club.fare}}</td>
        </tr>
      </tbody>
    </table>
  <div>
    <h2>취미레벨</h2>
    <input type="text" v-model="level">
    <label>최대 10단계까지 있습니다. 취미 갯수에 따라 숫자를 입력해주세요</label>
  </div>
  <div>
    <h2>관심사 분류</h2>
    <select v-model="category">
      <option value="">----관심사를 선택하세요----</option>
      <option v-for="(val, key) in dataCategory" :value="key" :key="key">{{val}}</option>
      <!-- <option value="C01">레저</option>
      <option value="C02">가전</option>
      <option value="C03">음식</option>
      <option value="C04">도서</option>
      <option value="C05">주방</option> -->

    </select>
  </div>
  <div>
    위의내용에 동의 하십니까?
    <input type="checkbox" v-model="agree" true-value="yes" false-value="no">
  </div>
  <hr>
  <div>
    <p>
      이름: <b>{{name2}}</b> <br>
      선택한 성별 : <b>{{sex}}</b> <br>
      선택한 취미 : <b>{{hobby.join(',')}}</b> <br>
      취미레벨:
        <b>
          <span v-if="level >= 8">만렙</span>
          <span v-else-if="level >= 4">미드</span>
          <span v-else>쪼렙</span>
        </b><br>
      관심카테고리 : <b>{{category}}</b> <br>
      최종 동의 여부: <b>{{ agree }}</b> <br>
    </p>
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
p{
  text-align: left;
}
#hobbyClub{
  width: 100%;
  border: 1px solid #d7d7d7;
  border-collapse: collapse;
}
#hobbyClub td,
#hobbyClub th {
  border: 1px solid #d7d7d7;
  text-align: center;
}
#hobbyClub td:nth-child(2){
  text-align: left;
}
#hobbyClub>thead>tr {
  background: #ccc;
}
</style>
