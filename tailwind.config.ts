import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"},
          "50%": { transform: "translateY(-10px)" },
          },

        },
      },

      animation: {
        float: "float 3s ease-in-out infinite",
      },

      colors: {
        purple: {
          DEFAULT: "#6C3FC5",
          dark: "#4E2D95",
          light: "#8B5CF6",
        },

        pink: {
          DEFAULT: "#E040A0",
          light: "#F472B6",
        },

        teal: {
          DEFAULT: "#0ECFB4",
          dark: "#0AA898",
        },

        bg: {
          DEFAULT: "#0D0B1A",
          2: "#13102A",
          3: "#1A1535",
        },

        card: "#1E1A38",
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },

  plugins: [],
};

export default config;