import MemberRoleSelect from "@/core/workspace/ui/MemberRoleSelect";
import { Avatar } from "@/lib/ui/avatar";
import { Button } from "@/lib/ui/button";
import { UserMinusIcon } from "lucide-react";
import type { ReactNode } from "react";

function MemberList() {
	return (
		<section className="w-full max-w-[618px]">
			<header className="flex justify-between items-center w-full">
				<h5 className="text-text-xl">워크스페이스 멤버 목록</h5>
				<div className="text-text-sm text-zinc-400">6 members</div>
			</header>
			<div className="mt-[24px] w-full">
				<ul>
					<MemberItem rightAddon={<MemberRemoveButton />} />
					<MemberItem rightAddon={<MemberRemoveButton />} />
					<MemberItem rightAddon={<MemberRemoveButton />} />
					<MemberItem rightAddon={<MemberRemoveButton />} />
				</ul>
			</div>
		</section>
	);
}

interface ItemProps {
	rightAddon: ReactNode;
}
function MemberItem({ rightAddon }: ItemProps) {
	return (
		<li className="w-full flex items-center justify-between py-[12px] px-[20px] gap-[20px] last-of-type:border-b-[1px] border-zinc-200 border-t-[1px]">
			<div className="flex gap-[16px] items-center w-full">
				<Avatar className="h-[40px] w-[40px] flex-shrink-0" />
				<div className="text-text-lg text-ellipsis overflow-hidden w-[72px] whitespace-nowrap break-all">
					멤버 이름
				</div>
				<div className="text-text-lg text-zinc-400 font-normal w-[208px] text-ellipsis whitespace-nowrap break-all overflow-hidden">
					fluo_email@example.com
				</div>
			</div>
			<div className="flex items-center">
				<MemberRoleSelect />
				{rightAddon}
			</div>
		</li>
	);
}

function MemberRemoveButton() {
	return (
		<Button variant="ghost" className="p-[10px] ml-[8px]">
			<UserMinusIcon className="w-[20px] h-[20px] text-zinc-400" />
		</Button>
	);
}

export default MemberList;
