import axios from "axios";

const API_URL =
  "http://localhost:5000/api/admin/navigation";

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

export const getAllNavigation =
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

export const getNavigationById =
  async (id) => {
    const response =
      await axios.get(
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

export const createNavigation =
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

export const updateNavigation =
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

export const deleteNavigation =
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