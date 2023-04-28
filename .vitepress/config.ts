import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GPT",
  description: "Cours ChatGPT",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Introduction", link: "/introduction/" },
      { text: "Démo", link: "/demo/index" },
    ],

    sidebar: {
      "/introduction/": [
        {
          items: [
            { text: "Introduction", link: "/introduction/" },
            {
              text: "Utilisation",
              link: "/introduction/utilisation",
            },
            {
              text: "Limites",
              link: "/introduction/limites",
            },
            {
              text: "Astuces",
              link: "/introduction/astuces",
            },
            {
              text: "Exemples",
              link: "/introduction/exemples",
            },
          ],
        },
      ],
      "/demo/": [
        {
          items: [
            {
              text: "Démo",
              link: "/demo/",
            },
            {
              text: "Instructions",
              link: "/demo/instructions",
            },
            {
              text: "Boucle",
              link: "/demo/boucle",
            },
            {
              text: "Signalisation",
              link: "/demo/signalisation",
            },
            {
              text: "Memorisation",
              link: "/demo/memorisation",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/opmvpc/gpt" }],

    search: {
      provider: "local",
    },

    returnToTopLabel: "Retour en haut",
    footer: {
      copyright: "Copyright © 2023 Thibault Six",
    },
  },
});
