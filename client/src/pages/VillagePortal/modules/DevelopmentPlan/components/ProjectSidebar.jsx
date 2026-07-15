import {
  IndianRupee,
  Building2,
  Users,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import {
  formatCurrency,
  formatDate,
} from "../../../../../utils/formatters";

const SidebarItem = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-3 py-4 border-b border-slate-100 last:border-b-0">

    <div className="text-blue-600 mt-1">
      {icon}
    </div>

    <div className="flex-1">

      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-800 break-words">
        {value || "-"}
      </p>

    </div>

  </div>
);

const ProjectSidebar = ({ plan }) => {
  return (
    <div className="sticky top-24">

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Project Information
        </h2>

        <SidebarItem
          icon={<IndianRupee size={18} />}
          label="Budget"
          value={formatCurrency(plan.budget)}
        />

        <SidebarItem
          icon={<Building2 size={18} />}
          label="Funding Agency"
          value={plan.fundingAgency}
        />

        <SidebarItem
          icon={<Building2 size={18} />}
          label="Implementing Agency"
          value={plan.implementingAgency}
        />

        <SidebarItem
          icon={<Users size={18} />}
          label="Beneficiaries"
          value={
            plan.beneficiaries
              ? `${plan.beneficiaries.toLocaleString()} People`
              : "-"
          }
        />

        <SidebarItem
          icon={<CalendarDays size={18} />}
          label="Start Date"
          value={formatDate(plan.startDate)}
        />

        <SidebarItem
          icon={<CalendarDays size={18} />}
          label="Target Date"
          value={formatDate(plan.targetDate)}
        />

        <SidebarItem
          icon={<CheckCircle2 size={18} />}
          label="Completion Date"
          value={formatDate(plan.completedDate)}
        />

      </div>

    </div>
  );
};

export default ProjectSidebar;