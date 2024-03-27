import WorkspaceDelete from "@/core/workspace/ui/WorkspaceDelete";
import WorkspaceImageUpload from "@/core/workspace/ui/WorkspaceImageUpload";
import WorkspaceInfoEdit from "@/core/workspace/ui/WorkspaceInfoEdit";

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
				<WorkspaceInfoEdit />
				<WorkspaceImageUpload />
				<div>
					<h5 className="text-text-md font-semibold">워크스페이스 생성 날짜</h5>
					<div className="mt-[16px] text-text-md font-normal text-zinc-500">
						2024.04.08
					</div>
				</div>
				<WorkspaceDelete />
			</div>
		</div>
	);
}

export default AdminContent;
