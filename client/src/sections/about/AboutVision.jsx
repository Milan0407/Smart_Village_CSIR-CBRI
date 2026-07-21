import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const AboutVision = ({
  data = {},
}) => {
  const {
    heading =
      "Our Vision",

    description =
      "",
  } = data;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-blue-700 font-semibold uppercase tracking-wider">
          Vision
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-8">
          {heading}
        </h2>

        <SmartTextRenderer text={description} />

      </div>
    </section>
  );
};

export default AboutVision;
