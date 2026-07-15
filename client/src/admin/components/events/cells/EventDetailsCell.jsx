import {
  MapPin,
  Users,
  Building2,
} from "lucide-react";

const EventDetailsCell = ({ event }) => {
  return (
    <td className="px-6 py-5 align-top">
      <div className="max-w-md">

        <h3 className="font-semibold text-slate-800">
          {event.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {event.summary || "No summary available."}
        </p>

        <div className="mt-4 space-y-2 text-sm text-slate-600">

          <div className="flex items-center gap-2">
            <Building2 size={15} />
            <span>{event.village?.name?.en ?? "-"}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <span>
              {event.location || "-"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={15} />
            <span>
              {event.participants || 0} Participants
            </span>
          </div>

        </div>

      </div>
    </td>
  );
};

export default EventDetailsCell;