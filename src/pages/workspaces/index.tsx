import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { MailPlus, LayoutGridIcon } from "lucide-react"

export const Route = createFileRoute("/workspaces/")({
	component: WorkSpacesIndexPageComponent,
});

function WorkSpacesIndexPageComponent() {
	return( 
		<>
			<div>워크스페이스 목록 페이지</div>
			<div>
				<Tabs defaultValue="workspaces">
					<TabsList>
						<TabsTrigger value="workspaces"><div className="flex gap-1 items-center justify-center"><LayoutGridIcon className="w-[18px] h-18px]"/><span>워크스페이스 목록</span></div></TabsTrigger>
						<TabsTrigger value="invitations"><div className="flex gap-1 items-center justify-center"><MailPlus className="w-[18px] h-[18px]"/><span>초대 받은 내역</span></div></TabsTrigger>
					</TabsList>
						<TabsContent value="workspaces">
							<div>워크스페이스 목록</div>
						</TabsContent>
						<TabsContent value="invitations">
							<div className="w-[1320px] rounded-[10px] bg-zinc-100 pt-9 px-5 pb-5 mt-3">
								<div className="flex flex-col gap-8">
									<div className="w-[417px] h-[172px] rounded-[10px] bg-white">초대 코드</div>
									<div className="w-[1280px] h-[564px] rounded-[10px] bg-white">초대 목록</div>
								</div>
							</div>
						</TabsContent>
				</Tabs>
			</div>
		</>
	);
}

export default WorkSpacesIndexPageComponent;
