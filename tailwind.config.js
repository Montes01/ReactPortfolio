/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        biggest: { max: "1200px" },
        big: { max: "1000px" },
        medium: { max: "800px" },
        small: { max: "600px" },
        smaller: { max: "500px" },
        tiny: { max: "400px" },
        smallest : {max: "305px"}
      },
      colors: {
        bg: "#141D28",
        primary: {
          light: "#EAE4DD",
          dark: "#161b22",
        },
        secondary: {
          light: "#161B22",
          dark: "#EAE4DD",
        },
        javascript: "#F0DB4F",
        html: "#F16529",
        css: "#2A4AE4",
        typescript: "#2F76C4",
        tailwind: "#02ACE1",
        linkedin: "#0073B2",
        gmail: "#AA4335",
        sql: "#BF2729",
        csharp: "#9E2BB5",
        azure: "#4D8DF9",
        astro: {
          orange: "#F5590A",
          white: "#FAFDFD",
          black: "#060B1A",
        },
        contrast: {
          dark: "#2E2466",
          light: "#3545FF",
        },
        neon: "#09F",
      },
      maxWidth: {
        limit: "1200px",
        "text-tiny": "15ch",
        "text-short": "30ch",
        "text-medium": "40ch",
        "text-long": "50ch",
        "text-longer": "60ch",
      },
      boxShadow: {
        short: "0 0 10px var(--tw-shadow-color)",
        basic: "0 0 20px var(--tw-shadow-color)",
        big: "0 0 30px var(--tw-shadow-color)",
        giant: "0 0 40px var(--tw-shadow-color)"
      },
    },
  },

  plugins: [],
}