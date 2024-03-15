import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspaces/$workspaceId/setting")({
	component: WorkspaceSettingPage,
});

function WorkspaceSettingPage() {
	const { workspaceId } = Route.useParams();
	return <div>세팅 페이지입니다. {workspaceId}</div>;
}
