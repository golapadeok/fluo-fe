import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function MemberDropDown() {
	const [openStatus, setOpenStatus] = useState<boolean>(false);
	return (
		<DropdownMenu
			onOpenChange={(e) => {
				setOpenStatus(e);
			}}
		>
			<DropdownMenuTrigger asChild>
				<button type="button">
					<div className="flex justify-center items-center gap-[4px] px-[6px] py-[4px] rounded-2xl bg-bg-secondary text-zinc-400 text-text-md">
						<span className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-bg-primary">
							<Users className="w-4 h-4" />
						</span>
						{"4"}
						{openStatus ? (
							<ChevronUp className="w-4 h-4" />
						) : (
							<ChevronDown className="w-4 h-4" />
						)}
					</div>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>여기 멤버 들어갈듯</DropdownMenuLabel>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default MemberDropDown;
