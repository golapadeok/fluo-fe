import PrioritySelect from "@/core/task/ui/PrioritySelect";
import { DatePicker } from "@/lib/ui/DatePicker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/lib/ui/accordion";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Separator } from "@/lib/ui/separator";
import { SearchIcon } from "lucide-react";
import FilterSvg from "@/assets/filter.svg";

const Filter = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="filter">
        <div className="flex gap-2 w-full">
          <div className="relative grow">
            <SearchIcon className="absolute top-[14px] left-6 text-zinc-400" />
            <Input className="bg-white indent-10 w-full border border-zinc-300 focus:border-indigo-600" placeholder="검색하기" />
          </div>
          <AccordionTrigger asChild className=" transition-none [&[data-state=open]>svg]:rotate-0">
            <Button variant="secondary" className="bg-white border border-zinc-300 py-3 flex items-center hover:border-indigo-600 hover:text-black">
              <img src={FilterSvg} alt="필터 아이콘" className="w-5 h-5 mr-2" />
              <span className="text-black text-base font-semibold">Filter</span>
            </Button>
          </AccordionTrigger>
        </div>
        <AccordionContent className="mt-2 border border-zinc-400 rounded-[10px] px-[25px] pt-[21px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 items-start">
              <div className="flex justify-between w-full">
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="project-name">프로젝트명</label>
                  <Input id="project-name" className="bg-white border-zinc-400 h-10" />
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="priority">중요도</label>
                  <PrioritySelect triggerClassnames="w-[180px]" />
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="status">상태</label>
                  <Input id="status" className="bg-white border-zinc-400 h-10" />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="assignee">담당자</label>
                  <Input id="assignee" className="bg-white border-zinc-400 h-10" />
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="date">기한</label>
                  <DatePicker />
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <label htmlFor="tag">종류</label>
                  <Input id="tag" className="bg-white border-zinc-400 h-10" />
                </div>
              </div>
            </div>
            <Separator className="mt-5 mb-2" />
            <div className="text-right mb-5">
              <Button variant="outline" className="px-10 py-2.5">
                검색하기
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
