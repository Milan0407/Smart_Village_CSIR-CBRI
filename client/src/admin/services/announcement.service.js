import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getAnnouncements =
  async () => {
    const res =
      await axios.get(
        `${API}/announcements`,
        authHeaders()
      );

    console.log(
      "ANNOUNCEMENT API RESPONSE",
      res.data
    );

    return res.data.data;
  };

export const getAnnouncementById =
  async (id) => {
    const res =
      await axios.get(
        `${API}/announcements/${id}`,
        authHeaders()
      );

    return res.data.data;
  };

export const createAnnouncement =
  async (data) => {
    const res =
      await axios.post(
        `${API}/announcements`,
        data,
        authHeaders()
      );

    return res.data.data;
  };

export const updateAnnouncement =
  async (
    id,
    data
  ) => {
    const res =
      await axios.put(
        `${API}/announcements/${id}`,
        data,
        authHeaders()
      );

    return res.data.data;
  };

export const deleteAnnouncement =
  async (id) => {
    const res =
      await axios.delete(
        `${API}/announcements/${id}`,
        authHeaders()
      );

    return res.data.data;
  };