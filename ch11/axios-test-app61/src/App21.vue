<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
  import axios from 'axios';

  const listUrl = "/api/todolist_long/gdhong";
  const todoUrlPrefix = "/api/todolist_long/gdhong/";

  //전체 목록을 조회한 후 한 건씩 순차적으로 순회하며 조회하기 + 예외처리 
  const requestAPI = async () => {
    let todoList;

    // 무조건 성공조건으로 구문을 async ~ await으로 돌리고 리팩토링할 때 에러처리를 추가하는데 try ~ catch문을 사용하여 쉽게 구성가능 
    // try {
    //   원래 돌리려던 구문
    // } catch (e) {
    //   에러처리용 실행문
    // } 
    try {
      let response = await axios.get(listUrl);
      todoList = response.data;
      console.log("# TodoList : ", todoList);
      for (const value of todoList) {
        response = await axios.get(`${todoUrlPrefix}${value.id}`);
        console.log(response.data);
        console.log(index); // 에러캐치
      }
    } catch (e) {
      // 에러객체의 케이스별로 메시지 출력
      if (e instanceof Error) console.log(e.message);
      else console.log(e);
    }

  };

  requestAPI();
</script>