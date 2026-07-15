import {
  FileText,
  Clock3,
  CheckCircle2,
  Globe,
} from "lucide-react";

const StatCard = ({
  icon,
  title,
  value,
  iconBg,
  iconColor,
}) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

      </div>

      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>

    </div>

  </div>
);

const DevelopmentPlanStats = ({
  plans = [],
}) => {

  const total =
    plans.length;

  const inProgress =
    plans.filter(
      (plan) =>
        plan.status ===
        "IN_PROGRESS"
    ).length;

  const completed =
    plans.filter(
      (plan) =>
        plan.status ===
        "COMPLETED"
    ).length;

  const published =
    plans.filter(
      (plan) =>
        plan.isPublished
    ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Total Plans"
        value={total}
        icon={<FileText size={26} />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatCard
        title="In Progress"
        value={inProgress}
        icon={<Clock3 size={26} />}
        iconBg="bg-yellow-100"
        iconColor="text-yellow-600"
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={<CheckCircle2 size={26} />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <StatCard
        title="Published"
        value={published}
        icon={<Globe size={26} />}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
      />

    </div>
  );
};

export default DevelopmentPlanStats;