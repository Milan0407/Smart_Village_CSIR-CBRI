import { Globe2 } from "lucide-react";

const SDGSection = ({ plan }) => {
  const sdgGoals = plan.sdgGoals || [];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">

          <Globe2
            className="text-emerald-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Sustainable Development Goals
          </h2>

          <p className="text-slate-500">
            SDGs supported by this development project.
          </p>

        </div>

      </div>

      {sdgGoals.length === 0 ? (

        <p className="text-slate-500">
          No SDGs have been assigned to this project.
        </p>

      ) : (

        <div className="flex flex-wrap gap-4">

          {sdgGoals.map((goal) => (

            <div
              key={goal}
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-green-500
                text-white
                flex
                items-center
                justify-center
                text-xl
                font-bold
                shadow
              "
            >
              {goal}
            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default SDGSection;