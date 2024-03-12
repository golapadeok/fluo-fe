/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
		fontFamily: {},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				/** main-50과 같은 방식으로 사용 */
				main: {
					50: "#EEF2FF",
					100: "#E0E7FF",
					200: "#C7D2FE",
					300: "#A5B4FC",
					400: "#818CF8",
					500: "#6366F1",
					600: "#4F46E5",
					700: "#4338CA",
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
					red: "#FF3B30",
					yellow: "#FFCC00",
					green: "#34C759",
					blue: "#007AFF",
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
				"title-lg": ["48px", { fontWeight: "600", lineHeight: "72px" }],
				"title-md": ["36px", { fontWeight: "600", lineHeight: "52px" }],
				"title-sm": ["24px", { fontWeight: "600", lineHeight: "38px" }],
				"text-xl": ["20px", { fontWeight: "600", lineHeight: "32px" }],
				"text-lg": ["18px", { fontWeight: "500", lineHeight: "30px" }],
				"text-md": ["16px", { fontWeight: "400", lineHeight: "24px" }],
				"text-sm": ["14px", { fontWeight: "400", lineHeight: "20px" }],
				"text-xs": ["12px", { fontWeight: "400", lineHeight: "16px" }],
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};