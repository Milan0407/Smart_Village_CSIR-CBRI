import {
  CalendarDays,
  MapPin,
  Trophy,
} from "lucide-react";

const EventMeta = ({ event, className = "" }) => {
  if (!event) return null;

  const formattedDate = event.eventDate
    ? new Date(event.eventDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Date not available";

  // Handle multilingual village names
  const villageName =
    typeof event.village?.name === "string"
      ? event.village.name
      : event.village?.name?.en ||
        event.village?.name?.regional ||
        "Unknown Village";

  // Handle multilingual event types if needed
  const eventType =
    typeof event.type === "string"
      ? event.type
      : event.type?.en || "EVENT";

  return (
    <div
      className={`flex flex-wrap items-center gap-4 text-sm text-slate-500 ${className}`}
    >
      <div className="flex items-center gap-2">
        <CalendarDays size={16} />
        <span>{formattedDate}</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{villageName}</span>
      </div>

      <div className="flex items-center gap-2">
        <Trophy size={16} />
        <span className="capitalize">
          {eventType.toLowerCase()}
        </span>
      </div>
    </div>
  );
};

export default EventMeta;