import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/*
=========================================
Get Village Location by Village
=========================================
*/

export const getVillageLocationByVillage = async (slug) => {
  const response = await axios.get(
    `${API_URL}/village-locations/public/village/${slug}`
  );

  return response.data.data;
};

/*
=========================================
Get Single Village Location
=========================================
*/

export const getVillageLocation = async (id) => {
  const response = await axios.get(
    `${API_URL}/village-locations/public/${id}`
  );

  return response.data.data;
};