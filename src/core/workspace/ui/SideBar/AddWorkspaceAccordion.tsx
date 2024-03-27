import AddWorkspaceDialog from "@/core/workspace/ui/AddWorkspaceDialog";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/lib/ui/accordion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ListPlus } from "lucide-react";
import { useState } from "react";

function AddWorkspaceAccordion() {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<Accordion
			type="single"
			defaultValue="add-workspace"
			collapsible
			className="w-full"
			onValueChange={(e: string) => {
				setIsOpen(!!e);
			}}
		>
			<AccordionItem value="add-workspace">
				<AccordionTrigger
					className={`${
						isOpen && "bg-bg-secondary"
					} rounded-[5px] p-[7px] hover:no-underline hover:bg-bg-secondary [&[data-state=open]>svg]:rotate-90`}
				>
					<div className="flex items-center gap-2 text-main-600 text-text-xs font-semibold">
						<ListPlus />
						워크스페이스 추가
					</div>
					<ChevronRight className="h-5 w-5 text-main-600 shrink-0 transition-transform duration-200" />
				</AccordionTrigger>
				<AccordionContent className="pt-1.5">
					<AddWorkspaceDialog
						trigger={
							<button
								type="button"
								className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]"
							>
								워크스페이스 생성하기
							</button>
						}
					/>
					<Link
						to="/workspaces"
						className="flex items-center p-1.5 text-zinc-400 text-text-xs font-semibold pl-[30px]"
					>
						초대 받은 워크스페이스
					</Link>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default AddWorkspaceAccordion;
