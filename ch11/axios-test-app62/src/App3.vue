<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
  import axios from "axios";

  const requestAPI = async () => {
    const url = "/api/todolist/gdhong";
    // get방식
    const response = await axios.get(url);
    // axios.get(url, config)
    // axios.get(url, {
    //   timeout: 2000,
    //   headers: {정보들}
    // })
    console.log("# 응답객체 : ", response);
    console.log("# 수신된 응답데이터 : ", response.data);
    console.log("# 요청시 사용된 config옵션 : ", response.config);
    console.log("# 백엔드 응답시 사용된 응답 HTTP헤더 : ", response.headers);
    console.log("# 통신에 사용된 XMLHttpRequest객체 : ", response.request);
    console.log("# 서버응답상태코드 : ", response.status);
    console.log("# 서버응답상태 문자열정보 : ", response.statusText);
  };

  requestAPI();
</script>