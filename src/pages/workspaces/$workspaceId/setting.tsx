import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { FileLock2Icon, UserRoundCogIcon } from "lucide-react";

export const Route = createFileRoute("/workspaces/$workspaceId/setting")({
	component: WorkspaceSettingPage,
});

function WorkspaceSettingPage() {
	return (
		<main className="p-[32px] max-w-[1084px]">
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
				<TabsContent value="workspace">
					<div>워크스페이스 설정</div>
				</TabsContent>
				<TabsContent value="credential">
					<div>권한 설정</div>
				</TabsContent>
			</Tabs>
		</main>
	);
}
