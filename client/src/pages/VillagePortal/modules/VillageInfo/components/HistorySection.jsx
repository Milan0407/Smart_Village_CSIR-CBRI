const HistorySection = ({ history }) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4">
        History
      </h2>

      <p>{history}</p>
    </section>
  );
};

export default HistorySection;