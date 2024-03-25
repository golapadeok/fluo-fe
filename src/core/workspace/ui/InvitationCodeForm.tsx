import { Button } from "@/lib/ui/button";

function InvitationCodeForm() {
	return (
		<div className="flex flex-col gap-4 w-[448px] p-6 bg-bg-secondary rounded-[10px] shadow-1">
			<h1 className="text-text-md font-bold">워크스페이스 초대하기</h1>

			<form className="flex shrink-0 gap-3 w-full">
				<input
					className="w-full p-[10px] text-text-sm border-solid border-[1px] border-[#e2e2e2] bg-zinc-50 rounded-[10px] outline-none"
					placeholder="초대하고 싶은 멤버의 코드를 입력해주세요."
				/>
				<Button variant="primary" size="lg">
					확인
				</Button>
			</form>
		</div>
	);
}

export default InvitationCodeForm;
