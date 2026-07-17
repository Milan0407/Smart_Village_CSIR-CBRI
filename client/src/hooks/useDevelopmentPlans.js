import { useQuery } from "@tanstack/react-query";

import {
  getDevelopmentPlansByVillage,
  getDevelopmentPlan,
} from "../services/developmentPlan.service";

/* =========================================
   Village Development Plans
========================================= */

const useDevelopmentPlans = (slug) => {
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["development-plans", slug],
    queryFn: () =>
      getDevelopmentPlansByVillage(slug),

    enabled: !!slug,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  return {
    plans: data,
    loading: isLoading,
    error,
    reload: refetch,
  };
};

export default useDevelopmentPlans;

/* =========================================
   Single Development Plan
========================================= */

export const useDevelopmentPlan = (id) => {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["development-plan", id],
    queryFn: () => getDevelopmentPlan(id),

    enabled: !!id,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
  });

  return {
    plan: data,
    loading: isLoading,
    error,
    reload: refetch,
  };
};