const updates = [
  {
    title: "Village Infrastructure Development Initiative",
    date: "June 2026",
    description:
      "New infrastructure projects launched to improve connectivity and public facilities.",
  },
  {
    title: "Smart Agriculture Awareness Program",
    date: "May 2026",
    description:
      "Training sessions conducted for farmers on modern agricultural practices.",
  },
  {
    title: "Digital Literacy Campaign",
    date: "April 2026",
    description:
      "Community members participated in digital literacy and e-governance workshops.",
  },
];

const LatestUpdates = () => {
  return (
    <section
      id="updates"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            LATEST UPDATES
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            News & Announcements
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Stay informed about recent developments, initiatives,
            programs, and activities under the Smart Village Mission.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {updates.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <span className="text-sm text-blue-700 font-semibold">
                {item.date}
              </span>

              <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;