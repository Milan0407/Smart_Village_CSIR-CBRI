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
      <DevelopmentHero village={village} />

      <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Development Plan
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            CSIR Technology Deployment
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Sector-wise technologies deployed for the village are listed below.
            Sector progress is calculated by the backend from technology-level
            progress.
          </p>
        </div>
      </section>

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
