import { useEffect, useState } from "react";

import {
  getDevelopmentPlansByVillage,
  getDevelopmentPlan,
} from "../services/developmentPlan.service";

/*
=========================================
Get All Development Plans of a Village
=========================================
*/

const useDevelopmentPlans = (slug) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    loadPlans();
  }, [slug]);

  const loadPlans = async () => {
    try {
      setLoading(true);

      const data =
        await getDevelopmentPlansByVillage(slug);

      setPlans(data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    plans,
    loading,
    error,
    reload: loadPlans,
  };
};

export default useDevelopmentPlans;

/*
=========================================
Get Single Development Plan
=========================================
*/

export const useDevelopmentPlan = (id) => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    loadPlan();
  }, [id]);

  const loadPlan = async () => {
    try {
      setLoading(true);

      const data =
        await getDevelopmentPlan(id);

      setPlan(data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    plan,
    loading,
    error,
    reload: loadPlan,
  };
};