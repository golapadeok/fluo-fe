import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import svgr from "@svgr/rollup"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite(), svgr()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
