import PriorityRating from "@/core/task/ui/PriorityRating";
import { Avatar, AvatarFallback } from "@/lib/ui/avatar";
import { CalendarClockIcon, User } from "lucide-react";

const Task = () => {
  return (
    <div className="flex flex-col gap-[22px] px-4 py-[18px] rounded bg-white w-full">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <div className="py-0.5 px-2 rounded-[3px] bg-zinc-400 text-xs text-white">#Design</div>
          </div>
          <PriorityRating priority={4} />
        </div>
        <div className="text-xs font-semibold text-start">업무 제목</div>
      </div>
      <div className="flex justify-between">
        <div>
          <Avatar size="sm">
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center items-center gap-1">
          <CalendarClockIcon className="w-4 h-4 text-zinc-500" />
          <p className=" text-[10px] text-zinc-500">D-7</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
