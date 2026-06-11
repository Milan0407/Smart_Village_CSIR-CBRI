const objectives = [
  {
    title: "Infrastructure Development",
    description:
      "Enhancing rural infrastructure including roads, housing, sanitation, and public facilities.",
  },
  {
    title: "Healthcare Accessibility",
    description:
      "Improving healthcare services and access to medical facilities for rural communities.",
  },
  {
    title: "Quality Education",
    description:
      "Promoting digital learning, literacy, and educational opportunities.",
  },
  {
    title: "Agricultural Innovation",
    description:
      "Encouraging modern farming practices and sustainable agricultural technologies.",
  },
  {
    title: "Digital Inclusion",
    description:
      "Connecting villages through digital infrastructure and e-governance services.",
  },
  {
    title: "Environmental Sustainability",
    description:
      "Supporting eco-friendly development and responsible resource management.",
  },
];

const MissionObjectives = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Smart Village Mission
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Mission Objectives
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            The Smart Village initiative focuses on sustainable,
            technology-driven development to improve quality of life,
            strengthen rural infrastructure, and empower communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                <div className="w-6 h-6 rounded-full bg-blue-700"></div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {objective.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionObjectives;