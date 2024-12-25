import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import postcss from "@farmfe/js-plugin-postcss";

export default defineConfig({
  plugins: [postcss()],
  vitePlugins: [vue()],
});
