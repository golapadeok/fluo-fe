import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Trash2, Upload } from "lucide-react";
import { type ChangeEvent, useState } from "react";

function AdminContent() {
	const [thumbnail, setThumbnail] = useState("");

	const handleChangeThumbnail = async (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		if (!fileList) return;

		const reader = new FileReader();
		reader.readAsDataURL(fileList[0]);
		reader.onload = (e) => {
			const target = e.target;
			if (!target) return;
			const { result } = target;
			setThumbnail(result as string);
		};
	};

	return (
		<div className="relative bg-bg-primary rounded-[20px] p-[32px] min-h-[848px]">
			<header>
				<h4 className="font-semibold text-title-sm">워크스페이스 설정</h4>
				<small className="text-zinc-400">
					워크스페이스 관련 정보들을 설정합니다.
				</small>
			</header>
			<div className="w-full flex flex-col gap-[40px] mt-[48px]">
				<div>
					<Label
						htmlFor="thumbnail"
						className="text-text-md font-semibold cursor-pointer"
					>
						워크스페이스 이미지 설정
					</Label>
					<div className="flex items-center gap-[24px]">
						<Label
							htmlFor="thumbnail"
							tabIndex={0}
							className="flex h-[256px] aspect-square bg-zinc-50 text-zinc-500 shadow-[inset_0_0_0_1.5px_var(--border)] rounded-[10px] cursor-pointer mt-[16px] focus-visible:bg-zinc-100 focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--main-400)] focus-visible:text-zinc-600 transition-all hover:bg-zinc-100 active:bg-zinc-100 hover:text-zinc-600 active:text-zinc-600"
						>
							{thumbnail ? (
								<img
									src={thumbnail}
									alt="워크스페이스 썸네일"
									width={512}
									height={512}
									className="object-cover"
								/>
							) : (
								<Upload className="m-auto h-[28px] w-[28px]" />
							)}
						</Label>
						<Input
							id="thumbnail"
							name="thumbnail"
							type="file"
							tabIndex={-1}
							accept="image/*"
							className="w-0 h-0 p-0 m-0 border-0 shadow-none hidden"
							onChange={handleChangeThumbnail}
						/>
						<div className="flex flex-col gap-[16px]">
							<Button variant="primary" className="py-[8px] px-[12px] h-[40px]">
								새 이미지 업로드
							</Button>
							<Button variant="outline" className="py-[8px] px-[12px] h-[40px]">
								기본 이미지로 재설정
							</Button>
						</div>
					</div>
				</div>
				<div>
					<Label
						htmlFor="name"
						className="text-text-md font-semibold cursor-pointer"
					>
						워크스페이스 이름 설정
						<span className="text-sub-red">*</span>
					</Label>
					<div className="mt-[16px] flex gap-[16px] items-center">
						<Input
							id="name"
							name="name"
							placeholder="워크스페이스 이름 입력"
							className="min-w-[320px] h-[40px] py-[8px] px-[12px] placeholder:font-normal"
						/>
						<Button
							variant="primary"
							className="h-[40px] text-text-sm text-sub-white"
						>
							저장하기
						</Button>
					</div>
				</div>
				<div>
					<h5 className="text-text-md font-semibold">워크스페이스 생성 날짜</h5>
					<div className="mt-[16px] text-text-md font-normal text-zinc-500">
						2024.04.08
					</div>
				</div>
				<div>
					<Button
						variant="destructive_outline"
						className="font-semibold gap-[4px]"
					>
						<Trash2 className="w-[20px] h-[20px]" />
						워크스페이스 삭제하기
					</Button>
				</div>
			</div>
		</div>
	);
}

export default AdminContent;
