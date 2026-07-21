import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const CBRISection = ({
  data = {},
}) => {
  const {
    heading =
      "Vision & Objectives",

    description =
      "CSIR-CBRI is committed to advancing rural transformation through research, innovation, sustainable development, and technology-driven solutions.",

    features = [],
  } = data;

  return (
    <section
      id="cbri"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            CSIR-CBRI ROORKEE
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            {heading}
          </h2>

          <SmartTextRenderer
            text={description}
            className="mt-4 max-w-3xl"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-8
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <SmartTextRenderer
                  text={item.description}
                  className="max-w-none"
                />

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default CBRISection;
