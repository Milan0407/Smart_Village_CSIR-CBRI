const SmartVillageHero = ({ data = {} }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold">
          {data.heading}
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          {data.subHeading}
        </p>
      </div>
    </section>
  );
};

export default SmartVillageHero;