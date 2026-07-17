import DevelopmentPlanTableRow from "./DevelopmentPlanTableRow";
import EmptyState from "./EmptyState";

const DevelopmentPlanTable = ({
  plans,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  if (!plans.length) {
    return (
      <EmptyState
        title="No Development Plans Found"
        description="Create a technology deployment plan to start adding sectors and technologies."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Development Plan
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Village
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Sectors
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Technologies
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Published
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <DevelopmentPlanTableRow
                key={plan._id}
                plan={plan}
                onEdit={onEdit}
                onDelete={onDelete}
                onTogglePublish={onTogglePublish}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopmentPlanTable;
