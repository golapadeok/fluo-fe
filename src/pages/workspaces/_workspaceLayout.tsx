import { Outlet, createFileRoute, getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import SubHeader from "@/core/workspace/ui/SubHeader";

export const Route = createFileRoute("/workspaces/_workspaceLayout")({
	component: WorkSpaceLayoutComponent,
});

const routeApi = getRouteApi("/workspaces/_workspaceLayout/$workspaceId/");

function WorkSpaceLayoutComponent() {
	const routeParams = routeApi.useParams();
	const { workspaceId } = routeParams;
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const handleToggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SubHeader
				isOpen={isOpen}
				onToggle={handleToggleSidebar}
				workspaceInfo={{
					name: "워크스페이스 이름",
					id: workspaceId,
				}}
				memberDropDown={<div>대충 드롭다운 들어갈거임</div>}
			/>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default WorkSpaceLayoutComponent;
