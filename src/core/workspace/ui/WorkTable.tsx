import Rating from "@/core/workspace/ui/Rating";
import { Avatar } from "@/lib/ui/avatar";

const WorkTable = () => {
  return(
    <div className="flex flex-col w-screen">
      <TableTitle />
      <ul>
        <WorkList />
        <WorkList />
        <WorkList />
        <WorkList />
        <WorkList />
        <WorkList />
        <WorkList />
      </ul>
    </div>
  )
};

const titleArray = ['프로젝트명', '프로젝트 요약/설명', '기한', '상태', '중요도', '담당자', '종류'];
const TableTitle = () => {
  return(
    <div className=" grid grid-cols-7 w-full py-[18px] px-[47px] border-b">
      {titleArray.map((title) => <div key={title} className="flex justify-center items-center grow">{title}</div>)}
    </div>
  )
};

const WorkList = () => {
  return(
    <li className="py-[26px] px-[47px] grid grid-cols-7 w-full">
      <div className="flex justify-center items-center">업무 제목</div>
      <div className="flex justify-center items-center">업무에 대한 한줄 설명</div>
      <div className="flex justify-center items-center">2024.04.08</div>
      <div className="flex justify-center items-center">시작 전</div>
      <div className="flex justify-center items-center"><Rating rating={4}/></div>
      <div className="flex justify-center items-center"><Avatar size="xs"/></div>
      <div className="flex justify-center items-center">
        <div className="w-[60px] h-5 py-0.5 px-3 rounded-sm bg-indigo-300 text-white text-xs">Design</div>
      </div>
    </li>
  )
};
export default WorkTable;
