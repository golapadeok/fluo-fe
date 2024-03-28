/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {},
    extend: {
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        /** main-50과 같은 방식으로 사용 */
        main: {
          50: "var(--main-50)",
          100: "var(--main-100)",
          200: "var(--main-200)",
          300: "var(--main-300)",
          400: "var(--main-400)",
          500: "var(--main-500)",
          600: "var(--main-600)",
          700: "var(--main-700)",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        bg: {
          primary: "#FFFFFF",
          secondary: "#F4F4FA",
        },
        sub: {
          white: "#FFFFFF",
          black: "#000000",
          red: "var(--sub-red)",
          yellow: "#FFCC00",
          green: "#34C759",
          blue: "#007AFF",
          orange: "#FF9500",
        },
        placeholder: "#71717a",
        error: {
          base: "var(--error)",
          strong: "var(--error-strong)",
          hover: "var(--error-strong-hover)",
          active: "var(--error-strong-active)",
          muted: "var(--error-muted)",
        },
      },
      /** 스타일 가이드의 effect 부분(1,2,3,4)
       * shadow-1,2,3,4와 같은식으로 사용
       */
      boxShadow: {
        1: "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
        2: "0 4px 8px 0px rgb(142, 141, 208, 0.16)",
        3: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
        4: "0 16px 24px 0px rgba(142, 141, 208, 0.12)",
      },
      /** 스타일 가이드의 폰트 부분
       * text-카테고리-사이즈 식으로 사용
       */
      fontSize: {
        "title-lg": ["3rem", { fontWeight: "600", lineHeight: 1.5 }],
        "title-md": ["2.25rem", { fontWeight: "600", lineHeight: 1.4 }],
        "title-sm": ["1.5rem", { fontWeight: "600", lineHeight: 1.6 }],
        "text-xl": ["1.25rem", { fontWeight: "600", lineHeight: 1.6 }],
        "text-lg": ["1.125rem", { fontWeight: "500", lineHeight: 1.6 }],
        "text-md": ["1rem", { fontWeight: "400", lineHeight: 1.5 }],
        "text-sm": ["0.875rem", { fontWeight: "400", lineHeight: 1.4 }],
        "text-xs": ["0.75rem", { fontWeight: "400", lineHeight: 1.3 }],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
