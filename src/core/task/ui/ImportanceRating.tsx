type Color = 'bg-blue-500' | 'bg-green-500' | 'bg-yellow-500' | 'bg-orange-500' | 'bg-red-500' | 'bg-gray-300';

const ImportanceRating = ({rating}:{rating:number}) => {

  const getColorForRating = (value:number) => {
    switch (true) {
      case value === 1:
        return 'bg-blue-500';
      case value === 2:
        return 'bg-green-500';
      case value === 3:
        return 'bg-yellow-500';
      case value === 4:
        return 'bg-orange-500';
      case value === 5:
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingItem
          key={value}
          value={value}
          currentValue={rating}
          getColorForRating={getColorForRating}
        />
      ))}
    </div>
  );
}

interface RatingItemProps {
  value:number;
  currentValue:number;
  getColorForRating:(value:number) => Color;
}

const RatingItem = ({
  value,
  currentValue,
  getColorForRating,
}:RatingItemProps) => {

  return (
    <div
      className={`w-2 h-2 rounded-full ${
        currentValue >= value ? getColorForRating(currentValue) : 'bg-gray-300'
      }`}
    />
  );
}

export default ImportanceRating;
