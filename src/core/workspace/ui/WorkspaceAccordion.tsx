import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/lib/ui/accordion";

function WorkspaceAccordion() {
	return (
		<Accordion
			type="single"
			defaultValue="item-1"
			collapsible
			className="w-full"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>테스트</AccordionTrigger>
				<AccordionContent>내용물</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default WorkspaceAccordion;
