const CultureSection = ({ culture }) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4">
        Culture & Heritage
      </h2>

      <p>{culture}</p>
    </section>
  );
};

export default CultureSection;