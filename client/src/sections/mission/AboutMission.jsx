const AboutMission = () => {
  return (
    <section className="py-20 bg-white" id="mission">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            About Smart Village Mission
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            The Smart Village Mission aims to transform rural communities
            through sustainable development, technology adoption,
            infrastructure improvement, and knowledge-based growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold mb-3">
              Sustainable Development
            </h3>

            <p className="text-slate-600">
              Promoting environmentally responsible and long-term rural growth.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold mb-3">
              Technology Integration
            </h3>

            <p className="text-slate-600">
              Leveraging digital tools and innovation for village advancement.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold mb-3">
              Community Empowerment
            </h3>

            <p className="text-slate-600">
              Enabling villagers through education, skills, and participation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMission;