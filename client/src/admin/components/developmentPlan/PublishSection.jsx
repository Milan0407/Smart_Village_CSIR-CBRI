const statusOptions = [
  "PLANNED",
  "IN_PROGRESS",
  "ON_HOLD",
  "COMPLETED",
  "CANCELLED",
];

const priorityOptions = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
];

const sdgOptions = [
  { value: 1, label: "SDG 1 - No Poverty" },
  { value: 2, label: "SDG 2 - Zero Hunger" },
  { value: 3, label: "SDG 3 - Good Health" },
  { value: 4, label: "SDG 4 - Quality Education" },
  { value: 5, label: "SDG 5 - Gender Equality" },
  { value: 6, label: "SDG 6 - Clean Water" },
  { value: 7, label: "SDG 7 - Clean Energy" },
  { value: 8, label: "SDG 8 - Decent Work" },
  { value: 9, label: "SDG 9 - Industry & Innovation" },
  { value: 10, label: "SDG 10 - Reduced Inequalities" },
  { value: 11, label: "SDG 11 - Sustainable Communities" },
  { value: 12, label: "SDG 12 - Responsible Consumption" },
  { value: 13, label: "SDG 13 - Climate Action" },
  { value: 14, label: "SDG 14 - Life Below Water" },
  { value: 15, label: "SDG 15 - Life On Land" },
  { value: 16, label: "SDG 16 - Peace & Justice" },
  { value: 17, label: "SDG 17 - Partnerships" },
];

const PublishSection = ({
  values,
  onChange,
}) => {
  const handleSDGChange = (e) => {
    const selected = Array.from(
      e.target.selectedOptions
    ).map((option) =>
      Number(option.value)
    );

    onChange("sdgGoals", selected);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Project Status & Publishing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Status */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Status
          </label>

          <select
            value={values.status}
            onChange={(e) =>
              onChange(
                "status",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            {statusOptions.map(
              (status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status.replaceAll(
                    "_",
                    " "
                  )}
                </option>
              )
            )}
          </select>
        </div>

        {/* Priority */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Priority
          </label>

          <select
            value={values.priority}
            onChange={(e) =>
              onChange(
                "priority",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            {priorityOptions.map(
              (priority) => (
                <option
                  key={priority}
                  value={priority}
                >
                  {priority}
                </option>
              )
            )}
          </select>
        </div>

        {/* Progress */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Progress (%)
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={values.progress}
            onChange={(e) =>
              onChange(
                "progress",
                Number(e.target.value)
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Beneficiaries */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Beneficiaries
          </label>

          <input
            type="number"
            min="0"
            value={values.beneficiaries}
            onChange={(e) =>
              onChange(
                "beneficiaries",
                Number(e.target.value)
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

      </div>

      {/* SDG Goals */}

      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          SDG Goals
        </label>

        <select
          multiple
          value={values.sdgGoals}
          onChange={handleSDGChange}
          className="w-full border rounded-lg px-3 py-2 h-48"
        >
          {sdgOptions.map((goal) => (
            <option
              key={goal.value}
              value={goal.value}
            >
              {goal.label}
            </option>
          ))}
        </select>

        <p className="text-xs text-slate-500 mt-2">
          Hold Ctrl (Windows) or Cmd (Mac) to select multiple goals.
        </p>
      </div>

      {/* Publish */}

      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          id="publish"
          checked={values.isPublished}
          onChange={(e) =>
            onChange(
              "isPublished",
              e.target.checked
            )
          }
        />

        <label
          htmlFor="publish"
          className="font-medium"
        >
          Publish this Development Plan
        </label>
      </div>

    </div>
  );
};

export default PublishSection;