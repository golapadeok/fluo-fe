import WorkspaceAccordion from "@/core/workspace/ui/WorkspaceAccordion";
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
			<span>검색하기</span>
			<WorkspaceAccordion />
		</aside>
	);
}

export default SideBar;
