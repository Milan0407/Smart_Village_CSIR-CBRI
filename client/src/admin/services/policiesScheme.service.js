import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/policies-schemes/admin`;

const getToken = () =>
  localStorage.getItem("accessToken");

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getPoliciesSchemes =
  async (params = {}) => {
    const response = await axios.get(
      API_URL,
      {
        ...authHeaders(),
        params,
      }
    );

    return response.data.data;
  };

export const getPoliciesSchemeById =
  async (id) => {
    const response = await axios.get(
      `${API_URL}/${id}`,
      authHeaders()
    );

    return response.data.data;
  };

export const createPoliciesScheme =
  async (payload) => {
    const response = await axios.post(
      API_URL,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

export const updatePoliciesScheme =
  async (id, payload) => {
    const response = await axios.patch(
      `${API_URL}/${id}`,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

export const deletePoliciesScheme =
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/${id}`,
      authHeaders()
    );

    return response.data.data;
  };
