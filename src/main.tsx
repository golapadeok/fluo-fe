import React from "react";
import reactDom from "react-dom/client";
import "./index.css";
import App from "@/App";

async function enableMocking() {
	if (process.env.NODE_ENV !== "development") {
		return;
	}

	const { worker } = await import("@/mocks/browser");

	return worker.start();
}

enableMocking().then(() =>
	reactDom.createRoot(document.getElementById("root") as HTMLElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	),
);
