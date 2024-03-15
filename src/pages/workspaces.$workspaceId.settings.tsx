import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/lib/ui/button";
import { Pencil, Plus, X } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/lib/ui/accordion";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/lib/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/lib/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Route = createFileRoute("/workspaces/$workspaceId/settings")({
	component: Setting,
});

const PermissionTag = () => {
	return (
		<span className="px-2 py-1 font-semibold text-main-600 rounded-2xl bg-main-100">
			그룹(워크스페이스)관리 권한
		</span>
	);
};

const RolePermissionItem: React.FC<{ name: string; description: string }> = ({
	name,
	description,
}) => {
	const [open, setOpen] = useState(false);
	const DeleteRoleDialog = () => {
		return (
			<div className="flex flex-col items-center justify-center gap-1">
				<span className="text-title-sm">해당 역할을 삭제하시겠습니까?</span>
				<span className="text-lg text-zinc-400">
					삭제하기를 누르시면 해당 역할이 삭제됩니다.
				</span>
				<footer className="m-6">
					<Button
						type="submit"
						variant={"primary"}
						size={"sm"}
						onClick={() => setOpen(false)}
					>
						삭제하기
					</Button>
				</footer>
			</div>
		);
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<TooltipProvider>
				<Tooltip>
					<div className="flex items-center justify-between h-16 px-8 border rounded-xl w-[985px] bg-white border-zinc-400">
						<TooltipTrigger>
							<span className="flex items-center gap-8 font-semibold whitespace-nowrap">
								{name}
							</span>
						</TooltipTrigger>
						<div className="flex items-center w-full gap-3 mx-8">
							<PermissionTag />
							<PermissionTag />
							<PermissionTag />
							<Pencil className="text-zinc-400 " />
						</div>
						<div className="flex gap-2">
							<DialogTrigger asChild>
								<X color="black" className="cursor-pointer" />
							</DialogTrigger>
							<DialogContent className="p-20">
								<DeleteRoleDialog />
							</DialogContent>
						</div>
					</div>
					<TooltipContent
						side="bottom"
						align="start"
						className="text-main-600 bg-main-100"
					>
						{description}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Dialog>
	);
};

const RoleAccordion: React.FC<{ roles: roles[] }> = ({ roles }) => {
	return (
		<div className="mt-3">
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>그룹(워크스페이스)관리 권한</AccordionTrigger>
					<AccordionContent>
						{roles.map((role) => (
							<span key={role.roleId}>{role.name}</span>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

interface roles {
	roleId: string;
	name: string;
	description: string;
}

export const WorkspaceRoleManagement = () => {
	const [open, setOpen] = useState(false);
	const mock_roles: roles[] = [
		{ roleId: "1", name: "그룹 접근", description: "워크스페이스 접근 권한" },
		{
			roleId: "2",
			name: "새 그룹 멤버 초대",
			description: "워크스페이스에 새 멤버를 초대할 수 있는 권한",
		},
		{
			roleId: "3",
			name: "그룹 멤버 삭제",
			description: "워크스페이스에서 멤버를 제거할 수 있는 권한",
		},
		{
			roleId: "4",
			name: "역할 생성",
			description: "새로운 역할을 정의하고 생성할 수 있는 권한",
		},
		{
			roleId: "5",
			name: "역할 권한 목록 수정",
			description: "특정 역할에 할당된 권한을 수정할 수 있는 권한",
		},
		{
			roleId: "6",
			name: "역할 삭제",
			description: "역할을 삭제할 수 있는 권한",
		},
		{
			roleId: "7",
			name: "그룹 삭제",
			description: "워크스페이스 자체를 삭제할 수 있는 권한",
		},
		{
			roleId: "8",
			name: "역할 부여",
			description: "특정 멤버에게 특정 역할을 할당할 수 있는 권한",
		},
	];

	const CreateRoleDialog = () => {
		const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
			id,
			placeholder,
			className,
		}) => (
			<input
				type="text"
				id={id}
				className={cn(
					"w-full border border-zic-50 rounded-lg py-[14px] pl-[20px] mt-3",
					className,
				)}
				placeholder={placeholder}
			/>
		);

		return (
			<div className="flex flex-col">
				<header>
					<span className="text-title-sm">역할 생성하기</span>
				</header>
				<main className="my-9">
					<label htmlFor="name" className="font-semibold">
						역할 이름
					</label>
					<Input
						id="name"
						placeholder="역할의 이름을 입력해주세요."
						className="mb-9"
					/>
					<label htmlFor="roleName" className="font-semibold">
						추가할 권한 이름
					</label>
					<Input
						id="roleName"
						placeholder="추가할 권한의 이름을 입력해주세요."
					/>
				</main>
				<footer className="flex items-center justify-end w-full gap-7">
					<Button variant={"ghost"} size={"lg"} onClick={() => setOpen(false)}>
						취소하기
					</Button>
					<Button
						variant={"primary"}
						size={"lg"}
						type="submit"
						onClick={() => setOpen(false)}
					>
						저장하기
					</Button>
				</footer>
			</div>
		);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<div>
				<header className="flex items-center justify-between w-full py-2">
					<h1 className="flex-grow text-title-sm">
						워크스페이스 내 역할 리스트
					</h1>
					<DialogTrigger>
						<Button
							size={"xl"}
							variant={"primary"}
							className="flex items-center justify-center gap-2"
						>
							<Plus color="white" />
							<span className="text-base">역할 생성하기</span>
						</Button>
					</DialogTrigger>
				</header>

				<div className="flex flex-row gap-8 my-5">
					<main className="flex flex-col gap-6">
						{mock_roles.map((role) => (
							<RolePermissionItem key={role.roleId} {...role} />
						))}
					</main>
					<aside className="w-[296px] h-[739px] gap-3 px-5 border rounded-xl bg-white border-zinc-400">
						<div className="h-12 my-6 border-b-2 border-zinc-400">
							<h1 className="text-xl font-semibold">역할 리스트</h1>
						</div>
						<RoleAccordion roles={mock_roles} />
					</aside>
				</div>
			</div>
			<DialogContent>
				<CreateRoleDialog />
			</DialogContent>
		</Dialog>
	);
};

export default function Setting() {
	return (
		<div className="flex justify-center w-screen h-screen bg-gray-100 ">
			{/* <TapContent value='management'> */}
			<WorkspaceRoleManagement />
			{/* </TapContent> */}
		</div>
	);
}
