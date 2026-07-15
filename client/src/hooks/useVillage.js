import { useEffect, useState } from "react";

import {
  getVillageBySlug,
  getVillageProfile,
} from "../services/village.service";

export default function useVillage(slug) {
  const [village, setVillage] = useState(null);
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    loadVillage();
  }, [slug]);

  const loadVillage = async () => {
    try {
      setLoading(true);
      setError(null);

      const [villageData, profileData] =
        await Promise.all([
          getVillageBySlug(slug),
          getVillageProfile(slug),
        ]);

      setVillage(villageData);
      setProfile(profileData);
    } catch (err) {
      console.error(err);

      setError(err);

      setVillage(null);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    village,
    profile,
    loading,
    error,
    refresh: loadVillage,
  };
}