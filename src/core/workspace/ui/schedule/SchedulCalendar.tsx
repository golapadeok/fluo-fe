import type { Task } from "@/core/workspace/ui/schedule";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SchedulCalendarDayCell } from "@/core/workspace/ui/schedule/SchedulCalendarDayCell";
import { useState } from "react";
import {
	addDays,
	addMonths,
	format,
	isBefore,
	isEqual,
	isSameMonth,
	startOfMonth,
	startOfWeek,
} from "date-fns";
export interface TaskWithColor extends Task {
	color: string;
}
interface Schedule {
	[date: string]: [TaskWithColor | null, TaskWithColor | null];
}

interface WaitingTask {
	task: TaskWithColor;
	unassignedDates: string[];
}

function assignTasksCorrectly(tasks: TaskWithColor[]): {
	schedule: Schedule; // 최종 작업 일정
	waitingList: WaitingTask[]; // 할당되지 않은 작업들의 목록
} {
	// 일정 및 대기 목록 초기화
	const schedule: Schedule = {};
	const waitingList: WaitingTask[] = [];
	// 동시에 진행할 수 있는 작업 수를 2로 제한
	const activeTasks: [TaskWithColor | null, TaskWithColor | null] = [
		null,
		null,
	];

	// 작업의 시작 및 종료 날짜를 추출
	const startDates = tasks.map((task) => task.dateInfo.startDate);
	const endDates = tasks.map((task) => task.dateInfo.endDate);
	// 전체 작업 기간을 계산하기 위해 최소 시작 날짜 및 최대 종료 날짜를 찾음
	const startDate = new Date(
		Math.min(...startDates.map((date) => date.getTime())),
	);
	const endDate = new Date(Math.max(...endDates.map((date) => date.getTime())));
	// 현재 날짜를 최소 시작 날짜로 초기화
	let currentDate = new Date(startDate);

	// 현재 날짜가 종료 날짜 이전이거나 같은 동안 반복
	while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
		// 현재 날짜를 문자열로 변환하여 일정에 추가
		const dateString = format(currentDate, "yyyy-MM-dd");
		schedule[dateString] = [null, null];

		// 이미 활성화된 작업이 있으면 일정에 추가
		activeTasks.forEach((task, index) => {
			if (
				task &&
				(isBefore(currentDate, task.dateInfo.endDate) ||
					isEqual(currentDate, task.dateInfo.endDate))
			) {
				schedule[dateString][index] = task;
			} else {
				// 활성 작업이 종료되면 null로 설정
				activeTasks[index] = null;
			}
		});
		// 모든 작업을 순회하며 현재 날짜에 할당할 작업 찾기
		for (const task of tasks) {
			if (
				(isBefore(task.dateInfo.startDate, currentDate) ||
					isEqual(task.dateInfo.startDate, currentDate)) &&
				(isBefore(currentDate, task.dateInfo.endDate) ||
					isEqual(currentDate, task.dateInfo.endDate))
			) {
				// 현재 작업이 아직 활성화되지 않았는지 확인
				const taskNotActive = !activeTasks.includes(task);
				const index = schedule[dateString].indexOf(null);
				if (taskNotActive && index !== -1) {
					// 작업을 일정에 할당
					schedule[dateString][index] = task;
					activeTasks[index] = task;
					if (!task.actualStartDate) task.actualStartDate = currentDate;
				} else if (taskNotActive) {
					// 작업을 대기 목록에 추가
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

const SchedulCalendar: React.FC<{ tasks: TaskWithColor[] }> = ({ tasks }) => {
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
		<div className="py-[38px] bg-white rounded-lg  w-[965px] h-[783px]">
			<div className="flex flex-col items-center">
				<header className="flex items-center justify-center w-full gap-x-12 h-[34px] mb-[38px]">
					<button
						type="button"
						onClick={prevMonth}
						className="w-8 h-[34px] border rounded-md flex justify-center items-center text-zinc-400"
					>
						<ChevronLeft />
					</button>
					<span className="text-[32px] font-semibold">
						{format(currentDate, "yyyy.MM")}
					</span>
					<button
						type="button"
						onClick={nextMonth}
						className="w-8 h-[34px] border rounded-md flex justify-center items-center text-zinc-400"
					>
						<ChevronRight />
					</button>
				</header>
				<div className="grid grid-cols-7 grid-rows-6">
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
