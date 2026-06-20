import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

export const getAllNews =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/news`
      );

    return response.data.data;
  };


  export const getNewsBySlug =
  async (slug) => {
    const response =
      await axios.get(
        `${API_URL}/news/${slug}`
      );

    return response.data.data;
  };