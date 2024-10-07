module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        abc: "#456",
        whitee: "#a5f3fc",
        logo: {
          700: "#1C59AE",
          800: "#114a9a",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
