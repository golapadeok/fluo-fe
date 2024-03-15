import type { ReactNode } from "react";
import SideBarLeftIcon from "@/assets/images/sidebar-left.svg";
import SideBarRightIcon from "@/assets/images/sidebar-right.svg";
import SettingIcon from "@/assets/images/setting.svg";
import { Link } from "@tanstack/react-router";

type SubHeaderProps = {
	isOpen: boolean;
	onToggle: () => void;
	workspaceInfo: { name: string; id: string };
	memberDropDown: ReactNode;
};

function SubHeader({
	isOpen,
	onToggle,
	workspaceInfo,
	memberDropDown,
}: SubHeaderProps) {
	return (
		<section className="max-w-[1920px] h-[60px] shrink-0 border-b-[zinc-50] border-b border-solid">
			<div className="max-w-[1320px] h-[60px] m-auto flex justify-between items-center">
				<div
					className={`flex items-center gap-[25px] text-title-sm ${
						isOpen ? "pl-[236px]" : "pl-0"
					} transition-all ease-linear`}
				>
					{isOpen ? (
						<button type="button" onClick={onToggle}>
							<img src={SideBarLeftIcon} alt="사이드바 접기" />
						</button>
					) : (
						<button type="button" onClick={onToggle}>
							<img src={SideBarRightIcon} alt="사이드바 열기" />
						</button>
					)}
					{workspaceInfo.name}
				</div>
				<div className="flex items-center gap-[21px]">
					{memberDropDown}
					<Link
						to="/workspaces/$workspaceId/admin"
						params={{ workspaceId: workspaceInfo.id }}
					>
						<img src={SettingIcon} alt="워크스페이스 관리" />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default SubHeader;
