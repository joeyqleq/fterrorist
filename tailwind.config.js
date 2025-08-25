/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      colors: {
        border: "hsl(var(--border))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fall": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "scan-vertical": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor" },
          "50%": { boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgb(34 197 94 / 0.5)" },
          "50%": { borderColor: "rgb(34 197 94 / 1)" },
        },
        "gridPulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.6" },
        },
        "scan-slow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "scan-vertical-slow": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "spin-around": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fall": "fall 7s linear infinite",
        "scan": "scan 8s linear infinite",
        "scan-vertical": "scan-vertical 12s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "gridPulse": "gridPulse 4s ease-in-out infinite",
        "scan-slow": "scan-slow 16s linear infinite",
        "scan-vertical-slow": "scan-vertical-slow 20s linear infinite",
        "marquee": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 60s linear infinite",
        "shimmer-slide": "shimmer-slide 2s ease-in-out infinite alternate",
        "spin-around": "spin-around 2s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "draw": "draw 3s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}