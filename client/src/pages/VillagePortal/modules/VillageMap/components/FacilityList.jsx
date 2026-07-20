import FacilityCard from "./FacilityCard";
import EmptyState from "./EmptyState";

const FacilityList = ({
  facilities = [],
  onSelectFacility,
}) => {
  if (!facilities.length) {
    return (
      <EmptyState
        title="No Nearby Facilities"
        description="There are no nearby facilities available for this village."
      />
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Nearby Facilities
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Explore schools, healthcare centers, government offices,
            community services, and other important places around the
            village.
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          {facilities.length}{" "}
          {facilities.length === 1
            ? "Facility"
            : "Facilities"}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility._id}
            facility={facility}
            onSelect={onSelectFacility}
          />
        ))}
      </div>
    </section>
  );
};

export default FacilityList;