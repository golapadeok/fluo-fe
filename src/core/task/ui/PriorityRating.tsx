const priorityColor = ["bg-[#D9D9D9]", "bg-sub-blue", "bg-sub-green", "bg-sub-yellow", "bg-sub-orange", "bg-sub-red"];

const PriorityRating = ({ priority }: { priority: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingItem key={value} value={value} priority={priority} priorityColor={priorityColor[priority]} />
      ))}
    </div>
  );
};

interface RatingItemProps {
  value: number;
  priority: number;
  priorityColor: string;
}

const RatingItem = ({ value, priority, priorityColor }: RatingItemProps) => {
  return <div className={`w-2 h-2 rounded-full ${priority >= value ? priorityColor : "bg-gray-300"}`} />;
};

export default PriorityRating;
