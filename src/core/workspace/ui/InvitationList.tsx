const InvitationList = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
			<InvitationListItem />
		</div>
	);
};

const InvitationListItem = () => {
	return (
		<div className="flex justify-between items-center w-full px-14 py-6 rounded-lg bg-bg-secondary shadow-3">
			<div className="text-lg font-medium">Team/Fluo</div>
			<div className="flex gap-[30px]">
				<button
					type="button"
					className="px-6 py-0.5 rounded-[10px] bg-[#D9D9D9] text-base font-semibold"
				>
					수락
				</button>
				<button
					type="button"
					className="px-6 py-0.5 rounded-[10px] bg-[#D9D9D9] text-base font-semibold"
				>
					거절
				</button>
			</div>
		</div>
	);
};

export default InvitationList;
