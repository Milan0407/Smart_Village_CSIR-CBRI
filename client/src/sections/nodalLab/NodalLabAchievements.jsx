const NodalLabHero = ({
  data = {},
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          {data.heading}
        </h2>

        <p className="mt-4 text-slate-600">
          {
            data.description ||
            data.subHeading
          }
        </p>

      </div>
    </section>
  );
};

export default NodalLabHero;