const AboutMission = ({
  data = {},
}) => {
  const {
    heading =
      "About Smart Village Mission",

    description =
      "The Smart Village Mission aims to transform rural communities through sustainable development, technology adoption, infrastructure improvement, and knowledge-based growth.",

    features = [],
  } = data;

  return (
    <section
      className="py-20 bg-white"
      id="mission"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {heading}
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map(
            (
              feature,
              index
            ) => (
              <div
                key={index}
                className="
                  p-8
                  rounded-xl
                  shadow-md
                  border
                "
              >
                <h3 className="text-xl font-semibold mb-3">
                  {
                    feature.title
                  }
                </h3>

                <p className="text-slate-600">
                  {
                    feature.description
                  }
                </p>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default AboutMission;