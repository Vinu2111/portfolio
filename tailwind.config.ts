import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: {
          DEFAULT: "#00ff88",
          dark: "#00cc6a",
        },
        cyan: {
          highlight: "#00f0ff",
        },
        card: "#121212",
        "card-hover": "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-space-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
