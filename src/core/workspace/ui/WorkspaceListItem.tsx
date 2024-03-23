import { MoreVertical } from "lucide-react";

const WorkspaceListItem = () => {
	return (
		<div className="relative flex flex-col justify-center items-center gap-5 w-[188px] h-[188px] pt-[35px] border-2 border-zinc-300 rounded-[10px] bg-bg-secondary shadow-3 hover:border-main-600">
			<div className="w-[68px] h-[68px] rounded-full bg-[#D9D9D9]" />
			<div className="text-lg font-medium">워크스페이스1</div>
			<div>
				<MoreVertical className="absolute top-[15px] right-2.5" />
			</div>
		</div>
	);
};

export default WorkspaceListItem;
