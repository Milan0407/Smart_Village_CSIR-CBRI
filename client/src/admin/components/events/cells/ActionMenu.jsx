import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Edit,
  Eye,
  Globe,
  Star,
  Trash2,
} from "lucide-react";

import ConfirmDialog from "../../common/ConfirmDialog";

const ActionMenu = ({
  event,
  onDelete,
  onPublish,
  onFeature,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirmDelete = async () => {
    setLoading(true);

    const result = await onDelete(event._id);

    setLoading(false);
    setOpenDelete(false);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handlePublish = async () => {
    const result = await onPublish(
      event._id,
      !event.published
    );

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleFeature = async () => {
    const result = await onFeature(
      event._id,
      !event.isFeatured
    );

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <td className="px-6 py-5 align-top">
      <div className="flex items-center justify-center gap-2">

        {/* View */}

<Link
  to={`/events/${event.slug}`}
  className="rounded-lg p-2 transition hover:bg-slate-100"
  title="View"
>
  <Eye
    size={18}
    className="text-slate-600"
  />
</Link>

        {/* Edit */}

        <Link to={`/admin/events/${event._id}/edit`}
          className="rounded-lg p-2 transition hover:bg-blue-50"
          title="Edit"
        >
          <Edit
            size={18}
            className="text-blue-600"
          />
        </Link>

        {/* Publish */}

        <button
          onClick={handlePublish}
          className="rounded-lg p-2 transition hover:bg-green-50"
          title={
            event.published
              ? "Unpublish"
              : "Publish"
          }
        >
          <Globe
            size={18}
            className={
              event.published
                ? "text-green-600"
                : "text-slate-400"
            }
          />
        </button>

        {/* Feature */}

        <button
          onClick={handleFeature}
          className="rounded-lg p-2 transition hover:bg-yellow-50"
          title={
            event.isFeatured
              ? "Remove Feature"
              : "Feature Event"
          }
        >
          <Star
            size={18}
            className={
              event.isFeatured
                ? "fill-amber-500 text-amber-500"
                : "text-slate-400"
            }
          />
        </button>

        {/* Delete */}

        <button
          onClick={() => setOpenDelete(true)}
          className="rounded-lg p-2 transition hover:bg-red-50"
          title="Delete"
        >
          <Trash2
            size={18}
            className="text-red-600"
          />
        </button>

      </div>

      <ConfirmDialog
        open={openDelete}
        loading={loading}
        title="Delete Event"
        message={`Are you sure you want to delete "${event.title}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        onCancel={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
      />
    </td>
  );
};

export default ActionMenu;