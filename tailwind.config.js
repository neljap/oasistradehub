/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      backgroundImage: {
        statbg: "url('assets/man-laptop-dark-office-1-1066px.webp')",
        herobgone: "url('assets/uuundulat.svg')",
        herobgtwo: "url('assets/aset-homepage-4.png')",
        trustbg: "url('assets/clas-bg.png')",
        trustaset: "url('assets/trust-asset.png')"
      },
      colors: {
        primary: "#0052FF",
        second: "#0052FF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
