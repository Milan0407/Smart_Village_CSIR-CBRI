import {
  Building2,
  FileText,
  Globe,
  Users,
} from "lucide-react";
import { useMemo } from "react";

const StatCard = ({
  icon,
  title,
  value,
  iconBg,
  iconColor,
}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h2 className="mt-2 text-3xl font-bold">{value}</h2>
      </div>

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}
      >
        <div className={iconColor}>{icon}</div>
      </div>
    </div>
  </div>
);

const PoliciesSchemeStats = ({
  schemes = [],
}) => {
  const stats = useMemo(() => {
    const total = schemes.length;
    const central = schemes.filter(
      (scheme) => scheme.category === "CENTRAL"
    ).length;
    const state = schemes.filter(
      (scheme) => scheme.category === "STATE"
    ).length;
    const beneficiaries = schemes.reduce(
      (sum, scheme) =>
        sum + Number(scheme.beneficiariesCount || 0),
      0
    );

    return {
      total,
      central,
      state,
      beneficiaries,
    };
  }, [schemes]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Schemes"
        value={stats.total}
        icon={<FileText size={26} />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Central"
        value={stats.central}
        icon={<Globe size={26} />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <StatCard
        title="State"
        value={stats.state}
        icon={<Building2 size={26} />}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
      />

      <StatCard
        title="Beneficiaries"
        value={stats.beneficiaries}
        icon={<Users size={26} />}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
      />
    </div>
  );
};

export default PoliciesSchemeStats;
