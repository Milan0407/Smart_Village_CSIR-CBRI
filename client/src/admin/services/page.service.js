import axios from "axios";

const API_URL =
  "http://localhost:5000/api/admin/pages";

export const getPages =
  async () => {
    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await axios.get(
        API_URL,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data.data;
  };

  export const getPageById =
  async (id) => {
    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await axios.get(
        `${API_URL}/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data.data;
  };

export const updatePage =
  async (
    id,
    payload
  ) => {
    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await axios.put(
        `${API_URL}/${id}`,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data.data;
  };