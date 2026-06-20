const AboutValues = ({
  data = {},
}) => {
  const {
    heading =
      "Core Values",

    values = [],
  } = data;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Core Values
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            {heading}
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map(
            (
              value,
              index
            ) => (
              <div
                key={index}
                className="
                  bg-slate-50
                  border
                  rounded-2xl
                  p-8
                  text-center
                  hover:shadow-lg
                  transition
                "
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {value}
                </h3>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default AboutValues;