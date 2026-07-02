import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Get Site Settings
 */
export const getSiteSettings = async () => {
  const response = await axios.get(
    `${API_URL}/site-settings`
  );

  return response.data.data;
};