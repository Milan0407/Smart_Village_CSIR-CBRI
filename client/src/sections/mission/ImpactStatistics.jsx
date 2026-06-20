const ImpactStatistics = ({
  data = {},
}) => {
  const {
    heading =
      "Smart Village Impact",

    description =
      "Key indicators reflecting rural transformation initiatives.",

    stats = [],
  } = data;

  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-white">
            {heading}
          </h2>

          <p className="text-blue-100 mt-4">
            {description}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map(
            (stat, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  text-center
                  shadow-lg
                "
              >
                <h3 className="text-5xl font-bold text-blue-900 mb-3">
                  {stat.value}
                  {stat.suffix}
                </h3>

                <p className="text-slate-600">
                  {stat.label}
                </p>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default ImpactStatistics;