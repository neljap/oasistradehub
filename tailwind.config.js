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
        "infinite-scroll": {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(calc(-50% - 20px))"}
        }
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        "infinite-scroll-img": "infinite-scroll 5s linear infinite"
      },
      backgroundImage: {
        statbg: "url('assets/istockman.jpg')",
        herobgone: "url('assets/uuundulat.svg')",
        herobgtwo: "url('assets/aset-homepage-4.png')",
        trustbg: "url('assets/clas-bg.png')",
        trustaset: "url('assets/trust-asset.png')"
      },
      colors: {
        primary: "#0052FF",
        second: "#0052FF",
        prione: "#0052FF",
        pritwo: "#0052FF",
        priour: "#0052FF"
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
