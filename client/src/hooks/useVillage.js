import { useQuery } from "@tanstack/react-query";

import {
  getVillageBySlug,
  getVillageProfile,
} from "../services/village.service";

export default function useVillage(slug) {
  const villageQuery = useQuery({
    queryKey: ["village", slug],
    queryFn: () => getVillageBySlug(slug),
    enabled: !!slug,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  const profileQuery = useQuery({
    queryKey: ["village-profile", slug],
    queryFn: () => getVillageProfile(slug),
    enabled: !!slug,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  return {
    village: villageQuery.data ?? null,
    profile: profileQuery.data ?? null,

    loading:
      villageQuery.isLoading ||
      profileQuery.isLoading,

    error:
      villageQuery.error ||
      profileQuery.error,

    refresh: () => {
      villageQuery.refetch();
      profileQuery.refetch();
    },
  };
}