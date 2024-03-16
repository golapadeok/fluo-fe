import { Outlet, createFileRoute, getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import SubHeader from "@/core/workspace/ui/SubHeader";
import MemberDropDown from "@/core/workspace/ui/MemberDropDown";
import SideBar from "@/core/workspace/ui/SideBar";

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
		<div className="bg-bg-secondary h-[100vh]">
			<SubHeader
				isOpen={isOpen}
				onToggle={handleToggleSidebar}
				workspaceInfo={{
					name: "워크스페이스 이름",
					id: workspaceId,
				}}
				memberDropDown={<MemberDropDown />}
				sideBar={<SideBar isOpen={!isOpen} />}
			/>
			<main
				className={`max-w-[1320px] m-auto ${isOpen ? "pl-[236px]" : "pl-0"}`}
			>
				<Outlet />
			</main>
		</div>
	);
}

export default WorkSpaceLayoutComponent;
