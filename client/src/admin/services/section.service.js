import axios from "axios";

const API =import.meta.env.VITE_API_URL;
  const API_URL=`${API}/admin/sections`;

const getToken = () =>
  localStorage.getItem("accessToken");

export const getSectionsByPage =
  async (pageId) => {
    const response =
      await axios.get(
        `${API_URL}/page/${pageId}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

  export const getSectionById =
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

export const updateSection =
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