import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/workspaces/_workspaceLayout/$workspaceId/",
)({
	component: WorkSpaceIdPageComponent,
});

function WorkSpaceIdPageComponent() {
	const { workspaceId } = Route.useParams();

	return <div>WorkspaceId {workspaceId}</div>;
}

export default WorkSpaceIdPageComponent;
