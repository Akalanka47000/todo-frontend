module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#2462c3",
          hover: "#0059e6",
        },
      },
      width: {},
      minHeight: {},
      boxShadow: {
        ds1: '10px 4px 20px rgba(0, 0, 0, 0.25)',
        ds2: '0px 0px 20px rgba(155, 155, 155, 0.2)',
      },
    },
  },
  variants: {
    extend: {
      margin: ["group-hover"],
      width: ["group-hover"],
      padding: ["group-hover"],
    },
  },
  plugins: [],
}
