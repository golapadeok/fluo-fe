import { Check, ChevronDownIcon } from "lucide-react";

import { Button } from "@/lib/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/lib/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

function MemberRoleSelect() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const roles = [
		{
			value: "next.js",
			label: "Next.js",
		},
		{
			value: "sveltekit",
			label: "SvelteKit",
		},
		{
			value: "nuxt.js",
			label: "Nuxt.js",
		},
		{
			value: "remix",
			label: "Remix",
		},
		{
			value: "astro",
			label: "Astro",
		},
	];

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					role="combobox"
					aria-expanded={open}
					className="w-max max-w-[104px] justify-between bg-bg-secondary font-medium text-text-sm py-[10px] px-[16px]"
				>
					{value ? roles.find((role) => role.value === value)?.label : "역할"}
					<ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0 bg-bg-primary">
				<Command>
					<CommandInput placeholder="역할을 선택해주세요..." />
					<CommandEmpty>해당 역할이 없습니다.</CommandEmpty>
					<CommandList>
						<CommandGroup>
							{roles.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === framework.value ? "opacity-100" : "opacity-0",
										)}
									/>
									{framework.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

export default MemberRoleSelect;
