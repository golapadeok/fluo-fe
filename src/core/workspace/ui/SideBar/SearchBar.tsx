import { Search } from "lucide-react";

/** @TODO 데이터 들어오면 검색어 필터링 기능 추가 */
function SearchBar() {
	return (
		<div className="relative w-full ">
			<input
				className="w-full h-9 pl-[41px] px-2.5 rounded-[5px] text-text-xs font-semibold bg-zinc-100 outline-none placeholder:text-zinc-400"
				placeholder="검색하기"
			/>
			<Search className="w-5 h-5 absolute top-2 left-2 text-zinc-400" />
		</div>
	);
}

export default SearchBar;
