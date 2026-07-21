import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const ObjectivesContent = ({
  data,
}) => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <span
            className="
              text-blue-600
              uppercase
              tracking-widest
              font-semibold
            "
          >
            Mission Statement
          </span>

          <h2
            className="
              text-4xl
              font-bold
              mt-3
            "
          >
            {data?.heading}
          </h2>

        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-10
            text-left
          "
        >
          <SmartTextRenderer
            text={data?.description}
            className="max-w-4xl"
          />
        </div>

      </div>

    </section>
  );
};

export default ObjectivesContent;
