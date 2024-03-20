import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { Users, ChevronDown, ChevronUp, User } from "lucide-react";
import { useState } from "react";

/** @TODO 데이터 받아오면 넣기 + 이미지 존재하면 분기 설정 */
function MemberDropDownItem() {
	return (
		<li className="flex items-center gap-3 w-full py-2 pl-3 text-text-xs">
			<span className="flex justify-center items-center rounded-full bg-zinc-200 w-6 h-6">
				<User className="text-zinc-400 w-4 h-4" />
			</span>
			멤버 이름
		</li>
	);
}

function MemberDropDown() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<DropdownMenu
			onOpenChange={(e) => {
				setIsOpen(e);
			}}
		>
			<DropdownMenuTrigger asChild>
				<button type="button">
					<div className="flex justify-center items-center gap-[4px] px-[6px] py-[4px] rounded-2xl bg-bg-secondary text-zinc-400 text-text-md">
						<span className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-bg-primary">
							<Users className="w-4 h-4" />
						</span>
						{"4"}
						{isOpen ? (
							<ChevronUp className="w-4 h-4" />
						) : (
							<ChevronDown className="w-4 h-4" />
						)}
					</div>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-bg-primary">
				<ul className="w-[170px] h-[200px] overflow-auto">
					{/** @TODO 데이터 받아오면 map */}
					<MemberDropDownItem />
					<MemberDropDownItem />
					<MemberDropDownItem />
					<MemberDropDownItem />
					<MemberDropDownItem />
					<MemberDropDownItem />
					<MemberDropDownItem />
				</ul>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default MemberDropDown;
