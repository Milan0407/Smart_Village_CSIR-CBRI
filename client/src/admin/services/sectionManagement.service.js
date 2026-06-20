import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

const authHeaders = () => ({
  headers: {
    Authorization:
      `Bearer ${getToken()}`,
  },
});

export const getSectionsByPage =
  async (pageId) => {
    const res =
      await axios.get(
        `${API}/admin/sections/page/${pageId}`,
        authHeaders()
      );

    return res.data.data;
  };

export const updateSection =
  async (
    id,
    payload
  ) => {
    const res =
      await axios.put(
        `${API}/admin/sections/${id}`,
        payload,
        authHeaders()
      );

    return res.data.data;
  };