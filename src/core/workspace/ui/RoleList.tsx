import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/lib/ui/button";

import { ChevronDown, Pencil, PlusIcon, X } from "lucide-react";

interface RoleItemProps {
	roleName?: string;
	length: number;
}

//constants
const INIT_ITEM_HEIGHT = 40;
const ITEM_GAP = 32;

const RoleItem: React.FC<RoleItemProps> = ({ length }) => {
	const [isOverFlow, setIsOverFlow] = useState(false);
	const [isShowCard, setIsShowCard] = useState(false);
	const [height, setHeight] = useState(INIT_ITEM_HEIGHT);

	const itemRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const itemEl = itemRef.current;
		if (itemEl) {
			const itemWidth = itemEl.offsetWidth;
			const itemChildren = itemEl.children;

			const totalItemsWidth = Array.from(itemChildren).reduce(
				(totalWidth, child) => {
					const item = child as HTMLElement;
					return totalWidth + item.offsetWidth + ITEM_GAP;
				},
				0,
			);

			setIsOverFlow(totalItemsWidth > itemWidth);

			// 실제 높이 계산 후 설정
			setHeight(itemEl.scrollHeight);
		}
	}, []);

	const RoleBadge: React.FC<{ name: string }> = ({ name }) => (
		<div className="py-1 px-2.5 rounded-2xl bg-main-100 items-center text-center text-main-600 font-semibold whitespace-nowrap h-8">
			{name}
		</div>
	);

	return (
		<div className={"border rounded-md p-7 w-full bg-white"}>
			<header className="flex items-center justify-between mb-5">
				<span className="text-lg font-semibold">새로운 그룹원 초대</span>
				<div className="flex gap-[27px]">
					<Pencil className="text-zinc-400" />
					<X />
				</div>
			</header>
			<div
				className={
					"relative flex gap-x-8 gap-y-2 overflow-hidden flex-wrap duration-300 transition-height"
				}
				ref={itemRef}
				style={{ height: isShowCard ? `${height}px` : `${INIT_ITEM_HEIGHT}px` }}
			>
				{Array.from({ length }, (_, index) => ({
					id: index.toString(),
					name: "그룹(워크스페이스) 관리 권한",
				})).map((item) => {
					return <RoleBadge key={item.id} name={item.name} />;
				})}
				{isOverFlow && (
					<div
						className={`absolute top-0 right-0 flex justify-end w-32 h-full rounded-r-2xl items-end ${
							!isShowCard
								? "bg-gradient-to-r from-transparent to-sub-white"
								: ""
						}`}
					>
						<button
							type="button"
							onClick={() => setIsShowCard((prev) => !prev)}
							aria-expanded={isShowCard}
							className="rounded-full bg-main-600 size-6"
						>
							<ChevronDown
								className={`transition-transform duration-300 cursor-pointer text-white h-5 ${
									isShowCard ? "rotate-180" : ""
								}`}
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const RoleList = () => {
	return (
		<>
			<header className="flex items-center justify-between mb-8">
				<span className="text-title-sm">워크스페이스 내 역할 리스트</span>
				<Button variant={"primary"} size={"xl"} className="gap-2">
					<PlusIcon />
					역할 생성하기
				</Button>
			</header>
			<main className="flex flex-col h-full gap-4 p-8 bg-white">
				<RoleItem length={6} />
				<RoleItem length={8} />
				<RoleItem length={3} />
			</main>
		</>
	);
};

export default RoleList;
