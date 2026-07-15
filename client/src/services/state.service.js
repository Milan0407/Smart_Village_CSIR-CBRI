import axios from "axios";

const API =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL;

export const getPublishedStates =
  async () => {
    const { data } = await axios.get(
      `${API}/states/public`
    );

    return data.data;
  };

export const getVillagesByState =
  async (stateSlug) => {
    const { data } = await axios.get(
      `${API}/villages/public/state/${stateSlug}`
    );

    return data.data;
  };
