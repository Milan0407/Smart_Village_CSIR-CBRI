import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const AboutOverview = ({
  data,
}) => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">

          <span
            className="
              text-blue-600
              uppercase
              tracking-widest
              font-semibold
            "
          >
            Overview
          </span>

          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
              mt-3
            "
          >
            Transforming Rural India Through Innovation
          </h2>

        </div>

        <SmartTextRenderer
          text={data?.description}
        />

      </div>

    </section>
  );
};

export default AboutOverview;
