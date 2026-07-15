import { useCallback, useEffect, useState } from "react";

import { getAllVillages } from "../admin/services/village.service";

const useVillages = () => {
  const [villages, setVillages] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchVillages =
    useCallback(async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await getAllVillages();

        setVillages(response || []);
      } catch (err) {
        console.error(err);

        setError(
          err?.response?.data?.message ||
            "Failed to load villages."
        );
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    fetchVillages();
  }, [fetchVillages]);

  return {
    villages,
    loading,
    error,
    refresh: fetchVillages,
  };
};

export default useVillages;