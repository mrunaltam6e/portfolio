import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      screens: { tall: { raw: "(min-width: 1024px) and (min-height: 680px)" } },
      colors: {
        berry: "#5f0f40",
        crimson: "#9a031e",
        orange: "#fb8b24",
        rust: "#e36414",
        teal: "#0f4c5c",
        ink: "#2a1020",
        night: "#1a0613",
        blush: "#f6e8ee",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
