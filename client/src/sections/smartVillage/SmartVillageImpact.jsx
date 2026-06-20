const SmartVillageObjectives = ({ data = {} }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          {data.heading}
        </h2>

        <ul className="mt-6 space-y-3">
          {data.items?.map((item, index) => (
            <li key={index}>
              • {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default SmartVillageObjectives;