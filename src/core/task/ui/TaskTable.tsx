import PriorityRating from "@/core/task/ui/PriorityRating";
import AvatarGroup from "@/lib/ui/AvatarGroup";

const TaskTable = () => {
  return (
    <div className="flex flex-col w-screen">
      <TaskTableTitle />
      <ul>
        <TaskTableItem />
        <TaskTableItem />
        <TaskTableItem />
        <TaskTableItem />
        <TaskTableItem />
        <TaskTableItem />
        <TaskTableItem />
      </ul>
    </div>
  );
};

const titleArray = ["프로젝트명", "기한", "상태", "중요도", "담당자", "종류"];
const TaskTableTitle = () => {
  return (
    <div className=" grid grid-cols-6 w-full py-[18px] px-[47px] border-b">
      {titleArray.map((title) => (
        <div key={title} className="flex justify-center items-center grow">
          {title}
        </div>
      ))}
    </div>
  );
};

const TaskTableItem = () => {
  return (
    <li className="py-[26px] px-[47px] grid grid-cols-6 w-full rounded-[10px] hover:bg-bg-secondary">
      <div className="flex justify-center items-center">업무 제목</div>
      <div className="flex justify-center items-center">D-3</div>
      <div className="flex justify-center items-center">시작 전</div>
      <div className="flex justify-center items-center">
        <PriorityRating priority={4} />
      </div>
      <div className="flex justify-center items-center">
        <AvatarGroup />
      </div>
      <div className="flex justify-center items-center">
        <div className="py-0.5 px-2 rounded-[3px] bg-zinc-400 text-xs text-white">#Design</div>
      </div>
    </li>
  );
};
export default TaskTable;
