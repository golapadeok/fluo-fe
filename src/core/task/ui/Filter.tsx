import PrioritySelect from "@/core/task/ui/PrioritySelect";
import { DatePicker } from "@/lib/ui/DatePicker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/lib/ui/accordion";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { ReactComponent as Refresh } from "@/assets/refresh.svg";
import { SearchIcon } from "lucide-react";
import { ReactComponent as FilterIcon } from "@/assets/filter.svg";
import { Select, SelectTrigger, SelectValue } from "@/lib/ui/select";
import { Label } from "@/lib/ui/label";

const Filter = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="filter">
        <div className="flex gap-2 w-full">
          <div className="relative grow">
            <SearchIcon className="absolute top-[14px] left-6 text-zinc-400" />
            <Input className="bg-white shadow-1 indent-10 w-full border border-zinc-300 focus:border-indigo-600" placeholder="검색하기" />
          </div>
          <AccordionTrigger asChild className=" transition-none [&[data-state=open]>svg]:rotate-0">
            <Button variant="secondary" className="bg-white shadow-1 border border-zinc-300 py-3 flex items-center hover:no-underline hover:border-indigo-600">
              <FilterIcon className="w-6 h-6" fill="#A1A1AA" />
              <p className="text-zinc-400 text-base font-semibold">Filter</p>
            </Button>
          </AccordionTrigger>
        </div>
        <AccordionContent className="mt-4 border border-zinc-300 rounded-[10px] px-[25px] pt-[21px] shadow-2">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 items-start">
              <div className="flex gap-9 w-full">
                <div className="flex gap-3 items-center grow">
                  <Label className="text-base font-semibold" htmlFor="project-name">
                    프로젝트명
                  </Label>
                  <Input id="project-name" className="bg-white h-10 grow" />
                </div>
                <div className="flex gap-3 items-center grow">
                  <Label className="text-base font-semibold">상태</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="시작 전" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="flex gap-3 items-center grow">
                  <Label className="text-base font-semibold">중요도</Label>
                  <PrioritySelect triggerClassnames="w-full" />
                </div>
                <div className="flex gap-3 items-center grow">
                  <Label className="text-base font-semibold">기한</Label>
                  <DatePicker />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex gap-9">
                  <div className="flex gap-3 items-center">
                    <Label className="text-base font-semibold" htmlFor="assignee">
                      담당자
                    </Label>
                    <Input id="assignee" className="bg-white border-zinc-300 h-10" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <Label className="text-base font-semibold" htmlFor="tag">
                      종류
                    </Label>
                    <Input id="tag" className="bg-white border-zinc-300 h-10" />
                  </div>
                </div>
                <div className="flex gap-8">
                  <Button variant="ghost" className="flex gap-2 py-2 rounded-md border border-zinc-300">
                    <Refresh className="w-6 h-6" fill="#A1A1AA" />
                    <span>재설정</span>
                  </Button>
                  <Button variant="primary" className="py-2.5">
                    검색하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
