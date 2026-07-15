import { Target } from "lucide-react";

const ObjectivesSection = ({ plan }) => {
  const objectives = plan.objectives || [];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
          <Target className="text-green-600" size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Project Objectives
          </h2>

          <p className="text-slate-500">
            Goals and expected outcomes of this project
          </p>
        </div>

      </div>

      {objectives.length === 0 ? (

        <p className="text-slate-500">
          No objectives have been added yet.
        </p>

      ) : (

        <div className="space-y-4">

          {objectives.map((objective, index) => (

            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-slate-50"
            >

              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold flex-shrink-0">

                {index + 1}

              </div>

              <p className="text-slate-700 leading-7">

                {objective}

              </p>

            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default ObjectivesSection;