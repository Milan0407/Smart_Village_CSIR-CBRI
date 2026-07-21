import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const CSIRLabsHero = ({
  data = {},
}) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          {data.heading}
        </h2>

        <SmartTextRenderer
          text={
            data.description ||
            data.subHeading
          }
          className="mt-4 max-w-4xl"
        />

      </div>
    </section>
  );
};

export default CSIRLabsHero;
