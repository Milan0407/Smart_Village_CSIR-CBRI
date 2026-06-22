import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export const getAllStories =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/success-stories`
      );

    return response.data.data;
  };

export const getStoryBySlug =
  async (slug) => {
    const response =
      await axios.get(
        `${API_URL}/success-stories/${slug}`
      );

    return response.data.data;
  };