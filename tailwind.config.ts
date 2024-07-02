import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        background: "#EDEDED",
        mirage: {
          "50": "#f0f7fe",
          "100": "#deecfb",
          "200": "#c4e0f9",
          "300": "#9cccf4",
          "400": "#6dafed",
          "500": "#4b90e6",
          "600": "#3674da",
          "700": "#2d60c8",
          "800": "#2a4fa3",
          "900": "#274481",
          "950": "#0f172a",
          DEFAULT: "#0f172a",
        },
        tangerine: {
          "50": "#fffbec",
          "100": "#fff6d4",
          "200": "#ffe8a8",
          "300": "#ffd670",
          "400": "#ffb937",
          "500": "#ffa210",
          "600": "#f98a07",
          "700": "#c76507",
          "800": "#9e4f0e",
          "900": "#7f420f",
          "950": "#452005",
          DEFAULT: "#F98A07",
        },
        "torea-bay": {
          "50": "#e8f5ff",
          "100": "#d6ecff",
          "200": "#b5daff",
          "300": "#88c0ff",
          "400": "#5a96ff",
          "500": "#346dff",
          "600": "#1240ff",
          "700": "#0834fa",
          "800": "#0a2fc9",
          "900": "#13329f",
          "950": "#0b1b5b",
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
};
