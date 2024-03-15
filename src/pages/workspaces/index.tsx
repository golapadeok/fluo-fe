import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspaces/")({
	component: WorkSpacesIndexPageComponent,
});

function WorkSpacesIndexPageComponent() {
	return <div>워크스페이스 목록 페이지</div>;
}

export default WorkSpacesIndexPageComponent;
