import PriorityRating from "@/core/task/ui/PriorityRating";
import { Avatar, AvatarFallback } from "@/lib/ui/avatar";
import { CalendarClockIcon } from "lucide-react";

const Task = () => {
  return(
    <div className="flex flex-col justify-between px-4 py-[18px] rounded bg-[#E7E7E7] w-[296px] h-32">
      <div className="flex justify-between">
        <div>
          <div className="py-0.5 px-2 rounded-[3px] bg-zinc-400 text-xs text-white">#Design</div>
        </div>
        <PriorityRating priority={4} />
      </div>
      <div className="text-xs font-semibold">업무 제목</div>
      <div className="flex justify-between">
        <div><Avatar size="sm"><AvatarFallback>T</AvatarFallback></Avatar></div>
        <div className="flex justify-center items-center gap-1">
          <CalendarClockIcon className="w-4 h-4"/>
          <p className=" text-[10px] text-zinc-500">2024.04.08</p>
        </div>
      </div>
    </div>
  )
};

export default Task;
