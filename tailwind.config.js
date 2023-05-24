/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3777FF",
        secondary: "#1C3C80",
        dark: "#1C1B1B",
        neutral: "#496080",
        lightgray: "#C3CFE0",
        link: "#556DFF",
        authDark: "#0E1E40",
        opaque: "#D7E4FF",
        rowColor: "#6379A8",
        customInputBorder: "#87ADFF",
        borderCard: "#DDE3F0",
      },
    },
  },
  plugins: [],
};
