import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://ananiahfox.github.io",
  base: "/",
  vite: {
    resolve: {
      alias: {
        "@components/*": ["src/components/*"],
        "@assets/*": ["src/assets/*"],
      },
    },
  },
  markdown: {
    // 应用于 .md 和 .mdx 文件
    remarkPlugins: [remarkToc],
  },
});
