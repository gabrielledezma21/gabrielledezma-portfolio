import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0D10",
          surface: "#14171B",
          raised: "#1B1F24",
        },
        ink: {
          DEFAULT: "#E7E9EA",
          muted: "#8B939B",
          faint: "#565C63",
        },
        signal: {
          DEFAULT: "#E8B04B",
          dim: "#8A6A2F",
        },
        method: {
          get: "#5AA9FF",
          post: "#4FD68C",
          put: "#E8B04B",
          delete: "#F06A6A",
        },
        line: "#22262B",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #16191d 1px, transparent 1px), linear-gradient(to bottom, #16191d 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
