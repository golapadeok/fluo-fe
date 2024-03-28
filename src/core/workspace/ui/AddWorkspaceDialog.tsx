import { Button } from "@/lib/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import { useState, type ReactNode } from "react";

type AddWorkspaceDialogProps = {
	trigger: ReactNode;
};

function AddWorkspaceDialog({ trigger }: AddWorkspaceDialogProps) {
	const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

	return (
		<Dialog
			onOpenChange={(e: boolean) => {
				if (e === false) {
					setIsConfirmed(false);
				}
			}}
		>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="p-[38px] max-w-[760px] gap-9">
				{isConfirmed ? (
					<>
						<div className="flex flex-col gap-6 items-center justify-center m-auto w-[682px] h-[334px]">
							<DialogHeader className="text-title-sm items-center">
								해당 워크스페이스를 생성하시겠습니까?
							</DialogHeader>
							<DialogDescription className="text-text-lg text-zinc-400">
								확인을 누르시면 해당 워크스페이스가 생성됩니다.
							</DialogDescription>
							<DialogFooter className="justify-center gap-6">
								<Button
									onClick={() => setIsConfirmed(false)}
									variant="outline"
									size="lg"
								>
									취소하기
								</Button>
								<Button
									variant="primary"
									size="lg"
									onClick={() => setIsConfirmed(true)}
								>
									저장하기
								</Button>
							</DialogFooter>
						</div>
					</>
				) : (
					<>
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
							<Button
								variant="primary"
								size="lg"
								onClick={() => setIsConfirmed(true)}
							>
								저장하기
							</Button>
						</DialogFooter>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default AddWorkspaceDialog;
