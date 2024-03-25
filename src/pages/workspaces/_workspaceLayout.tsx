import { Outlet, createFileRoute, getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import SubHeader from "@/core/workspace/ui/SubHeader";
import SideBar from "@/core/workspace/ui/SideBar/SideBar";

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
      <SideBar isOpen={!isOpen} />
      <div className="min-h-[100vh]">
        <SubHeader
          isOpen={isOpen}
          onClickChevronButton={handleToggleSidebar}
          workspaceData={{
            name: "워크스페이스 이름",
            id: workspaceId,
          }}
        />
        <main className={`max-w-[1320px] m-auto ${isOpen ? "pl-[236px]" : "pl-0"} transition-all ease-linear`}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default WorkSpaceLayoutComponent;
