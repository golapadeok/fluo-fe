import AddWorkspaceAccordion from "@/core/workspace/ui/SideBar/AddWorkspaceAccordion";
import SearchBar from "@/core/workspace/ui/SideBar/SearchBar";
import WorkspaceListAccordion from "@/core/workspace/ui/SideBar/WorkspaceListAccordion";
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
			} flex-col gap-[14px] transition-all ease-out fixed z-10 w-[203px] inset-y-0 top-[73px] rounded-[20px] py-[14px] px-[11px] bg-bg-primary shadow-4`}
		>
			<SearchBar />
			<WorkspaceListAccordion />
			<AddWorkspaceAccordion />
		</aside>
	);
}

export default SideBar;
