import {
	type Dispatch,
	type SetStateAction,
	useState,
	createContext,
	useContext,
} from "react";
import {
	format,
	startOfMonth,
	startOfWeek,
	addDays,
	isSameMonth,
	addMonths,
	isSameDay,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TaskDataInfo {
	asignee: string[];
	creator: string;
	title: string;
	description: string;
	priority: number;
	isPrivate: boolean;
}

interface Task {
	taskId: string;
	taskInfo: TaskDataInfo;
	dateInfo: {
		startDate: Date;
		endDate: Date;
	};
}

interface TaskWithSlot extends Task {
	slot: number;
}

interface SchedulCalendarDayCellProps {
	date: Date;
	tasks: TaskWithSlot[];
	isCurrentMonth: boolean;
	columnIndex: number;
}

interface TaskHoverContextType {
	hoveredTaskId: string | undefined;
	setHoveredTaskId: Dispatch<SetStateAction<string | undefined>>;
}

const TodoItem = ({ dateInfo, taskId, taskInfo: { title } }: Task) => {
	const { setHoveredTaskId } = useTaskHover();
	return (
		<div
			className="flex items-center justify-between p-4 my-4 border bg-zinc-100 rounded-2xl w-60"
			onMouseEnter={() => setHoveredTaskId(taskId)}
			onMouseLeave={() => setHoveredTaskId(undefined)}
		>
			<div className="flex items-center justify-between p-4 text-xs font-semibold border-l-4 border-red-500 rounded-r-lg whitespace-nowrap">
				{title}
			</div>
			<div className="flex flex-col items-center text-xs">
				<span>{format(new Date(dateInfo.startDate), "yyyy/MM/dd")}</span>~
				<span>{format(new Date(dateInfo.endDate), "yyyy/MM/dd")}</span>
			</div>
		</div>
	);
};

const TodoList = ({ tasks }: { tasks: Task[] }) => {
	return (
		<div className="p-8 bg-white rounded-lg shadow h-full w-[296px]">
			<header className="flex items-center">
				<span className="h-8 text-xl">4월 3주차 업무 리스트</span>
				<ChevronLeft />
				<ChevronRight />
			</header>
			{tasks.map((task: Task) => {
				return <TodoItem key={task.taskId} {...task} />;
			})}
		</div>
	);
};

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

const SchedulCalendarDayCell: React.FC<SchedulCalendarDayCellProps> = ({
	date,
	isCurrentMonth,
	tasks,
	columnIndex,
}) => {
	const { hoveredTaskId, setHoveredTaskId } = useTaskHover();
	const isFirstRow = columnIndex < 7;
	const isLastRow = columnIndex >= 35;
	const isFirstColumn = columnIndex % 7 === 0;
	const isLastColumn = (columnIndex + 1) % 7 === 0;

	const cornerClasses = `${isFirstRow && isFirstColumn ? "rounded-tl-lg" : ""} 
                      ${isFirstRow && isLastColumn ? "rounded-tr-lg" : ""} 
                      ${isLastRow && isFirstColumn ? "rounded-bl-lg" : ""} 
                      ${
												isLastRow && isLastColumn ? "rounded-br-lg" : ""
											}`.trim();

	const cellClasses = `flex flex-col w-32 h-[108px] py-2 border text-sm relative box-border ${
		isCurrentMonth ? "text-black" : "text-gray-400"
	} ${cornerClasses}`;

	const dailyTasks = tasks.filter(
		(task) => task.dateInfo.startDate <= date && task.dateInfo.endDate >= date,
	);

	const renderTasksLabel = (
		taskSlotIndex: number,
		filteredTasks: TaskWithSlot[],
	) => {
		return filteredTasks
			.filter((task) => task.slot === taskSlotIndex)
			.map((task) => {
				const isStart = isSameDay(date, task.dateInfo.startDate);
				const isEnd = isSameDay(date, task.dateInfo.endDate);
				const isOneDay = isStart && isEnd;

				const borderClasses = isOneDay
					? "rounded-md"
					: isStart
					  ? "rounded-l-md border-r-0"
					  : isEnd
						  ? "rounded-r-md border-l-0"
						  : "border-l-0 border-r-0";

				const positionClasses = isFirstColumn
					? "left-0"
					: isLastColumn
					  ? "right-0"
					  : "";
				const highlightClasses =
					hoveredTaskId === task.taskId ? "bg-indigo-200" : "bg-indigo-100";
				const labelClasses = `absolute flex items-center w-32 h-full text-xs whitespace-nowrap border border-indigo-400 ${highlightClasses} ${borderClasses} ${positionClasses}`;

				return isSameDay(date, task.dateInfo.startDate) ? (
					<div
						key={`${
							task.taskInfo.title
						}-${taskSlotIndex}-${date.toISOString()}`}
						className={`${labelClasses} z-20`}
						onMouseEnter={() => setHoveredTaskId(task.taskId)}
						onMouseLeave={() => setHoveredTaskId(undefined)}
					>
						<div className="absolute w-0.5 h-4 bg-indigo-300 mx-1" />
						<span className="absolute ml-2 border-indigo-400">
							{task.taskInfo.title}
						</span>
					</div>
				) : (
					<div
						key={`${
							task.taskInfo.title
						}-${taskSlotIndex}-${date.toISOString()}`}
						className={`${labelClasses} z-10`}
						onMouseEnter={() => setHoveredTaskId(task.taskId)}
						onMouseLeave={() => setHoveredTaskId(undefined)}
					>
						&nbsp;
					</div>
				);
			});
	};

	return (
		<div className={cellClasses}>
			<header className="pl-2 mb-2 font-bold">{format(date, "d")}</header>
			<div className="flex flex-col flex-grow gap-0.5">
				{[0, 1, 2].map((slotIndex) => {
					return (
						<div key={slotIndex} className="relative flex items-center flex-1">
							{renderTasksLabel(slotIndex, dailyTasks)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const SchedulCalendar: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
	const [currentDate, setCurrentDate] = useState(new Date());

	// 태스크에 슬롯 번호 부여 로직
	const assignSlotsToTasks = (tasks: Task[]): TaskWithSlot[] => {
		const tasksWithSlots: TaskWithSlot[] = [];

		for (const task of tasks) {
			let slotFound = false;
			let currentSlot = 0;

			while (!slotFound) {
				// 현재 슬롯에 할당된 태스크가 있는지 검사
				const isSlotOccupied = tasksWithSlots.some(
					(t) =>
						t.slot === currentSlot &&
						((t.dateInfo.startDate <= task.dateInfo.startDate &&
							t.dateInfo.endDate >= task.dateInfo.startDate) ||
							(t.dateInfo.startDate <= task.dateInfo.endDate &&
								t.dateInfo.endDate >= task.dateInfo.endDate)),
				);

				if (!isSlotOccupied) {
					// 슬롯이 비어 있으면 태스크에 슬롯 할당
					tasksWithSlots.push({ ...task, slot: currentSlot });
					slotFound = true;
				} else {
					// 슬롯이 이미 차 있으면 다음 슬롯 검사
					currentSlot++;
				}
			}
		}

		return tasksWithSlots;
	};

	const tasksWithSlots = assignSlotsToTasks(tasks);
	const startDate = startOfWeek(startOfMonth(currentDate));

	const days = Array.from({ length: 42 }, (_, i) => addDays(startDate, i));
	const prevMonth = () => {
		setCurrentDate(addMonths(currentDate, -1));
	};

	const nextMonth = () => {
		setCurrentDate(addMonths(currentDate, 1));
	};

	return (
		<div className="w-full py-8 bg-white rounded-lg">
			<div className="flex flex-col items-center justify-center">
				<header className="flex items-center justify-center w-full gap-8 p-4">
					<button
						type="button"
						onClick={prevMonth}
						className="bg-blue-100 size-8"
					>
						&lt;
					</button>
					<span className="text-[32px] font-semibold">
						{format(currentDate, "yyyy.MM")}
					</span>
					<button
						type="button"
						onClick={nextMonth}
						className="bg-blue-100 size-8"
					>
						&gt;
					</button>
				</header>
				<div className="grid grid-cols-7 grid-rows-6 m-2">
					{days.map((date, index) => {
						return (
							<SchedulCalendarDayCell
								key={date.toString()}
								date={date}
								tasks={tasksWithSlots}
								isCurrentMonth={isSameMonth(date, currentDate)}
								columnIndex={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

const CalendarComponent = () => {
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
				endDate: new Date("2024-03-12T00:00:00"),
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

export default CalendarComponent;
