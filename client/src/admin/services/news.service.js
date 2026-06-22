import axios from "axios";

const API =import.meta.env.VITE_API_URL;
const API_URL =
  `${API}/news`;

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

export const getAllNews =
  async () => {
    const response =
      await axios.get(API_URL, {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      });

    return response.data.data;
  };

export const getNewsById =
  async (id) => {
    const response =
      await axios.get(
        `${API_URL}/id/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

export const createNews =
  async (payload) => {
    const response =
      await axios.post(
        API_URL,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

export const updateNews =
  async (
    id,
    payload
  ) => {
    const response =
      await axios.put(
        `${API_URL}/${id}`,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

export const deleteNews =
  async (id) => {
    const response =
      await axios.delete(
        `${API_URL}/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };