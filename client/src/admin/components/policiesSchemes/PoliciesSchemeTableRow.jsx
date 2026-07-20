import {
  Eye,
  EyeOff,
  Pencil,
  Trash2,
} from "lucide-react";

import PublishBadge from "../common/PublishBadge";

const categoryLabels = {
  CENTRAL: "Central Government",
  STATE: "State Government",
};

const PoliciesSchemeTableRow = ({
  scheme,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  return (
    <tr className="border-b transition-colors hover:bg-slate-50">
      <td className="px-6 py-4">
        {scheme.featuredImage?.url ? (
          <img
            src={scheme.featuredImage.url}
            alt={scheme.featuredImage.alt || scheme.schemeName}
            loading="lazy"
            className="h-14 w-20 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-slate-100 text-xs font-medium text-slate-500">
            No Image
          </div>
        )}
      </td>

      <td className="px-6 py-4">
        <div>
          <h3 className="font-semibold text-slate-800">
            {scheme.schemeName}
          </h3>
          <p className="text-sm text-slate-500">
            {scheme.shortDescription?.length > 80
              ? `${scheme.shortDescription.slice(0, 80)}...`
              : scheme.shortDescription}
          </p>
        </div>
      </td>

      <td className="px-6 py-4">
        {scheme.village?.name?.en ||
          scheme.village?.name ||
          "-"}
      </td>

      <td className="px-6 py-4">
        {categoryLabels[scheme.category] ||
          scheme.category}
      </td>

      <td className="px-6 py-4 font-medium">
        {scheme.beneficiariesCount || 0}
      </td>

      <td className="px-6 py-4">
        <PublishBadge published={scheme.published} />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit(scheme._id)}
            className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() =>
              onTogglePublish(scheme)
            }
            className="rounded-lg p-2 text-green-600 hover:bg-green-50"
            title={
              scheme.published
                ? "Unpublish"
                : "Publish"
            }
          >
            {scheme.published ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

          <button
            onClick={() => onDelete(scheme)}
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

export default PoliciesSchemeTableRow;
