import {
  CalendarDays,
  IndianRupee,
  Building2,
  Flag,
   ArrowRight,
} from "lucide-react";

import {
  formatCurrency,
  formatDate,
  formatStatus,
} from "../../../../../utils/formatters";


import ProgressBar from "./ProgressBar";
import { Link, useParams } from "react-router-dom";

const statusColor = {
  PLANNED:
    "bg-slate-100 text-slate-700",

  "IN_PROGRESS":
    "bg-yellow-100 text-yellow-700",

  COMPLETED:
    "bg-green-100 text-green-700",

  ON_HOLD:
    "bg-red-100 text-red-700",
};

const categoryColor = {
  AGRICULTURE:
    "bg-green-100 text-green-700",

  INFRASTRUCTURE:
    "bg-blue-100 text-blue-700",

  EDUCATION:
    "bg-purple-100 text-purple-700",

  HEALTHCARE:
    "bg-red-100 text-red-700",

  WATER:
    "bg-cyan-100 text-cyan-700",

  SANITATION:
    "bg-teal-100 text-teal-700",

  ENERGY:
    "bg-yellow-100 text-yellow-700",

  DIGITAL:
    "bg-indigo-100 text-indigo-700",

  LIVELIHOOD:
    "bg-orange-100 text-orange-700",

  OTHER:
    "bg-slate-100 text-slate-700",
};

const PlanCard = ({
  plan,
}) => {
  const { slug } = useParams();
  return (
    <div
      className="
  bg-white
  rounded-2xl
  border
  border-slate-200
  shadow-sm
  p-6
  hover:shadow-xl
  hover:-translate-y-1
  transition-all
  duration-300
"
    >

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-2xl font-bold text-slate-800 leading-tight">

            {plan.title}

          </h3>

<div className="mt-3">

  <span
    className={`
      inline-flex
      items-center
      rounded-full
      px-3
      py-1
      text-sm
      font-medium
      ${categoryColor[plan.category] || categoryColor.OTHER}
    `}
  >
    {plan.category.replaceAll("_", " ")}
  </span>

</div>

        </div>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-medium

            ${
              statusColor[
                plan.status
              ]
            }
          `}
        >
          {formatStatus(plan.status)}
        </span>

      </div>

      {/* Description */}

      <p className="text-slate-600 mt-4 leading-7 line-clamp-3">

        {plan.description}

      </p>

      {/* Progress */}

      <div className="mt-8">

  <div className="flex justify-between items-center mb-3">

    <div>

      <p className="text-sm font-semibold text-slate-700">
        Project Progress
      </p>

      <p className="text-xs text-slate-500">
        Current implementation status
      </p>

    </div>

    <span className="font-semibold text-blue-600">
      {plan.progress}% Completed
    </span>

  </div>

  <ProgressBar value={plan.progress} />

</div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <Info
          icon={<IndianRupee size={18} />}
          label="Budget"
          value={formatCurrency(plan.budget)}
        />

        <Info
          icon={<Building2 size={18} />}
          label="Funding Agency"
          value={plan.fundingAgency || "-"}
        />

        <Info
          icon={<CalendarDays size={18} />}
          label="Start Date"
          value={formatDate(plan.startDate)}
        />

        <Info
          icon={<Flag size={18} />}
          label="Priority"
          value={plan.priority?.replace("_", " ")}
        />

      </div>

<Link
  to={`/village/${slug}/development-plan/${plan._id}`}
  className="
    mt-8
    w-full
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-3
    rounded-xl
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2
    font-medium
"
>
  View Project

  <ArrowRight size={18} />
</Link>

    </div>
  );
};



const Info = ({
  icon,
  label,
  value,
}) => (
  <div className="flex gap-3">

    <div className="text-blue-600">

      {icon}

    </div>

    <div>

      <p className="text-xs text-slate-500">

        {label}

      </p>

<p className="font-semibold text-slate-800">
  {value || "-"}
</p>

    </div>

  </div>
);

export default PlanCard;