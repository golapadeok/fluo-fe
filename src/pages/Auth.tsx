import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Auth")({
	component: Auth,
});

const Logo = () => {
	return (
		<div className="mb-16">
			<img src="http://via.placeholder.com/180x170" alt="Fluo 로고" />
		</div>
	);
};

const ButtonGroup = () => {
	return (
		<div className="flex flex-col gap-5 w-[300px]">
			<button
				type="button"
				className="flex items-center px-4 py-3 text-sm font-medium text-black border-2 border-gray-300 rounded-lg"
			>
				<img src="http://via.placeholder.com/17x17" alt="Google 로고" />
				<span className="w-full">Google 계정으로 시작하기</span>
			</button>
			<button
				type="button"
				className="flex items-center px-4 py-3 text-sm font-medium text-white bg-green-500 rounded-lg "
			>
				<img src="http://via.placeholder.com/17x17" alt="네이버 로고" />
				<span className="w-full">네이버 계정으로 시작하기</span>
			</button>
		</div>
	);
};

function Auth() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
			<Logo />
			<div className="mt-2">
				<ButtonGroup />
			</div>
			<div className="flex item-center mt-5 w-[300px]">
				<input className="" type="checkbox" />
				<span className="ml-2 text-sm text-gray-400">로그인 상태 유지</span>
			</div>
		</div>
	);
}

export default Auth;
