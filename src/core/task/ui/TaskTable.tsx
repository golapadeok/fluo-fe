import PriorityRating from "@/core/task/ui/PriorityRating";
import { Avatar } from "@/lib/ui/avatar";

const TaskTable = () => {
  return(
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
  )
};

const titleArray = ['프로젝트명', '기한', '상태', '중요도', '담당자'];
const TaskTableTitle = () => {
  return(
    <div className=" grid grid-cols-5 w-full py-[18px] px-[47px] border-b">
      {titleArray.map((title) => <div key={title} className="flex justify-center items-center grow">{title}</div>)}
    </div>
  )
};

const TaskTableItem = () => {
  return(
    <li className="py-[26px] px-[47px] grid grid-cols-5 w-full">
      <div className="flex justify-center items-center">업무 제목</div>
      <div className="flex justify-center items-center">D-3</div>
      <div className="flex justify-center items-center">시작 전</div>
      <div className="flex justify-center items-center"><PriorityRating priority={4}/></div>
      <div className="flex justify-center items-center"><Avatar size="xs"/></div>
    </li>
  )
};
export default TaskTable;
