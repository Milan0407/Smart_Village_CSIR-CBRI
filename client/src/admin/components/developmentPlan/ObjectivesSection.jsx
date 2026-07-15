import { Plus, Trash2 } from "lucide-react";

const ObjectivesSection = ({
  values,
  setValues,
}) => {
  const addObjective = () => {
    setValues((prev) => ({
      ...prev,
      objectives: [
        ...prev.objectives,
        "",
      ],
    }));
  };

  const updateObjective = (
    index,
    value
  ) => {
    const updated = [
      ...values.objectives,
    ];

    updated[index] = value;

    setValues((prev) => ({
      ...prev,
      objectives: updated,
    }));
  };

  const removeObjective = (
    index
  ) => {
    const updated =
      values.objectives.filter(
        (_, i) => i !== index
      );

    setValues((prev) => ({
      ...prev,
      objectives:
        updated.length > 0
          ? updated
          : [""],
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-semibold">
          Objectives
        </h2>

        <button
          type="button"
          onClick={addObjective}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
          "
        >
          <Plus size={18} />

          Add Objective
        </button>

      </div>

      <div className="space-y-4">

        {values.objectives.map(
          (
            objective,
            index
          ) => (
            <div
              key={index}
              className="flex gap-3"
            >

              <input
                type="text"
                value={objective}
                placeholder={`Objective ${
                  index + 1
                }`}
                onChange={(e) =>
                  updateObjective(
                    index,
                    e.target.value
                  )
                }
                className="
                  flex-1
                  border
                  rounded-lg
                  px-3
                  py-2
                "
              />

              <button
                type="button"
                onClick={() =>
                  removeObjective(
                    index
                  )
                }
                className="
                  p-2
                  rounded-lg
                  text-red-600
                  hover:bg-red-50
                "
              >
                <Trash2 size={20} />
              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default ObjectivesSection;