import GlobalNavBar from "@/core/user/ui/GlobalNavBar";
import SideBar from "@/core/workspace/ui/SideBar/SideBar";
import SubHeader from "@/core/workspace/ui/SubHeader";
import { Outlet, createFileRoute, getRouteApi } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";

export const Route = createFileRoute("/workspaces/_workspaceLayout")({
	component: WorkSpaceLayoutComponent,
});

const routeApi = getRouteApi("/workspaces/_workspaceLayout/$workspaceId/");

const OpenContext = createContext<{ isOpen: boolean } | null>(null);

function WorkSpaceLayoutComponent() {
	const routeParams = routeApi.useParams();
	const { workspaceId } = routeParams;
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const handleToggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<header className="fixed z-[1] bg-bg-primary inset-x-0">
				<GlobalNavBar />
				<SubHeader
					isOpen={isOpen}
					onClickChevronButton={handleToggleSidebar}
					workspaceData={{
						name: "워크스페이스 이름",
						id: workspaceId,
					}}
				/>
			</header>
			<SideBar isOpen={!isOpen} />
			<div className="bg-white min-h-[100vh]">
				<main
					className={`max-w-[1320px] m-auto ${
						isOpen ? "pl-[236px]" : "pl-0"
					} transition-all ease-linear`}
				>
					<OpenContext.Provider value={{ isOpen }}>
						<Outlet />
					</OpenContext.Provider>
				</main>
			</div>
		</>
	);
}

export default WorkSpaceLayoutComponent;

export function useOpen() {
	const context = useContext(OpenContext);
	if (!context) {
		throw new Error("useOpen must be used within an AuthProvider");
	}
	return context;
}
