import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getPublishedStates } from "../services/state.service";
import { getVillagesByState } from "../services/village.service";

export default function useStates() {
  const queryClient = useQueryClient();

  const {
    data: states = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["states"],
    queryFn: getPublishedStates,

    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  const loadVillages = async (stateSlug) => {
    return queryClient.fetchQuery({
      queryKey: ["state-villages", stateSlug],
      queryFn: () => getVillagesByState(stateSlug),

      staleTime: 1000 * 60 * 60,
    });
  };

  return {
    states,
    loading: isLoading,
    error,
    loadVillages,
  };
}