const villages = [
  {
    id: 1,
    name: "Village One",
    district: "Roorkee",
    state: "Uttarakhand",
  },
  {
    id: 2,
    name: "Village Two",
    district: "Haridwar",
    state: "Uttarakhand",
  },
  {
    id: 3,
    name: "Village Three",
    district: "Dehradun",
    state: "Uttarakhand",
  },
  {
    id: 4,
    name: "Village Four",
    district: "Pauri",
    state: "Uttarakhand",
  },
  {
    id: 5,
    name: "Village Five",
    district: "Tehri",
    state: "Uttarakhand",
  },
];

const VillagesSection = () => {
  return (
    <section
      id="villages"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            SMART VILLAGES
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Featured Villages
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Explore village-specific information, development plans,
            achievements, maps, indicators, and community activities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {villages.map((village) => (
            <div
              key={village.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              <div className="h-48 bg-slate-300"></div>

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">
                  {village.name}
                </h3>

                <p className="text-slate-600">
                  {village.district}
                </p>

                <p className="text-slate-500 text-sm mb-4">
                  {village.state}
                </p>

                <button
                  className="text-blue-700 font-semibold"
                >
                  View Village Portal →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default VillagesSection;