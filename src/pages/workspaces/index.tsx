import InvitationListContent from "@/core/workspace/ui/Contents/InvitationListContent";
import WorkSpaceListContent from "@/core/workspace/ui/Contents/WorkSpaceListContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { MailPlus, Rows3 } from "lucide-react";

export const Route = createFileRoute("/workspaces/")({
  component: WorkSpacesIndexPageComponent,
});

function WorkSpacesIndexPageComponent() {
  return (
    <main className="max-w-[1320px] mx-auto mt-7">
      <Tabs defaultValue="workspace">
        <TabsList>
          <TabsTrigger value="workspace" className="flex gap-[4px]">
            <Rows3 width={18} height={18} className="h-[1.125rem] w-[1.125rem]" />
            워크스페이스 목록
          </TabsTrigger>
          <TabsTrigger value="credential" className="flex gap-[4px]">
            <MailPlus width={18} height={18} className="h-[1.125rem] w-[1.125rem]" />
            초대 받은 내역
          </TabsTrigger>
        </TabsList>
        <TabsContent value="workspace" className="mt-0 pt-[36px]">
          <WorkSpaceListContent />
        </TabsContent>
        <TabsContent value="credential" className="mt-0 pt-[36px]">
          <InvitationListContent />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default WorkSpacesIndexPageComponent;
