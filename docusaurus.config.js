// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // onBrokenLinks: "throw",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Documentation Logo",
          src: "img/logo.png",
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true, // Index documentation pages
        indexDocSidebarParentCategories: 0, // Do not index parent categories in the sidebar
        includeParentCategoriesInPageTitle: false, // Do not include parent categories in the search result title
        indexBlog: false, // Disable blog indexing since the blog is disabled
        indexPages: false, // Do not index static pages
        language: "en", // Set the language to English
        style: undefined, // Use the default CSS
        maxSearchResults: 3, // Limit the number of search results displayed
        lunr: {
          tokenizerSeparator: /[\s\-]+/, // Custom tokenizer for splitting text
          b: 0.75, // Document length penalty
          k1: 1.2, // Saturation threshold for common words
          titleBoost: 5, // Boost for matches in the title
          contentBoost: 1, // Boost for matches in the content
          tagsBoost: 3, // Boost for matches in the tags
          parentCategoriesBoost: 2, // Boost for parent category matches
        },
      },
    ],
  ],
};

export default config;
