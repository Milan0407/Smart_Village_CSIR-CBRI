const StatCard = ({
  label,
  value,
  color,
}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      {label}
    </p>

    <h3
      className={`mt-2 text-3xl font-bold ${color}`}
    >
      {value}
    </h3>
  </div>
);

const VillageLocationStats = ({
  locations = [],
}) => {
  const total = locations.length;

  const published =
    locations.filter(
      (item) => item.isPublished
    ).length;

  const unpublished =
    total - published;

  const facilities =
    locations.reduce(
      (sum, item) =>
        sum +
        (item.nearbyFacilities?.length || 0),
      0
    );

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Locations"
        value={total}
        color="text-slate-800"
      />

      <StatCard
        label="Published"
        value={published}
        color="text-green-600"
      />

      <StatCard
        label="Draft"
        value={unpublished}
        color="text-orange-600"
      />

      <StatCard
        label="Nearby Facilities"
        value={facilities}
        color="text-blue-600"
      />
    </div>
  );
};

export default VillageLocationStats;