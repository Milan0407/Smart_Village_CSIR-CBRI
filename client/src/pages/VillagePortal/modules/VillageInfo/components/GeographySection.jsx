const GeographySection = ({ geography }) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4">
        Geography
      </h2>

      <p>{geography}</p>
    </section>
  );
};

export default GeographySection;