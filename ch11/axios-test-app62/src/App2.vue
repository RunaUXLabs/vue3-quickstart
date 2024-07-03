<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
  import axios from 'axios';

  const listUrl = "/api/todolist_long/gdhong";
  const todoUrlPrefix = "/api/todolist_long/gdhong/";

  //4건의 목록을 조회한 후 첫번째, 두번째 할일을 순차적으로 조회합니다.
  // const requestAPI = async () => {
  //     let todoList;

  //     let response = await axios.get(listUrl);
  //     todoList = response.data;
  //     console.log("# TodoList : ", todoList);

  //     response = await axios.get(todoUrlPrefix + todoList[0].id);
  //     console.log("## 첫번째 Todo : ", response.data);

  //     response = await axios.get(todoUrlPrefix + todoList[1].id);
  //     console.log("## 두번째 Todo : ", response.data);
  // };

  //전체 목록을 조회한 후 한 건씩 순차적으로 순회하며 조회하기
  const requestAPI = async () => {
    let todoList;

    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    for (const value of todoList) {
      response = await axios.get(`${todoUrlPrefix}${value.id}`);
      // /api/todolist_long/gdhong/id값
      console.log(response.data);
    }
  };

  requestAPI();
</script>