import WorkspaceList from "@/core/workspace/ui/WorkspaceList";
import { Button } from "@/lib/ui/button";
import { Plus } from "lucide-react";

function WorkSpaceListContent() {
	/** @TODO 데이터 들어오면 WorkspaceList에 전달 */
	const itemLength = 10;
	return (
		<div className="max-w-[1320px] w-full">
			{!itemLength ? (
				<>
					<div className="flex flex-col items-center gap-8 w-[302px] mx-auto mt-[300px]">
						<h1 className="text-center text-zinc-400 text-text-xl">
							소속된 워크스페이스가 없습니다.
							<br />
							새로운 워크스페이스를 생성해 볼까요?
						</h1>
						<Button variant="primary" size="xl" className="flex gap-2">
							<Plus />
							워크스페이스 생성하기
						</Button>
					</div>
				</>
			) : (
				<>
					<div className="h-[80vh] my-auto pt-[181px]">
						<WorkspaceList />
					</div>
				</>
			)}
		</div>
	);
}

export default WorkSpaceListContent;
