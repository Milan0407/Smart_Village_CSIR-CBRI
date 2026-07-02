import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

export const getAllLaboratories =
  async () => {
    const response =
      await axios.get(
        `${API}/laboratories`
      );

    return response.data.data;
  };

export const getLaboratoryById =
  async (id) => {
    const response =
      await axios.get(
        `${API}/laboratories/${id}`
      );

    return response.data.data;
  };

export const createLaboratory =
  async (payload) => {
    const response =
      await axios.post(
        `${API}/laboratories`,
        payload
      );

    return response.data.data;
  };

export const updateLaboratory =
  async (
    id,
    payload
  ) => {
    const response =
      await axios.put(
        `${API}/laboratories/${id}`,
        payload
      );

    return response.data.data;
  };

export const deleteLaboratory =
  async (id) => {
    const response =
      await axios.delete(
        `${API}/laboratories/${id}`
      );

    return response.data.data;
  };