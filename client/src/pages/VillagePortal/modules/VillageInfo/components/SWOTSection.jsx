const SWOTSection = ({
  strengths,
  challenges,
  opportunities,
}) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">

      <h2 className="text-2xl font-bold mb-6">
        SWOT Analysis
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold text-green-700">
            Strengths
          </h3>

          <p>{strengths}</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-700">
            Challenges
          </h3>

          <p>{challenges}</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-700">
            Opportunities
          </h3>

          <p>{opportunities}</p>
        </div>

      </div>

    </section>
  );
};

export default SWOTSection;