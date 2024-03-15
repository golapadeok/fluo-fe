import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspaces/_workspaceLayout")({
	component: WorkSpaceLayoutComponent,
});

function WorkSpaceLayoutComponent() {
	return (
		<main>
			<Outlet />
		</main>
	);
}

export default WorkSpaceLayoutComponent;
