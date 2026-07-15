const TimelineSection = ({
  values,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Timeline
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Start Date */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Start Date
          </label>

          <input
            type="date"
            value={values.startDate}
            onChange={(e) =>
              onChange(
                "startDate",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Target Date */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Target Date
          </label>

          <input
            type="date"
            value={values.targetDate}
            onChange={(e) =>
              onChange(
                "targetDate",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Completed Date */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Completed Date
          </label>

          <input
            type="date"
            value={values.completedDate}
            onChange={(e) =>
              onChange(
                "completedDate",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

      </div>

    </div>
  );
};

export default TimelineSection;