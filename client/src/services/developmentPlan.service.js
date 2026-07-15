import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/*
=========================================
Get Development Plans by Village
=========================================
*/

export const getDevelopmentPlansByVillage = async (slug) => {
  const response = await axios.get(
    `${API_URL}/development-plans/public/village/${slug}`
  );

  return response.data.data;
};

/*
=========================================
Get Single Development Plan
=========================================
*/

export const getDevelopmentPlan = async (id) => {
  const response = await axios.get(
    `${API_URL}/development-plans/public/${id}`
  );

  return response.data.data;
};