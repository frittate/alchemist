module.exports = {
  purge: {
    content: ["./src/**/*.vue"],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [/tippy/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
