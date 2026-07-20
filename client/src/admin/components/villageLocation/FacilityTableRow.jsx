import { Pencil, Trash2 } from "lucide-react";

const FacilityTableRow = ({
  facility,
  onEdit,
  onDelete,
}) => {
  const [longitude, latitude] =
    facility.location?.coordinates || ["-", "-"];

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      {/* Facility Name */}
      <td className="px-4 py-3">
        <div>
          <p className="font-medium text-slate-800">
            {facility.name}
          </p>

          {facility.description && (
            <p className="mt-1 line-clamp-2 text-sm text-slate-500">
              {facility.description}
            </p>
          )}
        </div>
      </td>

      {/* Category */}
      <td className="px-4 py-3">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {facility.category.replaceAll("_", " ")}
        </span>
      </td>

      {/* Contact */}
      <td className="px-4 py-3 text-slate-700">
        {facility.contactNumber || "-"}
      </td>

      {/* Coordinates */}
      <td className="px-4 py-3">
        <div className="text-sm text-slate-700">
          <p>
            <span className="font-medium">
              Lat:
            </span>{" "}
            {latitude}
          </p>

          <p>
            <span className="font-medium">
              Lng:
            </span>{" "}
            {longitude}
          </p>
        </div>
      </td>

      {/* Address */}
      <td className="max-w-xs px-4 py-3 text-slate-700">
        <p className="line-clamp-2">
          {facility.address || "-"}
        </p>
      </td>

      {/* Display Order */}
      <td className="px-4 py-3 text-center font-medium text-slate-700">
        {facility.displayOrder}
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(facility)}
            title="Edit Facility"
            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(facility)}
            title="Delete Facility"
            className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FacilityTableRow;