const ProgressCell = ({
  progress = 0,
}) => {
  return (
    <div className="flex items-center gap-3 min-w-[180px]">

      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">

        <div
          className="
            h-full
            rounded-full
            bg-blue-600
            transition-all
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <span className="text-sm font-medium text-slate-700 w-10 text-right">
        {progress}%
      </span>

    </div>
  );
};

export default ProgressCell;