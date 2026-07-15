import TypeBadge from "../common/TypeBadge";
import StatusBadge from "../common/StatusBadge";

import EventImageCell from "./cells/EventImageCell";
import EventDetailsCell from "./cells/EventDetailsCell";
import VisibilityCell from "./cells/VisibilityCell";
import ActionMenu from "./cells/ActionMenu";

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const EventTableRow = ({
  event,
   onDelete,
  onPublish,
  onFeature,
}) => {
  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50">

      <EventImageCell
        coverImage={event.coverImage}
        title={event.title}
      />

      <EventDetailsCell
        event={event}
      />

      <td className="px-6 py-5 align-top">
        <div className="flex flex-col gap-2">
          <TypeBadge type={event.type} />

          <StatusBadge status={event.status} />
        </div>
      </td>

      <VisibilityCell
        published={event.published}
        featured={event.isFeatured}
      />

      <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600 align-top">
        {formatDate(event.eventDate)}
      </td>

      <ActionMenu
        event={event}
        onDelete={onDelete}
  onPublish={onPublish}
  onFeature={onFeature}
      />

    </tr>
  );
};

export default EventTableRow;