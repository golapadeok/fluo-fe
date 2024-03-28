import AddTaskDialog from "@/core/task/ui/AddTaskDialog";
import Filter from "@/core/task/ui/Filter";
import TaskTable from "@/core/task/ui/TaskTable";
import { Button } from "@/lib/ui/button";
import { Plus } from "lucide-react";

const TaskTableView = () => {
  return (
    <div className="px-5 bg-white rounded-md py-5">
      <Filter />
      <AddTaskDialog>
        <Button
          variant="primary"
          className="w-full flex justify-center items-center border rounded-[10px]py-3 my-3 bg-white text-main-600 border-main-600 hover:bg-main-200"
        >
          <Plus />
          업무 추가
        </Button>
      </AddTaskDialog>
      <TaskTable />
    </div>
  );
};

export default TaskTableView;
