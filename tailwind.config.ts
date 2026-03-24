import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgb(233 170 41)",
        accentDark: "rgb(199 140 20)",
        ink: "#171717",
        slateWarm: "#494743",
        sand: "#f6f1e8",
        mist: "#efebe4",
        line: "#dfd7ca"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 23, 23, 0.08)",
        panel: "0 24px 60px rgba(23, 23, 23, 0.12)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top right, rgba(233,170,41,0.18), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,241,232,0.95))"
      }
    }
  },
  plugins: []
};

export default config;
