// import PrioritySelect from "@/core/task/ui/PrioritySelect";
import { Button } from "@/lib/ui/button";
import { Dialog, DialogClose, DialogContent, DialogOverlay } from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/lib/ui/select";
import { Switch } from "@/lib/ui/switch";
import { Textarea } from "@/lib/ui/textarea";
import { DialogTrigger } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

const AddTaskDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay />
      <DialogContent className="w-[760px] p-[38px]">
        <div className="flex flex-col gap-9">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-semibold">업무 추가하기</div>
            <div className="flex items-center gap-3 py-[2.5px]">
              <Label htmlFor="isPrivate" className="text-base font-semibold">
                나만 보기
              </Label>
              <Switch id="isPrivate" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">업무 제목</p>
            <Input placeholder="업무 제목을 입력해주세요." className="bg-zinc-50" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">담당자</p>
            <Select>
              <SelectTrigger className="w-full py-3.5 pl-3.5 h-auto font-medium text-[#818181] border-[1.5px] border-[#E2E2E2] bg-zinc-50">
                <SelectValue placeholder="담당자를 선택해주세요.(중복 선택 가능)" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">업무 종류</p>
            <Input placeholder="해시태그를 입력해주세요." className="bg-zinc-50" />
          </div>
          <div className="flex w-full gap-6">
            <div className="flex flex-col gap-3 grow">
              <p className="text-base font-semibold">업무 중요도</p>
              <Input className="bg-zinc-50" />
              {/* <PrioritySelect triggerClassnames="py-3.5 pl-3.5 h-auto font-medium text-[#818181] border-[1.5px] border-[#E2E2E2] bg-zinc-50" /> */}
            </div>
            <div className="flex flex-col gap-3 grow">
              <p className="text-base font-semibold">업무 기간</p>
              <Input className="bg-zinc-50" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">업무 내용</p>
            <Textarea placeholder="업무 내용을 입력해주세요" />
          </div>
          <div className="flex gap-6 justify-end">
            <DialogClose asChild>
              <Button variant="outline" size="lg" className="border-indigo-600">
                취소하기
              </Button>
            </DialogClose>
            <Button variant="primary" size="lg" className="border-indigo-600">
              저장하기
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
