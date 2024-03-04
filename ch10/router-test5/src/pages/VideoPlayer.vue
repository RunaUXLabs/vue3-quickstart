<template>
    <div class="modal">
        <div class="box">
            <div class="heading">
                <span class="title">:: {{ videoInfo.video.title }}</span>
                <span class="category"> ( {{ videoInfo.video.category }} ) </span>
                <span class="float-end badge bg-secondary pointer" @click="stopVideo">
                    X
                </span>
            </div>

            <!-- 유투브 삽입영역 -->
            <div class="player">
                <!-- 각영상의 고유값을 가져올 수 있도록 한다. -->
                <YoutubeVue3 ref="playerRef" :videoid="videoInfo.video.id" :autoplay="1" :controls="1" @ended="playNext" />
                <!-- 자동실행 true, 컨트롤바 true, ended이벤트 발생시 다음 리스트 플레이 함수 콜링 -->
            </div>

            <!-- 컨트롤러에 클릭이벤트 stopVideo(), playNext(), playPrev() 구성 -->
            <div>
                <div>
                    <i class="fa fa-backward ml-2 pointer" @click="playPrev"></i>
                    <i class="fa fa-stop ml-2 pointer" @click="stopVideo"></i>
                    <i class="fa fa-forward ml-2 pointer" @click="playNext"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { YoutubeVue3 } from 'youtube-vue3';
// 원작자가 구축한 모듈 가져오기, 스펠링, 단어의 순서 잘 체크하고 가져오기(install하기)

export default {
    name: "VideoPlayer",
    components: { YoutubeVue3 },
    // 모듈 컴포넌트로 사용선언
    setup() {
        const videos = inject('videos'); // App.vue에서 읽기전용으로 데이터 가져오기
        const playerRef = ref(null);
        const currentRoute = useRoute(); // 현재라우트
        const router = useRouter();

        let videoInfo =
            reactive({ video: videos.find((v) => v.id === currentRoute.params.id) }); // 비디오 데이터에서 객체로 들어온 정보가 있는지 검색
        // YoutubeVue3 컨트롤러 기능, stopVideo(), playNext(), playPrev()
        const stopVideo = () => { // 플레이 도중 정지버튼을 누르면 
            playerRef.value.player.stopVideo(); // 영상 정지해라 함수 콜링
            router.push('/videos'); // 리스트로 이동한다.
        };
        const playNext = () => {
            const index = videos.findIndex((v) => v.id === videoInfo.video.id);
            const nextVideo = videos[index + 1];
            if (nextVideo) {
                videoInfo.video = nextVideo;
                router.push('/videos/' + nextVideo.id);
            } else {
                videoInfo.video = videos[0];
                router.push('/videos/' + videos[0].id);
            }
        };
        const playPrev = () => {
            const index = videos.findIndex((v) => v.id === videoInfo.video.id);
            const prevVideo = videos[index - 1];
            if (prevVideo) {
                videoInfo.video = prevVideo;
                router.push('/videos/' + prevVideo.id);
            }
        };

        return { videoInfo, playerRef, playNext, stopVideo, playPrev };
    }
};
</script>
    
<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}
.box {
    background-color: white;
    margin: 80px auto;
    max-width: 500px;
    min-width: 100px;
    min-height: 350px;
    font: 13px "verdana";
    padding: 10px 10px 10px 10px;
}
.box div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
}
.box .heading {
    background: #33A17F;
    font-weight: 300;
    text-align: left;
    color: #fff;
    margin: 5px 0 5px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 500px;
}
.box .player {
    background: white;
}
.pointer {
    cursor: pointer;
}
</style>