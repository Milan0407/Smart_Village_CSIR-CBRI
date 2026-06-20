import {
  useEffect,
  useState,
} from "react";

import {
  getNavigation,
} from "../services/navigation.service";

const useNavigation = () => {
  const [items, setItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const loadNavigation =
      async () => {
        try {
          const data =
            await getNavigation();

          setItems(data);
        } catch (err) {
          setError(
            err.message
          );
        } finally {
          setLoading(false);
        }
      };

    loadNavigation();
  }, []);

  return {
    items,
    loading,
    error,
  };
};

export default useNavigation;