import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const ContactHero = ({
  data = {},
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold">
          {data.heading}
        </h1>

        <SmartTextRenderer
          text={data.description}
          className="mt-4 max-w-4xl"
        />

      </div>
    </section>
  );
};

export default ContactHero;
