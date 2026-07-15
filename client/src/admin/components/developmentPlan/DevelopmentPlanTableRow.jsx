import {
  Pencil,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import PublishBadge from "./PublishBadge";
import ProgressCell from "./ProgressCell";

const DevelopmentPlanTableRow = ({
  plan,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  return (
    <tr className="border-b hover:bg-slate-50 transition-colors">

      {/* Project */}

      <td className="px-6 py-4">
        <div>

          <h3 className="font-semibold text-slate-800">
            {plan.title}
          </h3>

          <p className="text-sm text-slate-500">
            {plan.description?.length > 70
              ? `${plan.description.slice(0, 70)}...`
              : plan.description}
          </p>

        </div>
      </td>

      {/* Village */}

      <td className="px-6 py-4">
        {plan.village?.name?.en}
      </td>

      {/* Category */}

      <td className="px-6 py-4">
        {plan.category.replaceAll("_", " ")}
      </td>

      {/* Budget */}

      <td className="px-6 py-4 font-medium">
        ₹ {Number(plan.budget).toLocaleString("en-IN")}
      </td>

      {/* Status */}

      <td className="px-6 py-4">
        <StatusBadge
          status={plan.status}
        />
      </td>

      {/* Progress */}

      <td className="px-6 py-4">
        <ProgressCell
          progress={plan.progress}
        />
      </td>

      {/* Publish */}

      <td className="px-6 py-4">
        <PublishBadge
          published={plan.isPublished}
        />
      </td>

      {/* Actions */}

      <td className="px-6 py-4">

        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              onEdit(plan._id)
            }
            className="
              p-2
              rounded-lg
              hover:bg-blue-50
              text-blue-600
            "
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() =>
              onTogglePublish(
                plan._id
              )
            }
            className="
              p-2
              rounded-lg
              hover:bg-green-50
              text-green-600
            "
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
            onClick={() =>
              onDelete(plan._id)
            }
            className="
              p-2
              rounded-lg
              hover:bg-red-50
              text-red-600
            "
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