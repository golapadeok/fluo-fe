import Task from "@/core/task/ui/Task";

const StatusColumn = () => {
  return (
    <div className="flex flex-col px-2.5 pt-3 gap-4 rounded-[10px] bg-zinc-100 w-fit min-h-screen">
      <div className="flex gap-3 items-center">
        <div className="px-4 py-1 rounded-[17px] bg-[#D9D9D9]">To-do</div>
        <div className="text-base">3</div>
      </div>
      <div className="flex flex-col gap-4">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default StatusColumn;
