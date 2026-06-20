import axios from "axios";

const API_URL =
  "http://localhost:5000/api/success-stories";

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

export const getAllStories =
  async () => {
    const response =
      await axios.get(
        API_URL,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

export const getStoryById =
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

export const createStory =
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

export const updateStory =
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

export const deleteStory =
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