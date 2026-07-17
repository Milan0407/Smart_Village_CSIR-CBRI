import { useQuery } from "@tanstack/react-query";

import { getAllVillages } from "../admin/services/village.service";

const useVillages = () => {
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["villages"],
    queryFn: getAllVillages,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  return {
    villages: data,
    loading: isLoading,
    error: error?.message || "",
    refresh: refetch,
  };
};

export default useVillages;