import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2422",
        palm: "#24483E",
        agave: "#789B83",
        clay: "#B45F3D",
        saffron: "#D8A14B",
        sand: "#F4EEE4",
        pearl: "#FBF8F2",
        night: "#16201D"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(22, 32, 29, .14)",
        lift: "0 16px 36px rgba(30, 36, 34, .12)"
      }
    }
  },
  plugins: []
};

export default config;
