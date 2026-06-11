const schemes = [
  {
    title: "PM Awas Yojana",
    category: "Housing",
    description:
      "Affordable housing initiative supporting rural infrastructure development.",
  },
  {
    title: "Jal Jeevan Mission",
    category: "Water",
    description:
      "Ensuring safe and adequate drinking water supply to rural households.",
  },
  {
    title: "Digital India",
    category: "Technology",
    description:
      "Promoting digital empowerment and online service accessibility.",
  },
  {
    title: "MGNREGA",
    category: "Employment",
    description:
      "Generating livelihood opportunities and strengthening rural economy.",
  },
];

const PoliciesSection = () => {
  return (
    <section
      id="policies"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            GOVERNMENT SCHEMES
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Policies & Schemes
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Explore central and state initiatives supporting
            sustainable rural development and smart village transformation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {schemes.map((scheme) => (
            <div
              key={scheme.title}
              className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <span className="text-sm text-blue-700 font-medium">
                {scheme.category}
              </span>

              <h3 className="text-xl font-semibold mt-3 mb-3">
                {scheme.title}
              </h3>

              <p className="text-slate-600">
                {scheme.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PoliciesSection;