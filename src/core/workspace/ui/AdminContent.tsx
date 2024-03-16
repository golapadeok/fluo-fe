import { Button } from "@/lib/ui/button";
import { Separator } from "@/lib/ui/separator";

function AdminContent() {
	return (
		<>
			<header>
				<h3 className="text-title-sm font-semibold">워크스페이스 설정</h3>
			</header>
			<div className="rounded-[20px] bg-bg-secondary p-[24px] mt-[10px]">
				<div className="flex gap-[24px]">
					<section>
						<header>
							<h4 className="text-title-sm font-semibold">
								워크스페이스 기본 설정
							</h4>
						</header>
						<div />
					</section>
					<Separator orientation="vertical" className="bg-zinc-300 h-[604px]" />
					<section>
						<header>
							<h4 className="text-title-sm font-semibold">
								워크스페이스 멤버 관리
							</h4>
						</header>
						<div />
					</section>
				</div>
				<div className="flex gap-2 mt-[40px]">
					<Button variant="secondary">워크스페이스 삭제하기</Button>
				</div>
			</div>
		</>
	);
}

export default AdminContent;
