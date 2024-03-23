import StatusColumn from "@/core/task/ui/StatusColumn";

const BoardView = () => {
  return (
    <div className="flex gap-[22px] overflow-scroll bg-white rounded-md px-1 py-1">
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
    </div>
  );
};

export default BoardView;
