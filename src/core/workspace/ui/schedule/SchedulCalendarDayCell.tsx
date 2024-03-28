import { useTaskHover } from "@/core/workspace/ui/schedule";
import type { TaskWithColor } from "@/core/workspace/ui/schedule/SchedulCalendar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { format, isSameDay } from "date-fns";
import { PlusIcon } from "lucide-react";

interface WaitingTask {
	task: TaskWithColor;
	unassignedDates: string[];
}

interface SchedulCalendarDayCellProps {
	date: Date;
	tasks: (TaskWithColor | null)[];
	showMore?: WaitingTask[];
	isCurrentMonth: boolean;
	columnIndex: number;
}

export const SchedulCalendarDayCell: React.FC<SchedulCalendarDayCellProps> = ({
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
	const cellClasses = `${cellBaseClasses} ${cellColorClass} ${cornerClasses}`;

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

					const labelColorsVariant: Record<
						string,
						{ background: string; stick: string }
					> = {
						red: { background: "bg-red-100", stick: "bg-red-300" },
						orange: { background: "bg-orange-100", stick: "bg-orange-300" },
						yellow: { background: "bg-yellow-100", stick: "bg-yellow-300" },
						green: { background: "bg-green-100", stick: "bg-green-300" },
						blue: { background: "bg-blue-100", stick: "bg-blue-300" },
					};

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
						}
						//마감일 라벨
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
							className={`${labelBaseClasses} ${labelOptionalClasses} ${
								labelColorsVariant[task.color].background
							}`}
						>
							{(isHovered ? isStartLabel : true) && (
								<div
									className={`flex flex-1 items-center gap-0.5 h-5 ${
										isHovered ? "" : "w-full"
									}`}
								>
									<div
										className={`w-0.5 h-1 py-1.5 mr-0.5 ml-1 ${
											labelColorsVariant[task.color].stick
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
						<div className="h-5 p-2 mt-1 flex items-center text-xs whitespace-nowrap gap-0.5 py-0.5 bg-white-100 rounded-md w-28 mx-1.5 cursor-pointer border-zinc-200 border">
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
