<script>
let data = {
  contacts: [
    { no: 1011, name: "RM", tel: "010-3456-8299" },
    { no: 1012, name: "정국", tel: "010-3456-8298" },
    { no: 1013, name: "제이홉", tel: "010-3456-8297" },
    { no: 1014, name: "슈가", tel: "010-3456-8296" },
    { no: 1015, name: "진", tel: "010-3456-8295" },
    { no: 1016, name: "뷔", tel: "010-3456-8294" },
    { no: 1017, name: "지민", tel: "010-3456-8293" },
  ],
  addData: ['사과', '복숭아', '오렌지', '귤', '자몽']// 추가데이터
}
export default{
  name: "App",
  data() {
    return data
  },
}
</script>

<template>
  <table id="list">
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <!-- template태그는 투명한 묶음으로 생각하자, 반복사용 가능 -->
        <template v-for="(contact, index) in contacts" :key="contact.no">
          <!-- 반복구간 시작 -->
          <tr>
            <td>{{index+1}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
          </tr>
          <!-- 반복구간 끝 -->

          <!-- 데이터가 배열로 총 7개가 있다(0~6), 최초 렌더링 0~3까지 출력하고
          조건에 의한 구분선 삽입, v-if는 조건에 맞으면 렌더링이 됨,
          *반복구간 다음에 작성하면 된다.* -->
          <tr class="divider" v-if="index % 4 === 3">
            <td colspan="3"></td>
          </tr>
          <!-- 조건에 맞은 요소가 렌더링이 되고 나서, 나머지 반복요소(4~6) 연속됨 -->
        </template>
        <template v-for="(data, index) in addData" :key="'f00'+index">
          <tr>
            <td colspan="3">{{data}}</td>
          </tr>
          <tr class="divider" v-if="index % 2 === 1">
            <td colspan="3"></td>
          </tr>
        </template>

      </tbody>
    </table>
</template>

<style scoped>
  #list {
    width: 600px;
    border: 1px solid black;
    border-collapse: collapse;
  }

  #list td,
  #list th {
    border: 1px solid black;
    text-align: center;
  }

  #list>thead>tr {
    color: yellow;
    background-color: purple;
  }

  .divider {
    height: 2px;
    background-color: gray;
  }
</style>
