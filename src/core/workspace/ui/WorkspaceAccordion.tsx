import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/lib/ui/accordion";
import { ChevronDown, List } from "lucide-react";
import { useState, type MouseEvent } from "react";

function WorkspaceAccordion() {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<Accordion
			type="single"
			defaultValue="workspace-list"
			collapsible
			className="w-full"
			onValueChange={(e: MouseEvent) => {
				setIsOpen(!!e);
			}}
		>
			<AccordionItem value="workspace-list">
				<AccordionTrigger
					className={`${
						isOpen && "bg-bg-secondary"
					} rounded-[5px] p-[7px] hover:no-underline`}
				>
					<div className="flex items-center gap-2 text-main-600 text-text-xs font-semibold">
						<List />
						워크스페이스 목록
					</div>
					<ChevronDown className="h-6 w-6 text-main-600 shrink-0 transition-transform duration-200" />
				</AccordionTrigger>
				<AccordionContent>
					{/** @TODO map사용해야함. 클릭시 workspaceId로 이동하도록 추가해야함 */}
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs">
						워크스페이스 1
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs">
						워크스페이스 2
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs">
						워크스페이스 3
					</div>
					<div className="flex items-center p-1.5 text-zinc-400 text-text-xs">
						워크스페이스 4
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default WorkspaceAccordion;
