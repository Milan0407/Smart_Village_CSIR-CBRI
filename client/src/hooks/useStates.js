import { useEffect, useState } from "react";

import {
  getPublishedStates,
} from "../services/state.service";

import {
  getVillagesByState,
} from "../services/village.service";

export default function useStates() {
  const [states, setStates] = useState([]);
  const [villages, setVillages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStates();
  }, []);

  const loadStates = async () => {
    try {
      setLoading(true);
      setError(null);

      const data =
        await getPublishedStates();

      setStates(data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

const loadVillages = async (stateSlug) => {
  if (villages[stateSlug]) {
    return villages[stateSlug];
  }

  try {
    const data = await getVillagesByState(stateSlug);

    console.log("API Response:", data);

    setVillages((prev) => ({
      ...prev,
      [stateSlug]: data,
    }));

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

  return {
    states,
    villages,
    loading,
    error,
    loadVillages,
  };
}