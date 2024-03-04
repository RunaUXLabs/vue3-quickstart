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

  // const url = "http://localhost:8000/todolist/gdhong";
  // CORS 이슈발생

  const url = "/api/todolist/gdhong";
  // vite.config.js에서 프록시를 설정해 놓으면 /api로 시작하는 문자열을 찾아서 정규식으로 target경로를 바꾸어줌
  // http://localhost:8000/todolist/gdhong 최종 전달경로
  axios.get(url).then((response) => {
    console.log("# 응답객체 : ", response);
  });
};

requestAPI();
</script>
