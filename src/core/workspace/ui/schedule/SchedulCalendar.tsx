import { useState } from "react";
import { PlusIcon } from "lucide-react";
import {
	addDays,
	addMonths,
	format,
	isBefore,
	isEqual,
	isSameDay,
	isSameMonth,
	startOfMonth,
	startOfWeek,
} from "date-fns";
import { useTaskHover, type Task } from "@/core/workspace/ui/schedule";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";

interface Schedule {
	[date: string]: [Task | null, Task | null];
}

interface WaitingTask {
	task: Task;
	unassignedDates: string[];
}

interface SchedulCalendarDayCellProps {
	date: Date;
	tasks: (Task | null)[];
	showMore?: WaitingTask[];
	isCurrentMonth: boolean;
	columnIndex: number;
}

function assignTasksCorrectly(tasks: Task[]): {
	schedule: Schedule;
	waitingList: WaitingTask[];
} {
	const schedule: Schedule = {};
	const waitingList: WaitingTask[] = [];
	const activeTasks: [Task | null, Task | null] = [null, null];

	const startDates = tasks.map((task) => task.dateInfo.startDate);
	const endDates = tasks.map((task) => task.dateInfo.endDate);
	const startDate = new Date(
		Math.min(...startDates.map((date) => date.getTime())),
	);
	const endDate = new Date(Math.max(...endDates.map((date) => date.getTime())));
	let currentDate = new Date(startDate);

	while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
		const dateString = format(currentDate, "yyyy-MM-dd");
		schedule[dateString] = [null, null];

		activeTasks.forEach((task, index) => {
			if (
				task &&
				(isBefore(currentDate, task.dateInfo.endDate) ||
					isEqual(currentDate, task.dateInfo.endDate))
			) {
				schedule[dateString][index] = task;
			} else {
				activeTasks[index] = null;
			}
		});

		for (const task of tasks) {
			if (
				(isBefore(task.dateInfo.startDate, currentDate) ||
					isEqual(task.dateInfo.startDate, currentDate)) &&
				(isBefore(currentDate, task.dateInfo.endDate) ||
					isEqual(currentDate, task.dateInfo.endDate))
			) {
				const taskNotActive = !activeTasks.includes(task);
				const index = schedule[dateString].indexOf(null);
				if (taskNotActive && index !== -1) {
					schedule[dateString][index] = task;
					activeTasks[index] = task;
					if (!task.actualStartDate) task.actualStartDate = currentDate;
				} else if (taskNotActive) {
					const waitingTaskIndex = waitingList.findIndex(
						(wt) => wt.task.taskId === task.taskId,
					);
					if (waitingTaskIndex === -1) {
						waitingList.push({
							task,
							unassignedDates: [format(currentDate, "yyyy-MM-dd")],
						});
					} else {
						waitingList[waitingTaskIndex].unassignedDates.push(
							format(currentDate, "yyyy-MM-dd"),
						);
					}
				}
			}
		}

		currentDate = addDays(currentDate, 1);
	}

	return { schedule, waitingList };
}

