import { createFileRoute } from "@tanstack/react-router";
import { LayoutPanelTop, Calendar, LayoutList } from "lucide-react";
import Schedule from "@/core/workspace/ui/schedule";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/tabs";
import TaskTableView from "@/core/task/ui/TaskTableView";
import BoardView from "@/core/task/ui/BoardView";

export const Route = createFileRoute("/workspaces/_workspaceLayout/$workspaceId/")({
  component: WorkSpaceIdPageComponent,
});

function WorkSpaceIdPageComponent() {
  return (
    <main className="max-w-[1320px] mx-auto mt-7">
      <Tabs defaultValue="board">
        <TabsList>
          <TabsTrigger value="board" className="flex gap-[4px]">
            <LayoutPanelTop width={18} height={18} className="h-[1.125rem] w-[1.125rem]" />
            칸반보드
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex gap-[4px]">
            <Calendar width={18} height={18} className="h-[1.125rem] w-[1.125rem]" />
            캘린더
          </TabsTrigger>
          <TabsTrigger value="table" className="flex gap-[4px]">
            <LayoutList width={18} height={18} className="h-[1.125rem] w-[1.125rem]" />표
          </TabsTrigger>
        </TabsList>
        <TabsContent value="board" className="mt-0 pt-[36px]">
          <BoardView />
        </TabsContent>
        <TabsContent value="calendar" className="mt-0 pt-[36px]">
          <Schedule />
        </TabsContent>
        <TabsContent value="table" className="mt-0 pt-[36px]">
          <TaskTableView />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default WorkSpaceIdPageComponent;
