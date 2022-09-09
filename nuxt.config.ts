import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/~aellison" : "/",
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.simplecss.org/simple.min.css" },
      ],
      script: [
        {
          src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
        },
        {
          type: "text/javascript",
          id: "MathJax-script",
          async: "",
          src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",
        },
      ],
    },
  },
});
