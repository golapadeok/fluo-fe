import SearchBar from "@/core/workspace/ui/SideBar/SearchBar";
import WorkspaceAccordion from "@/core/workspace/ui/SideBar/WorkspaceAccordion";
import { ListPlus } from "lucide-react";
import { useEffect, useState } from "react";

type SideBarProps = {
	isOpen: boolean;
};

function SideBar({ isOpen }: SideBarProps) {
	const [distance, setDistance] = useState<number>(300);

	useEffect(() => {
		const observeResize = () => {
			const target = document
				.querySelector("#workspaceInfo")
				?.getBoundingClientRect().left;
			setDistance(target ?? 300);
		};
		observeResize();
		window.addEventListener("resize", observeResize);
		return () => window.removeEventListener("resize", observeResize);
	}, []);
	return (
		<aside
			style={{ left: `${distance}px` }}
			className={`${
				isOpen ? "hidden" : "flex"
			} flex-col gap-[14px] transition-all ease-out fixed z-10 w-[203px] inset-y-0 rounded-[20px] py-[14px] px-[11px] bg-bg-primary shadow-4`}
		>
			<SearchBar />
			<WorkspaceAccordion />
			<div className="flex gap-2 items-center text-zinc-400 text-text-xs font-semibold">
				<ListPlus /> 워크스페이스 추가
			</div>
			<div className="text-zinc-400 text-text-xs font-semibold pl-[30px]">
				워크스페이스 생성하기
			</div>
			<div className="text-zinc-400 text-text-xs font-semibold pl-[30px]">
				초대 받은 워크스페이스
			</div>
		</aside>
	);
}

export default SideBar;
