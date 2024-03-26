import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/lib/ui/accordion";
import { ChevronRight, List } from "lucide-react";
import { useState } from "react";

function WorkspaceListAccordion() {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<Accordion
			type="single"
			defaultValue="workspace-list"
			collapsible
			className="w-full"
			onValueChange={(e: string) => {
				setIsOpen(!!e);
			}}
		>
			<AccordionItem value="workspace-list">
				<AccordionTrigger
					className={`${
						isOpen && "bg-bg-secondary"
					} rounded-[5px] p-[7px] hover:no-underline hover:bg-bg-secondary [&[data-state=open]>svg]:rotate-90`}
				>
					<div className="flex items-center gap-2 text-main-600 text-text-xs font-semibold">
						<List />
						워크스페이스 목록
					</div>
					<ChevronRight className="h-5 w-5 text-main-600 shrink-0 transition-transform duration-200" />
				</AccordionTrigger>
				<AccordionContent className="pt-1.5">
					{/** @TODO map사용해야함. 클릭시 workspaceId로 이동하도록 추가해야함 */}
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]">
						워크스페이스 1
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]">
						워크스페이스 2
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]">
						워크스페이스 3
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]">
						워크스페이스 4
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default WorkspaceListAccordion;
