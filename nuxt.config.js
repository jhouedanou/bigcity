export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bigcity",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Charge un fichier SCSS global
    "@/assets/styles/global.scss",
    "@/assets/styles/bootstrap.scss",

    // Charge les fichiers SCSS par composant
    // "@/components/**/*.scss",
  ],

  modules: [
    // Module d'intégration SASS
    "@nuxtjs/style-resources",

    [
      "@nuxtjs/stylelint-module",
      {
        /* options */
      },
    ],
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  layout: "default",

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["bootstrap"],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/about",
        component: resolve(__dirname, "pages/about.vue"),
      });

      routes.push({
        path: "/apps",
        component: resolve(__dirname, "pages/apps.vue"),
      });

      routes.push({
        name: "apps-marketplace",
        path: "/apps/marketplace",
        component: resolve(__dirname, "pages/apps/marketplace.vue"),
      });

      routes.push({
        name: "apps-b2b",
        path: "/apps/b2b",
        component: resolve(__dirname, "pages/apps/b2b.vue"),
      });

      routes.push({
        path: "/pricing",
        component: resolve(__dirname, "pages/pricing.vue"),
      });
    },
  },
};
