import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/lib/ui/select";
import PriorityRating from "@/core/task/ui/PriorityRating";

const PrioritySelect = ({ triggerClassnames }: { triggerClassnames?: string }) => {
  return (
    <Select>
      <SelectTrigger className={`${triggerClassnames}`}>
        <SelectValue placeholder="중요도" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="1">
          <PriorityRating priority={1} />
        </SelectItem>
        <SelectItem value="2">
          <PriorityRating priority={2} />
        </SelectItem>
        <SelectItem value="3">
          <PriorityRating priority={3} />
        </SelectItem>
        <SelectItem value="4">
          <PriorityRating priority={4} />
        </SelectItem>
        <SelectItem value="5">
          <PriorityRating priority={5} />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PrioritySelect;
