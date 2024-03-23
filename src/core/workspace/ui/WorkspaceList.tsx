import WorkspaceListItem from "@/core/workspace/ui/WorkspaceListItem";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/lib/ui/carousel";

/** 캐러셀 형식의 워크스페이스 목록 */
function WorkspaceList() {
	/** @TODO 데이터 들어오면 /8 해서 페이지 넘기게 */
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-[836px] m-auto"
		>
			<CarouselContent>
				{Array.from({ length: 2 }).map(() => (
					<CarouselItem className="w-[836px] flex flex-wrap gap-7">
						{/* @TODO 데이터 들어오면 map으로 반복해서 데이터 전달 */}
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
						<WorkspaceListItem />
					</CarouselItem>
				))}
			</CarouselContent>
			{/* @TODO 커서에 따라 화살표 보이고 가리기 */}
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export default WorkspaceList;
