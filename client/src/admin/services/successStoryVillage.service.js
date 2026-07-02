import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const API_URL = `${API}/success-story-villages`;

const getToken = () =>
  localStorage.getItem("accessToken");

export const getAllSuccessStoryVillages =
  async () => {
    const response = await axios.get(
      API_URL,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data.data;
  };

export const getSuccessStoryVillageById =
  async (id) => {
    const response = await axios.get(
      `${API_URL}/id/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data.data;
  };

export const createSuccessStoryVillage =
  async (payload) => {
    const response = await axios.post(
      API_URL,
      payload,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data.data;
  };

export const updateSuccessStoryVillage =
  async (id, payload) => {
    const response = await axios.put(
      `${API_URL}/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data.data;
  };

export const deleteSuccessStoryVillage =
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data.data;
  };