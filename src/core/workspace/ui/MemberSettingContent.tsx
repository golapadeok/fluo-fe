import MemberRoleSelect from "@/core/workspace/ui/MemberRoleSelect";
import { Avatar } from "@/lib/ui/avatar";
import { Button } from "@/lib/ui/button";
import { UserMinusIcon } from "lucide-react";

function MemberSettingContent() {
	return (
		<div className="bg-bg-primary rounded-[20px] p-[32px]">
			<header>
				<h4 className="font-semibold text-title-sm">워크스페이스 멤버 설정</h4>
				<small className="text-zinc-400">
					워크스페이스 멤버를 관리하고 초대합니다.
				</small>
			</header>
			<div className="flex gap-[20px] mt-[48px] flex-wrap w-full">
				<section className="w-full max-w-[618px]">
					<header className="flex justify-between items-center w-full">
						<h5 className="text-text-xl">워크스페이스 멤버 목록</h5>
						<div className="text-text-sm text-zinc-400">6 members</div>
					</header>
					<div className="mt-[24px] w-full">
						<ul>
							<li className="w-full flex items-center justify-between py-[12px] px-[20px] gap-[20px] last-of-type:border-b-[1px] border-zinc-200 border-t-[1px]">
								<div className="flex gap-[16px] items-center w-full">
									<Avatar className="h-[40px] w-[40px] flex-shrink-0" />
									<div className="text-text-lg text-ellipsis overflow-hidden w-[72px] whitespace-nowrap break-all">
										멤버 이름
									</div>
									<div className="text-text-lg text-zinc-400 font-normal w-[208px] text-ellipsis whitespace-nowrap break-all overflow-hidden">
										fluo_email@example.com
									</div>
								</div>
								<div className="flex items-center">
									<MemberRoleSelect />
									<Button variant="ghost" className="p-[10px] ml-[8px]">
										<UserMinusIcon className="w-[20px] h-[20px] text-zinc-400" />
									</Button>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section>
					<header>
						<h5>워크스페이스 초대</h5>
					</header>
					<div />
				</section>
			</div>
		</div>
	);
}

export default MemberSettingContent;
