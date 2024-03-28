import { Avatar } from "@/lib/ui/avatar";
import { Button } from "@/lib/ui/button";

const InvitationList = () => {
	return (
		<div className="flex flex-col gap-2.5 max-h-[555px] overflow-auto">
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
		</div>
	);
};

const InvitationListItem = () => {
	return (
		<div className="flex justify-between items-center w-full pl-[31px] pr-[22px] py-6 rounded-lg border-[1px] border-zinc-200 bg-bg-primary shadow-3">
			<div className="flex items-center justify-center gap-6">
				<Avatar className="w-[53px] h-[53px] bg-[#d9d9d9]" />
				<div className="text-lg font-medium">Team/Fluo</div>
			</div>
			<div className="flex gap-[30px]">
				<Button variant="outline" size="sm">
					거절하기
				</Button>
				<Button variant="primary" size="sm">
					수락하기
				</Button>
			</div>
		</div>
	);
};

export default InvitationList;
