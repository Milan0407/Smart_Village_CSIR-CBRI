import usePublicEvents from "../../../../hooks/usePublicEvents";

import EventsHero from "./components/Hero/EventsHero";
import EventsFilters from "./components/Hero/EventsFilters";
import EventsStats from "./components/Hero/EventsStats";

import FeaturedEvent from "./components/FeaturedEvent";
import EventGrid from "./components/EventGrid";
import Pagination from "./components/Pagination";
import EmptyState from "./components/EmptyState";
import EventsSkeleton from "./components/Hero/EventsSkeleton";


const EventsPage = () => {
  const {
    events,
    featuredEvent,
    statistics,
    pagination,
    filters,
    setFilters,
    loading,
    error,
  } = usePublicEvents();

if (loading) {
  return <EventsSkeleton />;
}

  if (error) {
    return (
      <p className="text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-12">

      <EventsHero />

      <EventsFilters
        filters={filters}
        onChange={setFilters}
      />

      <EventsStats
        statistics={statistics}
      />

      <FeaturedEvent
        event={featuredEvent}
      />

      {events.length === 0 ? (
  <EmptyState
    onReset={() =>
      setFilters({
        search: "",
        type: "",
        status: "",
        page: 1,
      })
    }
  />
) : (
  <>
    <EventGrid events={events} />

    <Pagination
      currentPage={pagination?.page || 1}
      totalPages={pagination?.totalPages || 1}
      onPageChange={(page) =>
        setFilters((prev) => ({
          ...prev,
          page,
        }))
      }
    />
  </>
)}

    </div>
  );
};

export default EventsPage;