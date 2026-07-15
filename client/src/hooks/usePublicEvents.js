import { useCallback, useEffect, useState } from "react";

import * as eventService from "../services/event.service";

const usePublicEvents = () => {
  const [events, setEvents] = useState([]);
  const [featuredEvent, setFeaturedEvent] =
    useState(null);

  const [statistics, setStatistics] =
    useState(null);

  const [pagination, setPagination] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
  search: "",
  type: "",
  status: "",
  page: 1,
});

const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [
        eventsResponse,
        featuredResponse,
        statisticsResponse,
      ] = await Promise.all([
         eventService.getPublicEvents(filters),

        eventService.getFeaturedEvent(),

        eventService.getEventStatistics(),
      ]);

      setEvents(eventsResponse.data.data);

      setPagination(
        eventsResponse.data.pagination
      );

      setFeaturedEvent(
        featuredResponse.data.data
      );

      setStatistics(
        statisticsResponse.data
      );
    } catch (err) {
      console.error(err);


      setError(
        err?.response?.data?.message ||
          "Failed to load events."
      );
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return {
    events,
    featuredEvent,
    statistics,
    pagination,
    loading,
    error,
    filters,
    setFilters,
    refresh: fetchEvents,
  };
};

export default usePublicEvents;