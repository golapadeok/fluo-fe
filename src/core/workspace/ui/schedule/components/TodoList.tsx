import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTaskHover, type Task } from "@/core/workspace/ui/schedule";

const TodoItem = ({ dateInfo, taskId, taskInfo: { title } }: Task) => {
	const { setHoveredTaskId } = useTaskHover();
	return (
		<div
			className="flex items-center justify-between p-2 my-4 border bg-zinc-100 rounded-2xl w-60"
			onMouseEnter={() => setHoveredTaskId(taskId)}
			onMouseLeave={() => setHoveredTaskId(undefined)}
		>
			<div className="flex items-center">
				<div className="w-1 h-8 mx-2 bg-red-500" />
				<span className="text-xs font-semibold whitespace-nowrap">{title}</span>
			</div>
			<div className="flex flex-col items-center text-[10px]">
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

export default TodoList;