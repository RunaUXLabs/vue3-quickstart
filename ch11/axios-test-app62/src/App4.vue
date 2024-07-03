<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
  import axios from "axios";

  const requestAPI = async () => {
    const url = "/api/todolist_long/gdhong";
    let data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..." };
    // post방식
    const resp1 = await axios.post(url, data);
    // axios.post(url, data, config)
    // 두번째 인자 data는 HTTP Content Body로 전송할 내용
    console.log(resp1.data);
  };
  requestAPI();
</script>