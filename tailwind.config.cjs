/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "viaduc-blue": "#0052a1",
        "viaduc-pink": "#e6007e",
        "viaduc-indigo": "#7b549e",
        "viaduc-black": "#050000",
        "viaduc-white": "#fffffc",
      },
      animation: {
        "up-rotate": "up-rotate 0.6s ease-out both;",
        "down-rotate": "down-rotate 0.6s ease-out both",
        hide: "hide 0.6s ease-out forwards",
        gradient: "gradient 10s ease infinite",
      },
      keyframes: {
        "up-rotate": {
          "0%": {
            animationTimingFunction: "cubic-bezier(0.16, -0.88, 0.97, 0.53)",
            transform: "translateY(0px)",
          },
          "30%": {
            transformOrigin: "center",
            animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: "translateY(-30px)",
          },
          "100%": {
            transformOrigin: "center",
            transform: "translateY(-30px) rotate(45deg) scale(0.9)",
          },
        },
        "down-rotate": {
          "0%": {
            animationTimingFunction: "cubic-bezier(0.16, -0.88, 0.97, 0.53)",
            transform: "translateY(0px)",
          },
          "30%": {
            transformOrigin: "center",
            animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: "translateY(25px)",
          },
          "100%": {
            transformOrigin: "center",
            transform: "translateY(25px) rotate(-45deg) scale(0.9)",
          },
        },
        hide: {
          "29%": {
            opacity: 1,
          },
          "30%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
