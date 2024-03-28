import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/ui/popover";
import { Button } from "@/lib/ui/button";
import { Calendar } from "@/lib/ui/calendar";

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn("w-[280px] h-10 justify-start text-left font-normal border border-zinc-400 text-black", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
