<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
  import axios from 'axios';

  const requestAPI = () => {
    // const url = "https://todosvc.bmaster.kro.kr/todolist/gdhong";
    // from origin 'http://localhost:5173' has been blocked by CORS policy

    // const url = "http://localhost:5174/todolist/gdhong"; // 안됨!
    // const url = "http://localhost:8000/todolist/gdhong";
    // CORS 이슈발생

    // json을 받아올 원래주소 https://todosvc.bmaster.kro.kr/todolist/gdhong
    const url = "/api/todolist/gdhong";
    // vite.config.js에서 프록시를 설정해 놓으면 /api로 시작하는 문자열을 찾아서 정규식으로 target경로를 바꾸어줌
    // 4. /api를 붙여서 url을 구성해 준다.

    // const url = "/todolist/gdhong";
    // '/api를 삭제하면 아예 안쓰면 되지않나?'라고 생각해서 아예 안쓰는 오류를 범하는데, 이렇게는 쓸 수 없다.

    // http://localhost:8000/todolist/gdhong 데이터를 로컬로 가져왔을 때 최종 전달경로
    // https://todosvc.bmaster.kro.kr/todolist/gdhong API주소 적었을 때 최종 전달경로

    // ***우리가 쓸 방법
    // vite.config.js에서 정규식을 이용하여 '/api/경로/경로' 이렇게 들어오는 주소를 바꿔치기하는 맥락을 이해해 보자.
    // 내가 외부 API를 가져올 때, 데이터 접근되는 디렉토리 앞에 /api를 붙여서 비동기로 연결하면 된다.
    // vite.config.js에 1~3까지 기재됨, 현재 페이지에 4번 써있음. 이 순서대로 진행한다.
    axios.get(url).then((response) => {
      console.log("# 응답객체 : ", response);
      console.log(response.data[2]);
    });
  };

  requestAPI();
</script>
