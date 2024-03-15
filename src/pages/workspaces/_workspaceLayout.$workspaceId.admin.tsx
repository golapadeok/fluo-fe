import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/workspaces/_workspaceLayout/$workspaceId/admin",
)({
	component: WorkSpaceIdAdminPageComponents,
});

function WorkSpaceIdAdminPageComponents() {
	const { workspaceId } = Route.useParams();
	return <div>워크스페이스 {workspaceId} admin 페이지</div>;
}

export default WorkSpaceIdAdminPageComponents;
