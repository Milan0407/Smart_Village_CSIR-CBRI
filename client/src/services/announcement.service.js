import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

export const getPublicAnnouncements =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/announcements/public`
      );

    return response.data.data;
  };

  export const getAnnouncementBySlug =
  async (slug) => {
    const res =
      await axios.get(
        `${API_URL}/announcements/public/${slug}`
      );

    return res.data.data;
  };