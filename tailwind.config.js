/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6E6E",
        bg: { DEFAULT: "#121212", menu: "#1e1e1e" },

        text: {
          DEFAULT: "rgba(229, 231, 235, 1)",
          muted: "rgba(229, 231, 235, 0.6)",
          faded: "rgba(229, 231, 235, 0.4)",
          disabled: "rgba(229, 231, 235, 0.2)",
        },
        border: "rgba(255,255,255,0.05)",
        danger: "#FF5C29",
        info: "#60A5FA",
        warning: "#EAB308",
        success: "#34D399",
        link: "#60A5FA",
      },
    },
  },
  plugins: [],
};
