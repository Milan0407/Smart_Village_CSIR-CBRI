import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("accessToken");

export const getAllStates = async () => {
  const response = await axios.get(`${API}/states`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data.data;
};