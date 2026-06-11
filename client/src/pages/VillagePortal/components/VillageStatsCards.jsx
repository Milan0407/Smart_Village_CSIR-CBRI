import { Users, GraduationCap, Home, Map } from "lucide-react";

const VillageStatsCards = ({ village }) => {
  const stats = [
    {
      title: "Population",
      value: village.population,
      icon: Users,
    },
    {
      title: "Literacy",
      value: village.literacy,
      icon: GraduationCap,
    },
    {
      title: "Households",
      value: village.households,
      icon: Home,
    },
    {
      title: "Area",
      value: village.area,
      icon: Map,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl border p-5
shadow-sm hover:shadow-lg
transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.value}
                </h3>
              </div>

              <Icon size={26} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VillageStatsCards;