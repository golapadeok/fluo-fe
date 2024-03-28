import { Button } from "@/lib/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/lib/ui/dialog";
import type { ReactNode } from "react";

type DeleteWorkspaceDialogProps = {
	trigger: ReactNode;
};

function DeleteWorkspaceDialog({ trigger }: DeleteWorkspaceDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="items-center justify-center gap-2 max-w-[521px] px-[70px] pt-[100px] pb-[60px]">
				<DialogHeader className="text-title-sm">
					해당 워크스페이스를 삭제하시겠습니까?
				</DialogHeader>
				<DialogDescription className="text-center mb-4 text-text-lg text-zinc-400">
					삭제하기를 누르시면 해당 워크스페이스가 삭제됩니다.
				</DialogDescription>
				<DialogFooter className="sm:justify-center">
					<Button
						size="lg"
						variant="primary"
						className="bg-sub-red hover:bg-[#DC2626]"
					>
						삭제하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default DeleteWorkspaceDialog;
