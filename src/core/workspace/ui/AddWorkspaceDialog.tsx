import { Button } from "@/lib/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import type { ReactNode } from "react";

type AddWorkspaceDialogProps = {
	trigger: ReactNode;
};

function AddWorkspaceDialog({ trigger }: AddWorkspaceDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="p-[38px] max-w-[760px] gap-9">
				<DialogHeader className="text-title-sm ">
					워크스페이스 생성하기
				</DialogHeader>
				<label className="flex flex-col gap-3 text-text-md font-semibold">
					워크스페이스 이름
					<Input placeholder="워크스페이스의 이름을 입력해주세요." />
				</label>
				<label className="flex flex-col gap-3 text-text-md font-semibold">
					워크스페이스 설명
					<Input placeholder="워크스페이스의 설명을 입력해주세요." />
				</label>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline" size="lg">
							취소하기
						</Button>
					</DialogClose>
					<Button variant="primary" size="lg">
						저장하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default AddWorkspaceDialog;
