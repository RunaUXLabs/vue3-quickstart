<template>
  <div class="container">
    <Header />
    <div class="card card-body border-0 pl-3 pr-3 pt-0">
      <div class="row">
        <!-- Header 컴포넌트를 통해 라우터 링크로 멤버스 페이지로 이동하면
        그 하위 컴포넌트 객체 구성(router/index.js)에 의하여
        default: Members, left: MembersLeft, footer: MembersFooter로
        레이아웃 구성을 지정해 놓을 수 있다.
        공통 메인인 App.vue의 레이아웃 구성시 최대치의 구성으로 준비하고,
        각 router/index.js에서 각 레이아웃에 할당여부만 설정해 놓으면 각 하위를
        다양한 레이아웃으로 설정 할 수 있다. -->
        <div class="col-md-3 border">
          <!-- 명명된 뷰 사용, router-view에 name을 붙여
            지정된 컨텐츠가 뜨도록 구성할 수 있다. -->
          <router-view name="left" />
        </div>
        <div class="col-md-9 border">
          <!-- 라우터의 default으로 설정된 컴포넌트가 뜬다 -->
          <router-view />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 border">
          <!-- 명명된 뷰 사용, router-view에 name을 붙여
            지정된 컨텐츠가 뜨도록 구성할 수 있다.  -->
          <router-view name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
    name: "App",
    components: { Header }
  };
</script>
<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  .container {
    text-align: center;
    margin-top: 10px;
  }
  .fa {
    padding: 5px;
    width: 30px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
  }
  .fa-facebook {
    background: #3B5998;
    color: white;
  }
  .fa-youtube {
    background: #bb0000;
    color: white;
  }
  .fa-instagram {
    background: #125688;
    color: white;
  }
</style>
