import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface RootRouteContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootRouteContext>()({
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
				<TanStackRouterDevtools initialIsOpen={false} position="bottom-left" />
			</Suspense>
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
		</>
	);
}
