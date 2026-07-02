import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export const getAllLaboratories =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/laboratories`
      );

    return response.data.data;
  };

export const getLaboratoryBySlug =
  async (slug) => {
    const response =
      await axios.get(
        `${API_URL}/laboratories/slug/${slug}`
      );

    return response.data.data;
  };

  export const getNodalLaboratory =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/laboratories/nodal`
      );

    return response.data.data;
  };