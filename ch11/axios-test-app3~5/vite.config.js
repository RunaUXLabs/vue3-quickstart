import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 프록시 우회설정
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        /* https://github.com/stepanowon/todosvc에서 다운받아
        의존성 설치 npm install
        개발 모드로 실행 npm run start: dev
        운영 모드로 실행 npm run start */

        // target: "https://todosvc.bmaster.kro.kr",
        // 이미 설치된 버전 확인용
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // /api로 들어온 path값을 삭제, 정규식을 이용하여 오리진 값 변경
      },
    },
  },
});
