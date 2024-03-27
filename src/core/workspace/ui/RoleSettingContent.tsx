import {
	RoleCreateDialog,
	RoleModifyDialog,
	RoleDeleteDialog,
} from "@/core/workspace/ui/dialog";
import { useOpen } from "@/pages/workspaces/_workspaceLayout";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

interface RoleItemProps {
	roleName?: string;
	length: number;
}

const RoleBadge: React.FC<{ name: string }> = ({ name }) => (
	<div className="py-1 px-2.5 rounded-2xl bg-main-100 items-center text-center text-main-600 font-semibold whitespace-nowrap h-8 w-[206px] mb-5">
		{name}
	</div>
);

//constants
const INIT_ITEM_HEIGHT = 48;

const RoleItem: React.FC<RoleItemProps> = ({ length }) => {
	const [isOverFlow, setIsOverFlow] = useState(false);
	const [isShowMore, setIsShowMore] = useState(false);
	const [height, setHeight] = useState(INIT_ITEM_HEIGHT);
	const { isOpen } = useOpen();

	const itemRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const itemEl = itemRef.current;
		if (itemEl) {
			const columns = isOpen ? 4 : 5;
			const rows = Math.ceil(length / columns);
			const itemHeight = rows * INIT_ITEM_HEIGHT;

			setIsOverFlow(length > columns);
			setHeight(itemHeight);
		}
	}, [length, isOpen]);

	return (
		<div className="border rounded-md px-6 min-h-[139px] pb-4 pt-[26px] bg-white border-zinc-400">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<span className="text-lg font-semibold">새로운 그룹원 초대</span>
					<div className="flex items-center justify-center w-auto h-6 text-white rounded-full min-w-6 text-text-sm bg-main-600 py-0.5 px-2">
						{length}
					</div>
				</div>
				<div className="flex gap-6 text-zinc-400">
					<RoleModifyDialog />
					<RoleDeleteDialog />
				</div>
			</header>
			<section className="relative pt-[19px] flex items-center">
				<div
					className="flex flex-wrap overflow-hidden duration-200 gap-x-8 transition-height"
					ref={itemRef}
					style={{
						height: isShowMore ? `${height}px` : `${INIT_ITEM_HEIGHT}px`,
					}}
				>
					{Array.from({ length }, (_, index) => ({
						id: index.toString(),
						name: "그룹(워크스페이스) 관리 권한",
					})).map((item) => {
						return <RoleBadge key={item.id} name={item.name} />;
					})}
				</div>
				{isOverFlow && (
					<div
						className={`z-10 absolute top-[8px] right-0 flex justify-end w-[152px] h-[49px] p-0.5 ${
							!isShowMore
								? "bg-gradient-to-r from-transparent from-0% to-sub-white to-50%"
								: ""
						}`}
					>
						<button
							type="button"
							onClick={() => setIsShowMore((prev) => !prev)}
							aria-expanded={isShowMore}
							className="mt-[12px] mb-[13px] mr-3 rounded-full bg-main-600 size-6"
						>
							<ChevronDown
								className={`text-white h-5 ${isShowMore ? "rotate-180" : ""}`}
							/>
						</button>
					</div>
				)}
			</section>
		</div>
	);
};

const RoleSettingContent = () => {
	return (
		<div className="flex flex-col h-full gap-4 p-8 bg-white rounded-[10px]">
			<header className="flex items-center justify-between w-full mb-8">
				<div className="flex flex-col">
					<span className="text-title-sm">워크스페이스 역할 설정</span>
					<span className="text-xs text-zinc-400">
						해당 워크스페이스의 역할을 설정하고 편집할 수 있습니다.
					</span>
				</div>
				<RoleCreateDialog />
			</header>
			<span className="text-text-xl">워크스페이스 내 역할 리스트</span>
			<main className="flex flex-col h-full gap-6">
				<RoleItem length={9} />
				<RoleItem length={3} />
				<RoleItem length={12} />
				<RoleItem length={4} />
				<RoleItem length={9} />
			</main>
		</div>
	);
};

export default RoleSettingContent;
