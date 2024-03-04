<template>
    <div class="card card-body">
        <h2>404 Not Found</h2>
        <!-- 연결되지 않은 라우트에 접근하면 무조건 404로 연결됨 -->
        <p>존재하지 않는 요청 경로 : {{ $route.fullPath }}</p>

        <!-- 404파일을 전략적으로 접근하자!
             본인의 포트폴리오에 저 3장밖에 못만들었다고 광고할 것이 아니라
             링크가 모두 연결되어있고, 제작하지 못한 페이지는 공통 404파일을 만들어서
             미제작된 페이지에서 공통 404가 출력되게 만들어주는것이 낫다.
             포트폴리오를 한사람이라도 더 보여주어야 취업시장에서 살아남으려면
             어떻게 해서는 본인의 포폴을 클릭하게끔 만들어야 한다.
             클릭까지도 접근이 안된다면 취업문이 더 닫히는 꼴이다. -->
    </div>
</template>

<script>
export default {
    name: "NotFound",
    created() {
        console.log(this.$route.params);
    }
};
</script>
