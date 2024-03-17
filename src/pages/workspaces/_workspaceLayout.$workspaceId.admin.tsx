import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/lib/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { UserRoundCogIcon, FileLock2Icon } from "lucide-react";
import WorkspaceAdminContent from "@/core/workspace/ui/AdminContent";

export const Route = createFileRoute(
	"/workspaces/_workspaceLayout/$workspaceId/admin",
)({
	component: WorkSpaceIdAdminPageComponents,
});

function WorkSpaceIdAdminPageComponents() {
	return (
		<main className="p-[36px] max-w-[1084px]">
			<Tabs defaultValue="workspace">
				<TabsList>
					<TabsTrigger value="workspace" className="flex gap-[4px]">
						<UserRoundCogIcon
							width={18}
							height={18}
							className="h-[1.125rem] w-[1.125rem]"
						/>
						멤버 및 워크스페이스 설정
					</TabsTrigger>
					<TabsTrigger value="credential" className="flex gap-[4px]">
						<FileLock2Icon
							width={18}
							height={18}
							className="h-[1.125rem] w-[1.125rem]"
						/>
						권한 설정
					</TabsTrigger>
				</TabsList>
				<TabsContent value="workspace" className="mt-0 pt-[36px]">
					<WorkspaceAdminContent />
				</TabsContent>
				<TabsContent value="credential" className="mt-0 pt-[36px]">
					권한 설정
				</TabsContent>
			</Tabs>
		</main>
	);
}

export default WorkSpaceIdAdminPageComponents;
