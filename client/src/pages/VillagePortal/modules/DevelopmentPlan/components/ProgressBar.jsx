const ProgressBar = ({
  value = 0,
}) => {
  const progress = Math.min(
    Math.max(value, 0),
    100
  );

  const getColor = () => {
    if (progress === 100)
      return "bg-green-600";

    if (progress >= 60)
      return "bg-blue-600";

    if (progress >= 30)
      return "bg-yellow-500";

    return "bg-red-500";
  };

  return (
    <div>

      <div className="flex justify-between items-center mb-2">

        <span className="text-sm font-medium text-slate-600">
          Progress
        </span>

        <span className="text-sm font-semibold text-slate-900">
          {progress}%
        </span>

      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className={`
            h-full
            rounded-full
            transition-all
            duration-500
            ${getColor()}
          `}
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
};

export default ProgressBar;