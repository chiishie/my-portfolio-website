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
        primary: "#EC0089",
      },
      borderColor: {
        grayBorder: "rgba(255, 255, 255, 0.06)",
      },
      backgroundColor: {
        grayBg: "rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};
