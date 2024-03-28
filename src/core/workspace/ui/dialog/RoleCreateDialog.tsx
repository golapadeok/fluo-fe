import { Button } from "@/lib/ui/button";
import { Checkbox } from "@/lib/ui/checkbox";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/lib/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/lib/ui/tooltip";
import { Info, PlusIcon } from "lucide-react";

const RoleCreateDialog = () => {
	const labelClasses = "pb-3 font-semibold text-text-md";
	const inputClasses =
		"border-gray-300 bg-zinc-50 focus:bg-white border rounded-[10px] py-3 pl-4 h-11 text-sm focus:outline-main-400";
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"primary"} size={"xl"} className="gap-2">
					<PlusIcon />
					역할 생성하기
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[760px] p-[38px] gap-y-9">
				<DialogHeader className="text-title-sm h-[38px] flex flex-row gap-x-[10px]">
					역할 생성하기 <span>3/5</span>
				</DialogHeader>
				<div className="flex flex-col">
					<label htmlFor="roleName" className={labelClasses}>
						역할 이름
					</label>
					<input
						id="roleName"
						className={inputClasses}
						placeholder="역할 이름을 입력해 주세요."
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="roleDesc" className={labelClasses}>
						역할 설명
					</label>
					<input
						id="roleDesc"
						className={inputClasses}
						placeholder="추가할 역할에 대한 설명을 입력해주세요."
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="permissions"
						className="pb-3 font-semibold text-text-md"
					>
						권한 추가
					</label>
					<div className="grid items-center grid-cols-2 text-sm border border-zinc-300 h-[200px]">
						{Array.from({ length: 10 }, (_, index) => ({
							id: index.toString(),
							roleName: "역할 삭제",
							roleDesc: "이것은 툴팁이다.",
						})).map((role) => (
							<div className="flex items-center h-10 px-2 py-[10px] space-x-2">
								<Checkbox id="rolesDelete" />
								<label
									htmlFor="rolesDelete"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									{role.roleName}
								</label>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<Info width={18} height={18} className="text-zinc-400" />
										</TooltipTrigger>
										<TooltipContent side={"right"}>
											{role.roleDesc}
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						))}
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline" size="lg">
							취소하기
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button variant="primary" size="lg">
							저장하기
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default RoleCreateDialog;
