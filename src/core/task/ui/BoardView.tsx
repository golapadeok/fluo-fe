import StatusColumn from "@/core/task/ui/StatusColumn";

const BoardView = () => {
  return (
    <div className="flex gap-[22px]">
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
      <StatusColumn />
    </div>
  );
};

export default BoardView;
