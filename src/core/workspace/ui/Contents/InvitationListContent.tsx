import InvitationCodeForm from "@/core/workspace/ui/InvitationCodeForm";
import InvitationList from "@/core/workspace/ui/InvitationList";

function InvitationListContent() {
	return (
		<div className="flex flex-col gap-8 w-full bg-bg-primary rounded-[10px] py-[35px] px-[27px]">
			<div className="flex flex-col">
				<h1 className="text-title-sm">워크스페이스 초대</h1>
				<p className="text-text-xs text-zinc-400">
					초대코드를 통해 간편하게 멤버를 초대할 수 있고 초대 내역을 통해 다른
					워크스페이스에 가입할 수 있습니다.
				</p>
			</div>
			<InvitationCodeForm />
			<div className="flex flex-col gap-6 w-full rounded-[10px]">
				<h1 className="text-text-xl">워크스페이스 초대 내역</h1>
				<InvitationList />
			</div>
		</div>
	);
}

export default InvitationListContent;
