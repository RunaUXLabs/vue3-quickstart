<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
        <span class="navbar-brand">이날치(LeeNalChi)</span>
        <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <!-- router-link to="path값" 표시됨, 정적인 문자열
                        유지보수때 경로가 변경이 되면(파일명, 디렉토리구성)
                        일일히 다 바꿔줘야 함. 단순반복 작업이 늘어난다. -->
                    <router-link class="nav-link" to="/">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/members">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/videos">영상</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            isNavShow: false
        });
        const navClass = computed(() => state.isNavShow
            ? "collapse navbar-collapse show" : "collapse navbar-collapse");
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        };

        return { state, changeIsNavShow, navClass };
    }
};
</script>