import { Award } from "lucide-react";

const HighlightsSection = ({ highlights = [] }) => {
  if (!highlights.length) return null;

  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Village Highlights
        </h2>

        <p className="text-slate-500 mt-2">
          Major achievements and key initiatives.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {highlights.map((item,index) => (

          <div
             key={`${item.title}-${index}`}
            className="
              border
              rounded-xl
              p-6
              hover:shadow-lg
              transition
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="bg-blue-100 p-3 rounded-full">

                <Award
                  size={22}
                  className="text-blue-700"
                />

              </div>

              <h3 className="text-xl font-semibold">

                {item.title}

              </h3>

            </div>

            <p className="text-slate-600 leading-7">

              {item.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default HighlightsSection;