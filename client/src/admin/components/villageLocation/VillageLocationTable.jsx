import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const VillageLocationTable = ({
  locations = [],
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  if (locations.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        No village locations found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left">
                Village
              </th>

              <th className="px-4 py-3 text-center">
                Facilities
              </th>

              <th className="px-4 py-3 text-center">
                Zoom
              </th>

              <th className="px-4 py-3 text-center">
                Published
              </th>

              <th className="px-4 py-3 text-center">
                Updated
              </th>

              <th className="px-4 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {locations.map((location) => (
              <tr
                key={location._id}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                {/* Village */}

                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-slate-800">
                      {location.village?.name?.en ||
                        location.village?.name ||
                        "-"}
                    </p>

                    <p className="text-xs text-slate-500">
                      {location.googleMapsLink
                        ? "Google Maps Linked"
                        : "No Map Link"}
                    </p>
                  </div>
                </td>

                {/* Facilities */}

                <td className="px-4 py-3 text-center font-medium">
                  {location.nearbyFacilities
                    ?.length || 0}
                </td>

                {/* Zoom */}

                <td className="px-4 py-3 text-center">
                  {location.zoomLevel}
                </td>

                {/* Published */}

                <td className="px-4 py-3 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      onTogglePublish(
                        location._id
                      )
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      location.isPublished
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                    }`}
                  >
                    {location.isPublished
                      ? "Published"
                      : "Draft"}
                  </button>
                </td>

                {/* Updated */}

                <td className="px-4 py-3 text-center text-slate-600">
                  {location.updatedAt
                    ? new Date(
                        location.updatedAt
                      ).toLocaleDateString()
                    : "-"}
                </td>

                {/* Actions */}

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      title="View on Google Maps"
                      disabled={
                        !location.googleMapsLink
                      }
                      onClick={() =>
                        window.open(
                          location.googleMapsLink,
                          "_blank"
                        )
                      }
                      className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      type="button"
                      title="Edit"
                      onClick={() =>
                        onEdit(location._id)
                      }
                      className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      title="Delete"
                      onClick={() =>
                        onDelete(location._id)
                      }
                      className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VillageLocationTable;