import WorkspaceDelete from "@/core/workspace/ui/WorkspaceDelete";
import { WorkspaceInfo } from "@/core/workspace/ui/WorkspaceInfo";

function AdminContent() {
	return (
		<div className="relative bg-bg-primary rounded-[20px] p-[32px] min-h-[848px]">
			<header>
				<h4 className="font-semibold text-title-sm">워크스페이스 설정</h4>
				<small className="text-zinc-400">
					워크스페이스 관련 정보들을 설정합니다.
				</small>
			</header>
			<div className="w-full flex flex-col gap-[40px] mt-[48px]">
				<WorkspaceInfo.Editable.Title />
				<WorkspaceInfo.Editable.Image />
				<WorkspaceInfo.UnEditable.CreatedDate />
				<WorkspaceDelete />
			</div>
		</div>
	);
}

export default AdminContent;
