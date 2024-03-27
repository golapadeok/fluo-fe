import { Avatar } from "@/lib/ui/avatar";
import { Button } from "@/lib/ui/button";
import { Separator } from "@/lib/ui/separator";
import { LogOut, User } from "lucide-react";

function UserInfoCard() {
	return (
		<div className="w-[290px] pt-[30px] flex flex-col shrink-0 bg-bg-primary shadow-3">
			<div className="w-full px-[41px] flex flex-col items-center gap-4 mb-4">
				<Avatar className="flex items-center justify-center w-20 h-20 bg-main-200">
					<User className="w-14 h-14 text-main-600" />
				</Avatar>
				<h1 className="text-text-md font-semibold">홍길동</h1>
				<p className="flex justify-center items-center w-full rounded-2xl bg-bg-secondary py-1 text-text-sm">
					fluo_email@example.com
				</p>
			</div>
			<Separator />
			<Button>
				<LogOut className="mr-1 w-5 h-5" />
				로그아웃
			</Button>
		</div>
	);
}

export default UserInfoCard;
