/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: "#1570EF",
          "normal-hover": "#0D57BE",
          gray: "##727272",
        },
        secondary: {
          black: "#151515",
          white: "#FFFFFF",
        },
      },

      fontSize: {
        "body-xs": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "body-sm": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "body-base": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "title-sm": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        "title-md": [
          "28px",
          {
            lineHeight: "36px",
          },
        ],
        "title-lg": [
          "36px",
          {
            lineHeight: "44px",
          },
        ],
        "display-xl": [
          "64px",
          {
            lineHeight: "72px",
          },
        ],
      },
    },
  },
  plugins: [],
};
