import MemberDropDown from "@/core/workspace/ui/MemberDropDown";
import { Link } from "@tanstack/react-router";
import { ChevronsLeft, ChevronsRight, Settings } from "lucide-react";

type SubHeaderProps = {
	isOpen: boolean;
	onClickChevronButton: () => void;
	workspaceData: { name: string; id: string };
};

function SubHeader({
	isOpen,
	onClickChevronButton,
	workspaceData,
}: SubHeaderProps) {
	return (
		<header className="w-full px-8 h-[60px] shrink-0 border-b-[zinc-50] border-b border-solid bg-bg-primary">
			<div className="max-w-[1320px] h-[60px] m-auto flex justify-between items-center">
				<div
					id="workspaceInfo"
					className={`flex items-center gap-[25px] text-title-sm ${
						isOpen ? "pl-[236px]" : "pl-0"
					} transition-all ease-linear relative`}
				>
					<button type="button" onClick={onClickChevronButton}>
						{isOpen ? <ChevronsLeft /> : <ChevronsRight />}
					</button>
					{workspaceData.name}
				</div>
				<div className="flex items-center gap-[21px]">
					<MemberDropDown />
					<Link
						to="/workspaces/$workspaceId/admin"
						params={{ workspaceId: workspaceData.id }}
					>
						<Settings className="text-zinc-400" />
					</Link>
				</div>
			</div>
		</header>
	);
}

export default SubHeader;
