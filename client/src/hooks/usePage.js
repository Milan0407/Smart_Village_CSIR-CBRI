import {
  useEffect,
  useState,
} from "react";

import {
  getPageBySlug,
} from "../services/cms.service";

const usePage = (slug) => {
  const [page, setPage] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const fetchPage =
      async () => {
        try {
          setLoading(true);

          const data =
            await getPageBySlug(
              slug
            );

          setPage(data);
        } catch (err) {
          setError(
            err.message
          );
        } finally {
          setLoading(false);
        }
      };

    fetchPage();
  }, [slug]);

  return {
    page,
    loading,
    error,
  };
};

export default usePage;