import { useQuery } from "@tanstack/react-query";
import { getPageBySlug } from "../services/cms.service";

const usePage = (slug) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["page", slug],
    queryFn: () => getPageBySlug(slug),
    enabled: !!slug,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    page: data,
    loading: isLoading,
    error: error?.message || null,
  };
};

export default usePage;