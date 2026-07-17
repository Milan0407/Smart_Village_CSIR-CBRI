import {
  Eye,
  EyeOff,
  Pencil,
  Trash2,
} from "lucide-react";

import PublishBadge from "./PublishBadge";

const DevelopmentPlanTableRow = ({
  plan,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  const sectorCount = plan.sectors?.length || 0;
  const technologyCount = (plan.sectors || []).reduce(
    (sum, sector) =>
      sum + (sector.technologies?.length || 0),
    0
  );

  return (
    <tr className="border-b transition-colors hover:bg-slate-50">
      <td className="px-6 py-4">
        <div>
          <h3 className="font-semibold text-slate-800">
            {plan.title}
          </h3>
          <p className="text-sm text-slate-500">
            {plan.description?.length > 80
              ? `${plan.description.slice(0, 80)}...`
              : plan.description}
          </p>
        </div>
      </td>

      <td className="px-6 py-4">
        {plan.village?.name?.en || plan.village?.name || "-"}
      </td>

      <td className="px-6 py-4 font-medium">
        {sectorCount}
      </td>

      <td className="px-6 py-4 font-medium">
        {technologyCount}
      </td>

      <td className="px-6 py-4">
        <PublishBadge published={plan.isPublished} />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit(plan._id)}
            className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
            title="Edit sectors and technologies"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onTogglePublish(plan._id)}
            className="rounded-lg p-2 text-green-600 hover:bg-green-50"
            title={
              plan.isPublished
                ? "Unpublish"
                : "Publish"
            }
          >
            {plan.isPublished ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

          <button
            onClick={() => onDelete(plan._id)}
            className="rounded-lg p-2 text-red-600 hover:bg-red-50"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DevelopmentPlanTableRow;
