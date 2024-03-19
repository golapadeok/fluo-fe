import { createFileRoute } from "@tanstack/react-router";
import Schedule from "@/core/workspace/ui/schedule";

export const Route = createFileRoute(
	"/workspaces/_workspaceLayout/$workspaceId/",
)({
	component: WorkSpaceIdPageComponent,
});

function WorkSpaceIdPageComponent() {
	const { workspaceId } = Route.useParams();

	return (
		<div>
			<h1> WorkspaceId {workspaceId}</h1>
			<Schedule />
		</div>
	);
}

export default WorkSpaceIdPageComponent;
