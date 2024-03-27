import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";

function WorkspaceInfoEdit() {
	return (
		<div>
			<Label
				htmlFor="workspaceTitle"
				className="text-text-md font-semibold cursor-pointer after:content-['*'] after:text-sub-red"
			>
				워크스페이스 이름 설정
			</Label>
			<div className="mt-[16px] flex gap-[16px] items-center">
				<Input
					id="workspaceTitle"
					name="title"
					placeholder="워크스페이스 이름 입력"
					className="min-w-[320px] h-[40px] py-[8px] px-[12px] placeholder:font-normal"
				/>
				<Button
					variant="primary"
					className="h-[40px] text-text-sm text-sub-white"
				>
					저장하기
				</Button>
			</div>
		</div>
	);
}

export default WorkspaceInfoEdit;
