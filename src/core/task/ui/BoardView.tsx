import StatusColumn from "@/core/task/ui/StatusColumn";

const BoardView = () => {
  return (
    <div className="flex flex-nowrap gap-[18px] justify-evenly overflow-x-auto">
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
    </div>
  );
};

export default BoardView;
