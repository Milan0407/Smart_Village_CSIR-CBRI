import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as eventService from "../services/event.service";

const DEFAULT_FILTERS = {
  search: "",
  type: "",
  status: "",
  page: 1,
};

const usePublicEvents = (initialFilters = {}) => {
  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    ...initialFilters,
  }));

  useEffect(() => {
    if (!initialFilters.village) {
      return;
    }

    setFilters((prev) =>
      prev.village === initialFilters.village
        ? prev
        : {
            ...prev,
            village: initialFilters.village,
            page: 1,
          }
    );
  }, [initialFilters.village]);

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["public-events", filters],

    queryFn: async () => {
      const [eventsResponse, statisticsResponse] =
        await Promise.all([
          eventService.getPublicEvents(filters),
          eventService.getEventStatistics(filters),
        ]);

      const eventsPayload = eventsResponse.data || {};
      const events = eventsPayload.data || [];
      const featuredEvent =
        events.find((event) => event.isFeatured) || null;

      return {
        events,
        pagination:
          eventsPayload.pagination || null,

        featuredEvent,

        statistics:
          statisticsResponse.data || {},
      };
    },

    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });

  return {
    events: data?.events || [],
    featuredEvent:
      data?.featuredEvent || null,

    statistics:
      data?.statistics || {},

    pagination:
      data?.pagination || null,

    filters,
    setFilters,

    loading: isLoading,
    error: error
      ? error?.response?.data?.message ||
        error.message ||
        "Failed to load events."
      : "",
    refresh: refetch,
  };
};

export default usePublicEvents;
