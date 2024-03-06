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
      { text: "Create Cronos", link: "/createcronos" },
    ],
    sidebar: [
      {
        text: "Create Cronos",
        items: [{ text: "Get Started", link: "/createcronos" }, { text: "API", link: "/createcronosAPI" },
        { text: "CLI", link: "/createcronosCLI" }],
        
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cronosjs-labs" }],
  },
});
