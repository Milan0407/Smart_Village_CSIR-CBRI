import EventTableRow from "./EventTableRow";
import EmptyState from "./EmptyState";

const EventTable = ({
  events,
  loading,
  error,
  onDelete,
  onPublish,
  onFeature,
}) => {
if (loading) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

      <p className="mt-4 text-slate-600">
        Loading events...
      </p>
    </div>
  );
}

  if (error) {
    return (
      <div className="rounded-2xl bg-red-50 p-10 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!events.length) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">

           <thead className="sticky top-0 bg-slate-50">
  <tr>

    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
      Image
    </th>

    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
      Event Details
    </th>

    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
      Status
    </th>

    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
      Visibility
    </th>

    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
      Date
    </th>

    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
      Actions
    </th>

  </tr>
</thead>

          <tbody>

            {events.map((event) => (
              <EventTableRow
                key={event._id}
                event={event}
                 onDelete={onDelete}
                 onPublish={onPublish}
                 onFeature={onFeature}
              />
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EventTable;