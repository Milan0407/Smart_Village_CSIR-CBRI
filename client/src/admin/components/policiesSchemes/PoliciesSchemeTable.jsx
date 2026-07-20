import EmptyState from "./EmptyState";
import PoliciesSchemeTableRow from "./PoliciesSchemeTableRow";

const PoliciesSchemeTable = ({
  schemes,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  if (!schemes.length) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Image
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Scheme Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Village
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Beneficiaries
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
            {schemes.map((scheme) => (
              <PoliciesSchemeTableRow
                key={scheme._id}
                scheme={scheme}
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

export default PoliciesSchemeTable;
