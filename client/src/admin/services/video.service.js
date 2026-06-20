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

export const getVideos =
  async () => {
    const res =
      await axios.get(
        `${API}/videos`,
        authHeaders()
      );

    console.log(
      "VIDEO API RESPONSE",
      res.data
    );

    return res.data.data;
  };

export const getVideoById =
  async (id) => {
    const res =
      await axios.get(
        `${API}/videos/${id}`,
        authHeaders()
      );

    return res.data.data;
  };

export const createVideo =
  async (data) => {
    const res =
      await axios.post(
        `${API}/videos`,
        data,
        authHeaders()
      );

    return res.data.data;
  };

export const updateVideo =
  async (
    id,
    data
  ) => {
    const res =
      await axios.put(
        `${API}/videos/${id}`,
        data,
        authHeaders()
      );

    return res.data.data;
  };

export const deleteVideo =
  async (id) => {
    const res =
      await axios.delete(
        `${API}/videos/${id}`,
        authHeaders()
      );

    return res.data.data;
  };