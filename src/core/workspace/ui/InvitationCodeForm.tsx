import { Button } from "@/lib/ui/button";

function InvitationCodeForm() {
	return (
		<div className="flex flex-col gap-[14px] w-[417px] h-[172px] px-[23px] py-[26px] bg-bg-primary rounded-[10px]">
			<h1 className="text-text-md font-bold">초대 코드 입력</h1>
			<p className="text-text-md">관리자에게 전달받은 초대코드를 입력하세요</p>
			<form className="flex shrink-0 gap-3 w-full">
				<input
					className="w-full p-[10px] text-text-sm border-solid border-[1px] border-[#e2e2e2] bg-zinc-50 rounded-[10px] outline-none"
					placeholder="초대코드를 입력해주세요."
				/>
				<Button variant="primary" size="lg">
					확인
				</Button>
			</form>
		</div>
	);
}

export default InvitationCodeForm;
