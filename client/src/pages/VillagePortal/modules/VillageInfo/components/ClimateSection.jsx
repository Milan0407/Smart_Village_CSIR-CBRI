const ClimateSection = ({ climate }) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4">
        Climate
      </h2>

      <p>{climate}</p>
    </section>
  );
};

export default ClimateSection;