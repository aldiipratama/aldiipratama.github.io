/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkCursor: {
          "50%": { borderRightColor: "transparent" },
        },
        typeAndDelete: {
          "0%,10%": { width: 0 },
          "45%, 55%": { width: "6.2em" },
          "90%, 100%": { width: 0 },
        },
      },
      animation: {
        "terminal-typing":
          "typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate",
      },
    },
  },
  plugins: [],
};
