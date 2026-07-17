import {
  FileText,
  FlaskConical,
  Globe,
  Layers3,
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

const DevelopmentPlanStats = ({ plans = [] }) => {
  const {
    total,
    sectors,
    technologies,
    published,
  } = useMemo(() => {
    const totalPlans = plans.length;
    const sectorCount = plans.reduce(
      (sum, plan) => sum + (plan.sectors?.length || 0),
      0
    );
    const technologyCount = plans.reduce(
      (sum, plan) =>
        sum +
        (plan.sectors || []).reduce(
          (sectorSum, sector) =>
            sectorSum + (sector.technologies?.length || 0),
          0
        ),
      0
    );
    const publishedCount = plans.filter(
      (plan) => plan.isPublished
    ).length;

    return {
      total: totalPlans,
      sectors: sectorCount,
      technologies: technologyCount,
      published: publishedCount,
    };
  }, [plans]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Plans"
        value={total}
        icon={<FileText size={26} />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Sectors"
        value={sectors}
        icon={<Layers3 size={26} />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <StatCard
        title="Technologies"
        value={technologies}
        icon={<FlaskConical size={26} />}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
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