const SchedulCalendarDayCell: React.FC<SchedulCalendarDayCellProps> = ({
	date,
	isCurrentMonth,
	tasks,
	showMore,
	columnIndex,
}) => {
	const { hoveredTaskId, setHoveredTaskId } = useTaskHover();

	const isFirstRow = columnIndex < 7;
	const isLastRow = columnIndex >= 35;
	const isFirstColumn = columnIndex % 7 === 0;
	const isLastColumn = (columnIndex + 1) % 7 === 0;

	const cellBaseClasses =
		"flex flex-col w-32 h-[108px] py-2 border text-sm max-w-full overflow-visible";
	const cellColorClass = isCurrentMonth ? "text-black" : "text-gray-400";
	const cornerClasses = isFirstRow
		? (isFirstColumn ? "rounded-tl-lg" : "") +
		  (isLastColumn ? " rounded-tr-lg" : "")
		: isLastRow
		  ? (isFirstColumn ? "rounded-bl-lg" : "") +
			  (isLastColumn ? " rounded-br-lg" : "")
		  : "";
	const overflowHiddenClass = isFirstColumn || isLastColumn ? "" : "";
	const cellClasses = `${cellBaseClasses} ${cellColorClass} ${cornerClasses} ${overflowHiddenClass}`;

	const dateString = format(date, "yyyy-MM-dd");

	// 해당 날짜에 대한 태스크가 슬롯을 초과하는지 확인
	const isOverflow = showMore?.some((waitingTask) =>
		waitingTask.unassignedDates.includes(dateString),
	);

	return (
		<div className={cellClasses}>
			<header className="pl-2 font-bold">{format(date, "d")}</header>
			<div className="flex flex-col flex-grow gap-1">
				{tasks?.map((task) => {
					if (!task) {
						return <div className="h-5" key={`empty-${date.toISOString()}`} />;
					}

					const isHovered = task.taskId === hoveredTaskId;
					const isStartLabel = isSameDay(
						date,
						task.actualStartDate ?? task.dateInfo.startDate,
					);
					const isEndLabel = isSameDay(date, task.dateInfo.endDate);
					const isOneDay = isStartLabel && isEndLabel;

					const labelBaseClasses =
						"relative h-5 p-2 flex items-center text-xs whitespace-nowrap gap-0.5 py-0.5";
					const labelColorClasses = isHovered ? "bg-main-100" : "bg-zinc-100";

					const getLabelClasses = (props: Record<string, boolean>) => {
						const {
							isHovered,
							isOneDay,
							isStartLabel,
							isEndLabel,
							isLastColumn,
							isFirstColumn,
						} = props;
						const roundedDefault = "rounded-md";
						const roundedLeft = "rounded-l-md";
						const roundedRight = "rounded-r-md";
						const marginDefault = "mx-1.5";
						const marginLeft = "ml-1.5";
						const marginRight = "mr-1.5";
						const widthDefault = "w-28";
						const widthHover = "w-32";
						const widthColumn = "w-[118px]";

						if (!isHovered || isOneDay)
							return `${roundedDefault} ${marginDefault} ${widthDefault}`;
						if (isStartLabel) {
							//시작일 라벨
							if (isFirstColumn) {
								return `${roundedLeft}`;
							}
							if (isLastColumn) {
								return `${roundedDefault} ${marginDefault}`;
							}
							return `${roundedLeft} ${marginLeft} ${widthHover}`;
							//마감일 라벨
						}
						if (isEndLabel) {
							if (isFirstColumn) {
								return `${roundedDefault} ${marginDefault}`;
							}
							if (isLastColumn) {
								return `${roundedRight} ${widthHover}`;
							}
							return `${roundedRight} ${marginRight}`;
						}
						//일반 라벨
						if (isLastColumn) {
							return `${roundedRight} ${marginRight} ${widthColumn}`;
						}
						if (isFirstColumn) {
							return `${roundedLeft} ${marginLeft} ${widthHover}`;
						}
						return widthHover;
					};
					const labelOptionalClasses = getLabelClasses({
						isHovered,
						isOneDay,
						isStartLabel,
						isEndLabel,
						isFirstColumn,
						isLastColumn,
					});

					return (
						<div
							key={task.taskId}
							onMouseEnter={() => setHoveredTaskId(task.taskId)}
							onMouseLeave={() => setHoveredTaskId(undefined)}
							className={`${labelBaseClasses} ${labelColorClasses} ${labelOptionalClasses}`}
						>
							{(isHovered ? isStartLabel : true) && (
								<div
									className={`flex items-center gap-0.5 h-5 ${
										isHovered ? "" : "w-full"
									}`}
								>
									<div
										className={`w-0.5 h-1 py-1.5 mr-0.5 ml-1 ${
											isHovered ? "bg-main-300" : "bg-zinc-300"
										}`}
									/>
									<span className="truncate text-[10px]">
										{task.taskInfo.title}
									</span>
								</div>
							)}
						</div>
					);
				})}
			</div>
			{isOverflow && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="h-5 p-2 mt-1 flex items-center text-xs whitespace-nowrap gap-0.5 py-0.5 bg-zinc-100 rounded-md w-28 mx-1.5 cursor-pointer">
							<PlusIcon width={12} className="text-zinc-400" />
							<span>더보기</span>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-white" align="start">
						<DropdownMenuLabel>{dateString}</DropdownMenuLabel>
						<DropdownMenuSeparator className="bg-zinc-300" />
						{showMore?.map((ofTask) => {
							return (
								<DropdownMenuItem key={ofTask.task.taskId}>
									{ofTask.task.taskInfo.title}
								</DropdownMenuItem>
							);
						})}
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	);
};

const SchedulCalendar: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
	const [currentDate, setCurrentDate] = useState(new Date());

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
						const dateString = format(date, "yyy-MM-dd");
						const result = assignTasksCorrectly(tasks);
						const dailyTasks = result.schedule[dateString];
						const filteredOfTasks = result.waitingList?.filter((waitingTask) =>
							waitingTask.unassignedDates.includes(dateString),
						);
						return (
							<SchedulCalendarDayCell
								key={date.toString()}
								date={date}
								tasks={dailyTasks}
								showMore={filteredOfTasks}
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

export default SchedulCalendar;
