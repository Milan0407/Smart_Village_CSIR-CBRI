import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";

import { formatCurrency } from "../../../../../../utils/formatters";

const StatCard = ({
  icon,
  title,
  value,
  color,
}) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-sm text-slate-500">

          {title}

        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-800">

          {value}

        </h3>

      </div>

      <div
        className={`
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          ${color}
        `}
      >
        {icon}
      </div>

    </div>

  </div>
);

const DevelopmentStats = ({ plans }) => {

  const totalProjects = plans.length;

  const completedProjects =
    plans.filter(
      (plan) => plan.status === "COMPLETED"
    ).length;

  const inProgressProjects =
    plans.filter(
      (plan) => plan.status === "IN_PROGRESS"
    ).length;

  const totalBudget =
    plans.reduce(
      (sum, plan) =>
        sum + (plan.budget || 0),
      0
    );

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Total Projects"
        value={totalProjects}
        icon={
          <FolderKanban
            size={26}
            className="text-blue-700"
          />
        }
        color="bg-blue-100"
      />

      <StatCard
        title="Completed"
        value={completedProjects}
        icon={
          <CheckCircle2
            size={26}
            className="text-green-700"
          />
        }
        color="bg-green-100"
      />

      <StatCard
        title="In Progress"
        value={inProgressProjects}
        icon={
          <Clock3
            size={26}
            className="text-yellow-700"
          />
        }
        color="bg-yellow-100"
      />

{/* <StatCard
  title="Total Budget"
  value={formatCurrency(totalBudget)}
  icon={
    <IndianRupee
      size={26}
      className="text-purple-700"
    />
  }
  color="bg-purple-100"
/> */}

    </div>

  );
};

export default DevelopmentStats;