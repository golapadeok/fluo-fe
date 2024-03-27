import { Button } from "@/lib/ui/button";
import { Trash2 } from "lucide-react";

function WorkspaceDelete() {
	return (
		<div>
			<Button variant="destructive_outline" className="font-semibold gap-[4px]">
				<Trash2 className="w-[20px] h-[20px]" />
				워크스페이스 삭제하기
			</Button>
		</div>
	);
}

export default WorkspaceDelete;
