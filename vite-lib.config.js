import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true, // 将组件编译为自定义元素
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "src/library/dist", // 自定义输出文件夹
    lib: {
      entry: "src/library/index.js", // 入口文件
      name: "YcElementSvelte", // 库的名称
      fileName: (format) => `index.${format}.js`, // 根据格式动态生成文件名
      formats: ["es"], // 输出格式
    },
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['echarts'],
    },
  },
});
