<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
        <span class="navbar-brand">이날치(LeeNalChi)</span>
        <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <!-- 5번예제에서 정적인 문자열을 쓰다가, v-bind:to="객체"
                        형식으로 변경시 데이터가 바뀌었을 때 자동으로 변경됨.
                        경우의 수를 내다보는 UI설계를 습관화 들이면
                        같은일을 반복하는 일이 현저히 줄어듦을 보여줌. -->
                    <router-link class="nav-link" :to="{ name: 'home' }">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'about' }">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'members' }">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'videos' }">영상</router-link>
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