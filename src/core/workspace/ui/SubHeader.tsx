import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronsLeft, ChevronsRight, Settings } from "lucide-react";

type SubHeaderProps = {
	isOpen: boolean;
	onToggle: () => void;
	workspaceInfo: { name: string; id: string };
	memberDropDown: ReactNode;
	sideBar: ReactNode;
};

function SubHeader({
	isOpen,
	onToggle,
	workspaceInfo,
	memberDropDown,
	sideBar,
}: SubHeaderProps) {
	return (
		<section className="max-w-[1920px] h-[60px] shrink-0 border-b-[zinc-50] border-b border-solid bg-bg-primary">
			<div className="max-w-[1320px] h-[60px] m-auto flex justify-between items-center">
				<div
					id="workspaceInfo"
					className={`flex items-center gap-[25px] text-title-sm ${
						isOpen ? "pl-[236px]" : "pl-0"
					} transition-all ease-linear relative`}
				>
					<button type="button" onClick={onToggle}>
						{isOpen ? <ChevronsLeft /> : <ChevronsRight />}
					</button>
					{workspaceInfo.name}
					{sideBar}
				</div>
				<div className="flex items-center gap-[21px]">
					{memberDropDown}
					<Link
						to="/workspaces/$workspaceId/admin"
						params={{ workspaceId: workspaceInfo.id }}
					>
						<Settings className="text-zinc-400" />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default SubHeader;
