import {
	type Dispatch,
	type SetStateAction,
	useState,
	createContext,
	useContext,
} from "react";
import SchedulCalendar from "@/core/workspace/ui/schedule/components/SchedulCalendar";
import TodoList from "@/core/workspace/ui/schedule/components/TodoList";

interface TaskHoverContextType {
	hoveredTaskId: string | undefined;
	setHoveredTaskId: Dispatch<SetStateAction<string | undefined>>;
}

interface TaskDataInfo {
	asignee: string[];
	creator: string;
	title: string;
	description: string;
	priority: number;
	isPrivate: boolean;
}

export interface Task {
	taskId: string;
	taskInfo: TaskDataInfo;
	dateInfo: {
		startDate: Date;
		endDate: Date;
	};
	actualStartDate?: Date;
}

const TaskHoverContext = createContext<TaskHoverContextType | undefined>(
	undefined,
);

export const useTaskHover = () => {
	const context = useContext(TaskHoverContext);
	if (context === undefined) {
		throw new Error("TaskHoverContext 내에서만 사용해야 합니다.");
	}
	return context;
};

const Schedule = () => {
	const [hoveredTaskId, setHoveredTaskId] = useState<string | undefined>();
	const mockTasks: Task[] = [
		{
			taskId: "1",
			taskInfo: {
				asignee: ["user_02", "user_03"],
				creator: "user_01",
				title: "프로젝트 기획안 작성",
				description: "2024년 신규 프로젝트 기획안을 작성합니다.",
				priority: 1,
				isPrivate: false,
			},
			dateInfo: {
				startDate: new Date("2024-03-05T00:00:00"),
				endDate: new Date("2024-03-05T00:00:00"),
			},
		},
		{
			taskId: "2",
			taskInfo: {
				asignee: ["user_04"],
				creator: "user_02",
				title: "마케팅 전략 보고서 제출",
				description:
					"2024년 상반기 마케팅 전략에 대한 최종 보고서를 제출합니다.",
				priority: 2,
				isPrivate: false,
			},
			dateInfo: {
				startDate: new Date("2024-03-05T00:00:00"),
				endDate: new Date("2024-03-08T00:00:00"),
			},
		},
		{
			taskId: "3",
			taskInfo: {
				asignee: ["user_05", "user_06"],
				creator: "user_03",
				title: "새로운 UI 디자인 개발",
				description:
					"사용자 경험을 개선하기 위한 새로운 UI 디자인을 개발합니다.",
				priority: 3,
				isPrivate: false,
			},
			dateInfo: {
				startDate: new Date("2024-03-09T00:00:00"),
				endDate: new Date("2024-03-12T00:00:00"),
			},
		},
		{
			taskId: "4",
			taskInfo: {
				asignee: ["user_05", "user_06"],
				creator: "user_03",
				title: "새로운 UX 디자인 개발",
				description:
					"사용자 경험을 개선하기 위한 새로운 UX 디자인을 개발합니다.",
				priority: 3,
				isPrivate: false,
			},
			dateInfo: {
				startDate: new Date("2024-03-05T00:00:00"),
				endDate: new Date("2024-03-10T00:00:00"),
			},
		},
		{
			taskId: "5",
			taskInfo: {
				asignee: ["user_05", "user_06"],
				creator: "user_03",
				title: "새로운 UX/UI 디자인 검토",
				description:
					"사용자 경험을 개선하기 위한 새로운 UX 디자인을 개발합니다.",
				priority: 3,
				isPrivate: false,
			},
			dateInfo: {
				startDate: new Date("2024-03-09T00:00:00"),
				endDate: new Date("2024-03-15T00:00:00"),
			},
		},
	];

	return (
		<TaskHoverContext.Provider value={{ hoveredTaskId, setHoveredTaskId }}>
			<div className="flex gap-4 p-5 w-[1320px] h-[823px] bg-zinc-100 rounded-xl">
				<SchedulCalendar tasks={mockTasks} />
				<div className="flex flex-col space-y-4 w-[300px]">
					<TodoList tasks={mockTasks} />
				</div>
			</div>
		</TaskHoverContext.Provider>
	);
};

export default Schedule;