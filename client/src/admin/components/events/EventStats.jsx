import {
  CalendarDays,
  Trophy,
  Star,
  CheckCircle2,
} from "lucide-react";

const EventStats = ({
  events = [],
}) => {
  const stats = [
    {
      title: "Total",
      value: events.length,
      icon: CalendarDays,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Events",
      value: events.filter(
        (item) => item.type === "EVENT"
      ).length,
      icon: CalendarDays,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Achievements",
      value: events.filter(
        (item) =>
          item.type === "ACHIEVEMENT"
      ).length,
      icon: Trophy,
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Featured",
      value: events.filter(
        (item) => item.isFeatured
      ).length,
      icon: Star,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-800">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={28} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2
                size={16}
                className="text-green-600"
              />

              <span>Updated automatically</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventStats;