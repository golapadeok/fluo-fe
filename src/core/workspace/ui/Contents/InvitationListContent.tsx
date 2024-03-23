import InvitationCodeForm from "@/core/workspace/ui/InvitationCodeForm";
import InvitationList from "@/core/workspace/ui/InvitationList";

function InvitationListContent() {
	return (
		<div className="flex flex-col gap-8 w-full bg-zinc-100 rounded-[10px] py-[35px] px-[27px]">
			<InvitationCodeForm />
			<div className="flex flex-col gap-4 w-full bg-bg-primary rounded-[10px] px-9 py-[30px]">
				<h1 className="text-title-sm">초대 받은 내역</h1>
				<InvitationList />
			</div>
		</div>
	);
}

export default InvitationListContent;
