import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Send Contact Form Message
 */
export const sendContactMessage = async (payload) => {
  const response = await axios.post(
    `${API_URL}/contact`,
    payload
  );

  return response.data.data;
};