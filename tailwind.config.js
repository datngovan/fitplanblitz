const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // This keeps the default colors while adding your custom ones
        ...require("tailwindcss/colors"),
        border: "hsl(var(--border))",
        themeColor: "linear-gradient(45deg, #00C9FF, #92FE9D);",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        liquid: {
          "0%": { transform: "translate(-50%, -50%) scale(0)" },
          "100%": { transform: "translate(-50%, -50%) scale(1)" },
        },
        liquidExpand: {
          "0%": { transform: "translate(-50%, -50%) scale(0)" },
          "100%": { transform: "translate(-50%, -50%) scale(1.2)" },
        },
        "highlight-muscle": {
          "0%": { fill: "white", opacity: "1" },
          "50%": { fill: "red", opacity: "0.5" },
          "100%": { fill: "white", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        liquid: "liquid 0.6s ease forwards",
        liquidExpand: "liquidExpand 0.6s ease forwards",
        "muscle-highlight": "highlight-muscle 2s ease-in-out infinite",
        "muscle-normal": "none",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #00C9FF, #92FE9D);",
        "gradient-hover": "linear-gradient(90deg, #00C9FF, #92FE9D)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
