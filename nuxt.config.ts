// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js",
        },
      ],
      title: "Health,Payments,Music,News & AI",
      meta: [
        {
          name: "description",
          content:
            "We provide all in one platform for music,payments,news,health and AI assist businesses in achieving growth, solving problems, enhancing productivity, and optimising efficiency",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
