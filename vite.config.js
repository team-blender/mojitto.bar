import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 커스텀 도메인(mojitto.bar) 루트에서 서비스된다. 하위 경로에 붙이려면 여기를 바꿔야 하는데,
  // 그러면 라이브 앱이 여는 https://mojitto.bar/#/privacy 가 깨진다.
  base: "/",
  build: {
    outDir: "dist",
    // APNG(mojitto2.png 239프레임 등)가 인라인되면 애니메이션이 깨질 수 있어 항상 파일로 내보낸다.
    assetsInlineLimit: 0,
  },
});
