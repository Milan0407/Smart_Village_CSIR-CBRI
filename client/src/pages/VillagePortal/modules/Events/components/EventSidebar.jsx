import {
  CalendarDays,
  MapPin,
  User,
  Trophy,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";
import {
  getLocalizedText,
  getVillageName,
} from "../utils/eventText";

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const SidebarItem = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">

    <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
      <Icon size={20} />
    </div>

    <div>
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {value || "-"}
      </p>
    </div>

  </div>
);

const EventSidebar = ({ event }) => {
  if (!event) return null;

  return (
    <aside className="sticky top-24 space-y-6">

      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold text-slate-900">
          Event Information
        </h2>

        <div className="space-y-4">

          <SidebarItem
            icon={CalendarDays}
            label="Event Date"
            value={formatDate(event.eventDate)}
          />

          <SidebarItem
            icon={MapPin}
            label="Location"
            value={getLocalizedText(event.location, "-")}
          />

          <SidebarItem
            icon={User}
            label="Organizer"
            value={getLocalizedText(event.organizer, "-")}
          />

          <SidebarItem
            icon={Trophy}
            label="Type"
            value={event.type}
          />

          <SidebarItem
            icon={CheckCircle2}
            label="Status"
            value={event.status}
          />

          <SidebarItem
            icon={Users}
            label="Participants"
            value={event.participants}
          />

          <SidebarItem
            icon={MapPin}
            label="Village"
            value={getVillageName(event.village, "-")}
          />

        </div>

      </div>

      {event.isFeatured && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-full bg-amber-500 p-2 text-white">
              <Star
                size={18}
                fill="white"
              />
            </div>

            <div>

              <h3 className="font-bold text-amber-800">
                Featured Event
              </h3>

              <p className="mt-1 text-sm text-amber-700">
                This event has been marked as featured by
                the administrator.
              </p>

            </div>

          </div>

        </div>
      )}

    </aside>
  );
};

export default EventSidebar;
