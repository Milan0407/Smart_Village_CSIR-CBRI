import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import useDevelopmentPlans from "../../../../hooks/useDevelopmentPlans";

import DevelopmentHero from "./components/Hero/DevelopmentHero";
import DevelopmentSkeleton from "./components/Hero/DevelopmentSkeleton";
import SectorAccordion from "./components/SectorAccordion";

const DevelopmentPlanPage = () => {
  const { village } = useOutletContext();
  const [openSectorId, setOpenSectorId] = useState(null);

  const {
    plans,
    loading,
    error,
  } = useDevelopmentPlans(village.slug);

  const sectors = useMemo(
    () =>
      plans
        .flatMap((plan) =>
          (plan.sectors || []).map((sector) => ({
            ...sector,
            planTitle: plan.title,
          }))
        )
        .sort((a, b) => (a.order || 0) - (b.order || 0)),
    [plans]
  );

  const primaryPlan = plans[0];

  if (loading) {
    return (
      <>
        <DevelopmentHero village={village} />
        <DevelopmentSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white p-12 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Failed to load Development Plan
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DevelopmentHero village={village} plan={primaryPlan} />

      {sectors.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-700">
            No Sectors Added
          </h2>

          <p className="mt-3 text-slate-500">
            Technology deployment sectors will appear here once published.
          </p>
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

export default DevelopmentPlanPage;
