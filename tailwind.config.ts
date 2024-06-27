import { text } from "stream/consumers"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: "#163f6b",
      secondary: "#ffa500",
      orange: "#f45a2b",
      darkOrange: "#c76f3c",
      background: "#fafafa",
      white: "#ffffff",
      text: "#2d2d2d",
      blueText: "#01406C",
      lightBlue: "#7191c8",

    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero-image': "url('/hero_bg.png')",
        'bg': "url('/bg.png')",
        'yellow-card': "url('/yellowcard.png')",
      },
      transitionDuration: {
        '300': '300ms', 
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config