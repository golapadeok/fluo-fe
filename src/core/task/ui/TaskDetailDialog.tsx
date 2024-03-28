import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/lib/ui/dialog";
import { Avatar, AvatarFallback } from "@/lib/ui/avatar";
import { Dot, User } from "lucide-react";
import { ReactComponent as Edit } from "@/assets/edit.svg";
import type { ReactNode } from "react";
import PriorityRating from "@/core/task/ui/PriorityRating";

const TaskDetailDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogOverlay />
      <DialogContent className="w-[756px] py-[38px] px-9">
        <button type="button" className="absolute top-8 right-[76px]">
          <Edit className="w-6 h-6" />
        </button>
        <div className="py-0.5 px-2 rounded-[3px] w-fit bg-zinc-300 text-xs text-white">#Design</div>
        <div className="flex flex-col gap-1 border-b border-zinc-400 py-5">
          <div className="text-2xl font-semibold">정기 미팅 일시 결정</div>
          <p className="text-lg font-medium text-zinc-400">2024.03.26 화 ~ 2024.03.28 목</p>
        </div>
        <div className="flex flex-col gap-1 border-b border-zinc-300 pt-5 pb-[30px]">
          <div className="flex gap-3 py-1">
            <p className="text-lg font-medium">참여 인원</p>
            <Dot />
            <p className="text-lg font-medium">총 5명</p>
          </div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col gap-1 border-b border-zinc-300 pt-5 pb-[30px]">
          <p className="py-1 text-lg font-medium">업무 내용</p>
          <div className="w-full h-[132px] p-3 bg-bg-secondary">업무 내용 텍스트</div>
        </div>
        <div className="flex py-6 border-b border-zinc-300 justify-between">
          <p className="text-lg font-medium">중요도</p>
          <PriorityRating priority={1} />
        </div>
        <div className="flex pt-6 pb-1 justify-between">
          <p className="text-lg font-medium">상태</p>
          <p className="text-base font-semibold text-zinc-400">시작 전</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailDialog;
