import Filter from "@/core/task/ui/Filter";
import TaskTable from "@/core/task/ui/TaskTable";

const TaskTableView = () => {
  return (
    <div className="px-5 bg-white rounded-md py-5">
      <Filter />
      <TaskTable />
    </div>
  );
};

export default TaskTableView;
