import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getHomeStats = async () => {
  const response = await axios.get(
    `${API}/home/stats`
  );

  return response.data.data;
};
