import { Button } from "@/lib/ui/button";
import { Separator } from "@/lib/ui/separator";
import { Copy, Plus } from "lucide-react";

function MemberInvite() {
	return (
		<section>
			<header className="flex justify-between items-center w-full">
				<h5 className="text-text-xl">워크스페이스 초대</h5>
			</header>
			<div className="mt-[24px] p-[24px] w-full max-w-[382px] rounded-[12px] bg-bg-secondary shadow-[inset_0_0_1px_1px_rgba(228,228,231,1),0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(16,24,40,0.1)]">
				<InvitationCodeGenerate />
				<Separator className="my-[16px] border-zinc-200" />
				<EmailInvite />
			</div>
		</section>
	);
}

function InvitationCodeGenerate() {
	return (
		<div>
			<header className="w-full">
				<h6 className="text-text-md font-medium">초대 코드로 초대하기</h6>
			</header>
			<div className="flex gap-[8px] mt-[8px]">
				<div className="flex justify-between items-center gap-[12px] py-[8px] px-[12px] text-zinc-500 text-text-sm bg-bg-primary border-border border-[1px] rounded-[6px]">
					<div className="min-w-[136px]">초대 코드</div>
					<Button className="p-[2px] hover:bg-transparent hover:text-zinc-400 active:text-zinc-700 text-zinc-400 focus-visible:text-zinc-700 focus-visible:bg-transparent">
						<Copy className="w-[16px] h-[16px] text-inherit" />
					</Button>
				</div>
				<Button
					variant="primary"
					className="py-[8px] px-[12px] text-text-sm font-medium text-sub-white"
				>
					생성하기
				</Button>
			</div>
		</div>
	);
}

function EmailInvite() {
	return (
		<div>
			<Button
				variant="primary"
				className="text-text-md text-sub-white flex items-center justify-center gap-[4px] w-full"
			>
				<Plus className="w-[16px] h-[16px]" /> 이메일로 초대하기
			</Button>
		</div>
	);
}

export default MemberInvite;
