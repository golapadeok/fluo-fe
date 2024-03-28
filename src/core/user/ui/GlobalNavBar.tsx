import LogoIcon from "@/assets/images/Logo.png";
import UserInfoCard from "@/core/user/ui/UserInfoCard";
import { Avatar } from "@/lib/ui/avatar";
import { Popover, PopoverContent } from "@/lib/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { User } from "lucide-react";

function GlobalNavBar() {
	return (
		<nav className="w-full px-8 border-b-[1px] border-[#e8e8e8]">
			<div className="max-w-[1320px] m-auto flex items-center justify-between py-[17px]">
				<img className="h-[38px]" src={LogoIcon} alt="로고" />
				<Popover>
					<PopoverTrigger>
						<Avatar className="flex items-center justify-center bg-main-100">
							<User className="text-main-600" />
						</Avatar>
					</PopoverTrigger>
					<PopoverContent className="p-0">
						<UserInfoCard />
					</PopoverContent>
				</Popover>
			</div>
		</nav>
	);
}

export default GlobalNavBar;
