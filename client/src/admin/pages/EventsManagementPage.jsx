import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import useEvents from "../../hooks/useEvents";

import EventStats from "../components/events/EventStats";
import EventFilters from "../components/events/EventFilters";
import EventTable from "../components/events/EventTable";
import useVillages from "../../hooks/useVillages";

import Pagination from "../components/common/Pagination";

const EventsManagementPage = () => {

const {
  villages,
  loading: villagesLoading,
  error: villagesError,
} = useVillages();

const {
  events,
  pagination,

  loading,
  error,

  filters,
  updateFilter,
  resetFilters,
  handlePageChange,

  refresh,

  handleDelete,
  handlePublish,
  handleFeature,
} = useEvents();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Events & Achievements
          </h1>

          <p className="mt-1 text-slate-500">
            Manage village events and achievements.
          </p>
        </div>

        <Link
          to="/admin/events/create"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Create Event
        </Link>
      </div>

      <EventStats events={events} />

<EventFilters
  filters={filters}
  updateFilter={updateFilter}
  resetFilters={resetFilters}
  villages={villages}
/>

      <EventTable
        events={events}
        loading={loading}
        error={error}
        pagination={pagination}
        refresh={refresh}
        onDelete={handleDelete}
        onPublish={handlePublish}
        onFeature={handleFeature}
      />

      <Pagination
  pagination={pagination}
  onPageChange={handlePageChange}
/>
    </div>
  );
};

export default EventsManagementPage;