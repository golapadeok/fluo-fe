import MemberInvite from "@/core/workspace/ui/MemberInvite";
import MemberList from "@/core/workspace/ui/MemberList";

function MemberSettingContent() {
	return (
		<div className="bg-bg-primary rounded-[20px] p-[32px] min-h-[848px]">
			<header>
				<h4 className="font-semibold text-title-sm">워크스페이스 멤버 설정</h4>
				<small className="text-zinc-400">
					워크스페이스 멤버를 관리하고 초대합니다.
				</small>
			</header>
			<div className="flex gap-[20px] mt-[48px] flex-wrap w-full justify-between">
				<MemberList />
				<MemberInvite />
			</div>
		</div>
	);
}

export default MemberSettingContent;
