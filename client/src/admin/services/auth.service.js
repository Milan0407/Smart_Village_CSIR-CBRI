import axios from "axios";

const API_URL =
  "http://localhost:5000/api/auth";

export const loginAdmin =
  async (payload) => {
    const response =
      await axios.post(
        `${API_URL}/login`,
        payload,
        {
          withCredentials: true,
        }
      );

    return response.data.data;
  };

export const getCurrentAdmin =
  async (token) => {
    const response =
      await axios.get(
        `${API_URL}/me`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

    return response.data.data;
  };

export const logoutAdmin =
  async (token) => {
    const response =
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

    return response.data.data;
  };