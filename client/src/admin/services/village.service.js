import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/villages`;

const getToken = () =>
  localStorage.getItem("accessToken");

/*
=====================================
Get All Villages (Admin)
=====================================
*/

export const getAllVillages = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data.data;
};

/*
=====================================
Get Village By ID
=====================================
*/

export const getVillage = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data.data;
};

/*
=====================================
Create Village
=====================================
*/

export const createVillage = async (payload) => {
  const response = await axios.post(
    API_URL,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data.data;
};

/*
=====================================
Update Village
=====================================
*/

export const updateVillage = async (
  id,
  payload
) => {
  const response = await axios.patch(
    `${API_URL}/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data.data;
};

/*
=====================================
Delete Village
=====================================
*/

export const deleteVillage = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data.data;
};

/*
=====================================
Get Published Villages (Public)
=====================================
*/

export const getPublishedVillages =
  async () => {
    const response = await axios.get(
      `${API_URL}/public`
    );

    return response.data.data;
  };

/*
=====================================
Get Village By Slug (Public)
=====================================
*/

export const getVillageBySlug = async (
  slug
) => {
  const response = await axios.get(
    `${API_URL}/slug/${slug}`
  );

  return response.data.data;
};