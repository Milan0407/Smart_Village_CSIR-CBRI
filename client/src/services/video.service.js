import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

export const getPublicVideos =
  async () => {
    const response =
      await axios.get(
        `${API}/videos/public`
      );

    return response.data.data;
  };