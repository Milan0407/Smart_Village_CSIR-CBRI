import {
  CalendarDays,
  Target,
  Flag,
  FolderOpen,
} from "lucide-react";

import ProgressBar from "./ProgressBar";

import {
  formatDate,
  formatStatus,
} from "../../../../../utils/formatters";

const statusColor = {
  PLANNED:
    "bg-slate-100 text-slate-700",

  IN_PROGRESS:
    "bg-yellow-100 text-yellow-700",

  COMPLETED:
    "bg-green-100 text-green-700",

  ON_HOLD:
    "bg-red-100 text-red-700",

  CANCELLED:
    "bg-gray-100 text-gray-700",
};

const categoryColor = {
  AGRICULTURE:
    "bg-green-100 text-green-700",

  INFRASTRUCTURE:
    "bg-blue-100 text-blue-700",

  EDUCATION:
    "bg-purple-100 text-purple-700",

  HEALTH:
    "bg-red-100 text-red-700",

  WATER:
    "bg-cyan-100 text-cyan-700",

  ENERGY:
    "bg-yellow-100 text-yellow-700",

  DIGITAL:
    "bg-indigo-100 text-indigo-700",

  SANITATION:
    "bg-teal-100 text-teal-700",

  SKILL_DEVELOPMENT:
    "bg-orange-100 text-orange-700",

  OTHER:
    "bg-slate-100 text-slate-700",
};

const ProjectHeader = ({ plan }) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

        <div className="flex-1">

          <div className="flex flex-wrap gap-3 mb-5">

            <span
              className={`
                px-4
                py-1.5
                rounded-full
                text-sm
                font-medium
                ${categoryColor[plan.category] || categoryColor.OTHER}
              `}
            >
              {plan.category.replaceAll("_", " ")}
            </span>

            <span
              className={`
                px-4
                py-1.5
                rounded-full
                text-sm
                font-medium
                ${statusColor[plan.status]}
              `}
            >
              {formatStatus(plan.status)}
            </span>

          </div>

          <h1 className="text-4xl font-bold text-slate-800 leading-tight">

            {plan.title}

          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">

            {plan.description}

          </p>

        </div>

      </div>

      <div className="mt-10">

        <ProgressBar value={plan.progress} />

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <InfoCard
          icon={<FolderOpen size={20} />}
          label="Category"
          value={plan.category.replaceAll("_", " ")}
        />

        <InfoCard
          icon={<Target size={20} />}
          label="Progress"
          value={`${plan.progress}%`}
        />

        <InfoCard
          icon={<Flag size={20} />}
          label="Priority"
          value={plan.priority}
        />

        <InfoCard
          icon={<CalendarDays size={20} />}
          label="Target Date"
          value={formatDate(plan.targetDate)}
        />

      </div>

    </section>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
}) => (
  <div className="rounded-xl bg-slate-50 p-5">

    <div className="flex items-center gap-3 text-blue-600 mb-3">

      {icon}

      <span className="text-sm font-medium">

        {label}

      </span>

    </div>

    <p className="font-semibold text-slate-800">

      {value || "-"}

    </p>

  </div>
);

export default ProjectHeader;