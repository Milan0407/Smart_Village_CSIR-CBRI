import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

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