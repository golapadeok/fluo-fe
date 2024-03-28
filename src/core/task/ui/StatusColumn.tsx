import AddTaskDialog from "@/core/task/ui/AddTaskDialog";
import Task from "@/core/task/ui/Task";
import TaskDetailDialog from "@/core/task/ui/TaskDetailDialog";
import { Plus } from "lucide-react";

const StatusColumn = () => {
  return (
    <div className="flex flex-col px-2.5 pt-3 gap-4 rounded-[10px] bg-zinc-100 min-w-[calc(25%-13.5px)] min-h-screen">
      <div className="flex gap-1 items-center">
        <div className="px-4 py-1">To-do</div>
        <div className="flex items-center justify-center text-sm font-semibold rounded-2xl text-white bg-main-600 px-2 py-0.5">3</div>
      </div>
      <div className="flex flex-col gap-4">
        <AddTaskDialog>
          <button type="button" className="w-full flex justify-center py-2 rounded border border-zinc-300 bg-zinc-200">
            <Plus className="text-[#A1A1AA] w-4 h-4" />
          </button>
        </AddTaskDialog>
        <TaskDetailDialog>
          <Task />
        </TaskDetailDialog>
        <TaskDetailDialog>
          <Task />
        </TaskDetailDialog>
        <TaskDetailDialog>
          <Task />
        </TaskDetailDialog>
      </div>
    </div>
  );
};

export default StatusColumn;
