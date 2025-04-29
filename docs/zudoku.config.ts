import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/hotel-booking-sdk-ghp",
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "about", label: "About" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Getting Started",
        items: [
          "docs/installation",                      // installation.md
          "docs/authorization",                     // authorization.md
          "docs/about",                             // about.md
          {
            type: "link",                           // посилання на ваш OpenAPI-документ
            label: "OpenAPI Document",
            href: "https://github.com/WorldSpam/hotel-booking-api",
          },
          {
            type: "link",                           // зовнішня посилання на SDK
            label: "SDK Client",
            href: "https://github.com/WorldSpam/hotel-booking-sdk",
          },
        ],
      },
    ],
    api: [  ],
  },
  /*
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/example"],
      },
    ],
  },*/
  
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },

  
};

export default config;
