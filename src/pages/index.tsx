import TaskTableView from "@/core/task/ui/TaskTableView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="">홈페이지입니다.</div>
      <TaskTableView />
    </>
  );
}
