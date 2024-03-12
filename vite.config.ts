import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
