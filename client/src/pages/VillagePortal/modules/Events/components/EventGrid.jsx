import EventCard from "./EventCard";
import EmptyState from "./EmptyState";

const EventGrid = ({
  events = [],
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[420px] animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  if (!events.length) {
    return <EmptyState />;
  }

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          All Events
        </h2>

        <span className="text-sm text-slate-500">
          {events.length} Event
          {events.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
          />
        ))}
      </div>
    </section>
  );
};

export default EventGrid;