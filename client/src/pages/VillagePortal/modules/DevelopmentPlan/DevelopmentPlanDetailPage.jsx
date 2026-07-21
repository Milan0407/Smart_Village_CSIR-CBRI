import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useDevelopmentPlan } from "../../../../hooks/useDevelopmentPlans";
import SmartTextRenderer
  from "../../../../components/common/SmartTextRenderer";

import DevelopmentSkeleton from "./components/Hero/DevelopmentSkeleton";
import SectorAccordion from "./components/SectorAccordion";

const DevelopmentPlanDetailPage = () => {
  const { slug, id } = useParams();
  const [openSectorId, setOpenSectorId] = useState(null);

  const {
    plan,
    loading,
    error,
  } = useDevelopmentPlan(id);

  const sectors = useMemo(
    () =>
      [...(plan?.sectors || [])].sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      ),
    [plan?.sectors]
  );

  if (loading) {
    return <DevelopmentSkeleton />;
  }

  if (error || !plan) {
    return (
      <div className="rounded-xl bg-white p-8 text-red-600">
        Development Plan not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        to={`/village/${slug}/development-plan`}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Back to Development Plan
      </Link>

      <section className="rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-600 p-8 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
          Development Plan
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight">
          {plan.title}
        </h1>

        {plan.description && (
          <SmartTextRenderer
            text={plan.description}
            className="mt-5 max-w-4xl text-blue-50 [&_*]:text-blue-50"
          />
        )}
      </section>

      {sectors.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-700">
            No Sectors Added
          </h2>
        </div>
      ) : (
        <div className="space-y-5">
          {sectors.map((sector) => (
            <SectorAccordion
              key={sector._id}
              sector={sector}
              isOpen={openSectorId === sector._id}
              onToggle={() =>
                setOpenSectorId((current) =>
                  current === sector._id ? null : sector._id
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DevelopmentPlanDetailPage;
