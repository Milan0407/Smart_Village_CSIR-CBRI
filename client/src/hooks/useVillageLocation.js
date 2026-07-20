import { useQuery } from "@tanstack/react-query";

import { getVillageLocationByVillage } from "../services/villageLocation.service";

/*
=========================================
Query Keys
=========================================
*/

export const villageLocationKeys = {
  all: ["village-location"],

  village: (slug) => [
    ...villageLocationKeys.all,
    "village",
    slug,
  ],
};

/*
=========================================
Get Village Location
=========================================
*/

export const useVillageLocation = (villageSlug) => {
  return useQuery({
    queryKey: villageLocationKeys.village(
      villageSlug
    ),

    queryFn: () =>
      getVillageLocationByVillage(
        villageSlug
      ),

    enabled: !!villageSlug,

    staleTime: 5 * 60 * 1000,

    gcTime: 10 * 60 * 1000,

    retry: 1,

    refetchOnWindowFocus: false,
  });
};