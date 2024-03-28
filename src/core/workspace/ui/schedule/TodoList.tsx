import { type Task, useTaskHover } from "@/core/workspace/ui/schedule";
import { useOpen } from "@/pages/workspaces/_workspaceLayout";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TodoItem = ({ dateInfo, taskId, taskInfo: { title, priority } }: Task) => {
  const { setHoveredTaskId } = useTaskHover();
  const isOpen = useOpen();

  const priorityColor = ["bg-[#D9D9D9]", "bg-sub-blue", "bg-sub-green", "bg-sub-yellow", "bg-sub-orange", "bg-sub-red"];
  return (
    <div
      className={`flex items-center justify-between py-2 border bg-white rounded-lg transition-all ease-linear ${isOpen ? "w-10 px-2" : "w-[270px] px-4"}`}
      onMouseEnter={() => setHoveredTaskId(taskId)}
      onMouseLeave={() => setHoveredTaskId(undefined)}
    >
      <div className={`flex w-full ${isOpen ? "justify-center" : "justify-between"}`}>
        {isOpen ? (
          <div className={`h-6 w-6 ${priorityColor[priority]} rounded-full`} />
        ) : (
          <>
            <div className="flex items-center">
              <div className={`w-1 h-8 ${priorityColor[priority]} ml-1 mr-2`} />
              <span className="text-sm font-semibold whitespace-nowrap">{title}</span>
            </div>
            <div className="flex flex-col items-center text-xs">
              <span>{format(new Date(dateInfo.startDate), "yyyy.MM.dd")}</span>~<span>{format(new Date(dateInfo.endDate), "yyyy.MM.dd")}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TodoList = ({ tasks }: { tasks: Task[] }) => {
  const isOpen = useOpen();

  return (
    <div className={`flex flex-col items-center h-full ease-linear bg-white rounded-lg transition-width ${isOpen ? "w-[76px]" : "w-[296px]"}`}>
      <header className={`w-full h-6 mt-[26px] flex justify-between items-center ${isOpen ? "px-2" : "px-4"}`}>
        {!isOpen && <span className="text-text-xl whitespace-nowrap">4월 3주차 업무 리스트</span>}
        <div className="flex items-center justify-center gap-3">
          <button type="button" className="flex items-center justify-center border rounded-md size-6 border-zinc-400 text-zinc-400">
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" className="flex items-center justify-center border rounded-md size-6 border-zinc-400 text-zinc-400">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </header>
      <div className="flex flex-col mt-6 gap-y-3">
        {tasks.map((task: Task) => {
          return <TodoItem key={task.taskId} {...task} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
