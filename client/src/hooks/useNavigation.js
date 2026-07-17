import { useQuery } from "@tanstack/react-query";

import { getNavigation } from "../services/navigation.service";

const useNavigation = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["navigation"],
    queryFn: getNavigation,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    items: data,
    loading: isLoading,
    error: error?.message || null,
  };
};

export default useNavigation;