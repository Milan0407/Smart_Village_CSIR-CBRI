import {
  IndianRupee,
  Building2,
  Landmark,
} from "lucide-react";

import { formatCurrency } from "../../../../../utils/formatters";

const FinancialCard = ({
  icon,
  title,
  value,
}) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">

    <div className="flex items-center gap-3 mb-4">

      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">

        {icon}

      </div>

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>

    <p className="text-lg font-bold text-slate-900 break-words">
      {value || "-"}
    </p>

  </div>
);

const FinancialSection = ({ plan }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-800">
          Financial Information
        </h2>

        <p className="text-slate-500 mt-2">
          Budget allocation and implementing agencies.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <FinancialCard
          icon={<IndianRupee size={20} />}
          title="Project Budget"
          value={formatCurrency(plan.budget)}
        />

        <FinancialCard
          icon={<Landmark size={20} />}
          title="Funding Agency"
          value={plan.fundingAgency}
        />

        <FinancialCard
          icon={<Building2 size={20} />}
          title="Implementing Agency"
          value={plan.implementingAgency}
        />

      </div>

    </section>
  );
};

export default FinancialSection;