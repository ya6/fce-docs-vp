import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "./public",
  title: "FitCropEdit DOCS",
  description: "The photo editor for quick editing and cropping of images directly in the browser",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Tools",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
