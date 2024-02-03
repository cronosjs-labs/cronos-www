import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CRONOS",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Packages", link: "/createcronos" },
    ],
    sidebar: [
      {
        text: "Packages",
        items: [{ text: "Create Cronos", link: "/createcronos" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cronosjs-labs" }],
  },
});
