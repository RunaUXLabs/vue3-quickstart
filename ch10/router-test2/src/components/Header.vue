<template>
	<nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
		<span class="navbar-brand">이날치(LeeNalChi)</span>
		<button class="navbar-toggler" type="button" @click="changeIsNavShow">
				<span class="navbar-toggler-icon"></span>
		</button>

		<!-- clss를 computed()를 통해 도출된 값 navClass로 바인딩 -->
		<div :class="navClass">
			<ul class="navbar-nav">
				<li class="nav-item">
						<!-- App.vue의 <router-view>에 띄울 링크에 대해 <router-link>태그로 구성을 한다. to="path" attribute를 작성해야하며 해당 path는 router에서 설정한 path대로 작성한다 -->
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

<!-- <script>
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
        }; // 클릭할 때 마다 현 값의 반대값을 할당하라는 함수, 토글기능

        return { state, changeIsNavShow, navClass };
    }
};
</script> -->

<script setup>
	import { reactive, computed } from 'vue';

	const state = reactive({
			isNavShow: false
	});
	const navClass = computed(() => state.isNavShow ?
		"collapse navbar-collapse show" : "collapse navbar-collapse");
	const changeIsNavShow = () => {
			state.isNavShow = !state.isNavShow;
	}; // 클릭할 때 마다 현 값의 반대값을 할당하라는 함수, 토글기능
</script>