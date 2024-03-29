import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Upload } from "lucide-react";
import { type ChangeEvent, useState } from "react";

function WorkspaceImageUpload() {
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
	);
}

export default WorkspaceImageUpload;
