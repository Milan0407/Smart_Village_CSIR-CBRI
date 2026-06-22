import axios from "axios";

const API_URL =
 import.meta.env.VITE_API_URL;

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