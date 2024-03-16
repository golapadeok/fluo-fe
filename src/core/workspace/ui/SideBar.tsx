type SideBarProps = {
	isOpen: boolean;
};

function SideBar({ isOpen }: SideBarProps) {
	return (
		<aside
			className={`${
				isOpen ? "hidden" : "flex"
			} transition-all ease-out fixed z-10 w-[203px] inset-y-0 left-[300px] rounded-[20px] py-[14px] px-[11px] bg-bg-primary shadow-4`}
		>
			사이드바
		</aside>
	);
}

export default SideBar;
