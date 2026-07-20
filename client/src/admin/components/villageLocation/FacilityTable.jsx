import FacilityTableRow from "./FacilityTableRow";
import EmptyState from "./EmptyState";

const FacilityTable = ({
  facilities = [],
  onEdit,
  onDelete,
}) => {
  if (facilities.length === 0) {
    return (
      <EmptyState
        title="No Nearby Facilities"
        description="Start by adding the first nearby facility for this village."
      />
    );
  }

  const sortedFacilities = [...facilities].sort(
    (a, b) =>
      (a.displayOrder || 0) -
      (b.displayOrder || 0)
  );

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left">
                Facility
              </th>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              <th className="px-4 py-3 text-left">
                Contact
              </th>

              <th className="px-4 py-3 text-left">
                Coordinates
              </th>

              <th className="px-4 py-3 text-left">
                Address
              </th>

              <th className="px-4 py-3 text-center">
                Order
              </th>

              <th className="px-4 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedFacilities.map((facility) => (
              <FacilityTableRow
                key={facility._id}
                facility={facility}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacilityTable;