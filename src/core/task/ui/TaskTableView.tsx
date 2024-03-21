import Filter from "@/core/task/ui/Filter";
import TaskTable from "@/core/task/ui/TaskTable";

const TaskTableView = () => {
  return (
    <div className="px-5 w-screen">
      <Filter />
      <TaskTable />
    </div>
  );
};

export default TaskTableView;
