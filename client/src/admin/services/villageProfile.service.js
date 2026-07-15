import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/village-profiles`;

const getToken = () =>
  localStorage.getItem("accessToken");

/*
=====================================
Get All Village Profiles
=====================================
*/

export const getAllVillageProfiles =
  async () => {
    const response =
      await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

    return response.data.data;
  };


  /*
=====================================
Get Village Profile By ID
=====================================
*/

export const getVillageProfile = async (
  id
) => {
  const response =
    await axios.get(
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
Get Village Profile By Village
=====================================
*/

export const getVillageProfileByVillage =
  async (villageId) => {
    const response =
      await axios.get(
        `${API_URL}/village/${villageId}`,
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
Get Village Profile By Slug
=====================================
*/

export const getVillageProfileBySlug =
  async (slug) => {
    const response =
      await axios.get(
        `${API_URL}/slug/${slug}`
      );

    return response.data.data;
  };

/*
=====================================
Create Village Profile
=====================================
*/

export const createVillageProfile =
  async (payload) => {
    const response =
      await axios.post(
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
Update Village Profile
=====================================
*/

export const updateVillageProfile =
  async (
    id,
    payload
  ) => {
    const response =
      await axios.patch(
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
Delete Village Profile
=====================================
*/

export const deleteVillageProfile =
  async (id) => {
    const response =
      await axios.delete(
        `${API_URL}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };