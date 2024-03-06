import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

export const Route = createRootRoute({
	component: Root,
});

const TanStackRouterDevtools =
	process.env.NODE_ENV === "production"
		? () => null
		: lazy(() =>
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
		  );

function Root() {
	return (
		<>
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools initialIsOpen={false} />
			</Suspense>
		</>
	);
}
