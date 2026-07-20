import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/village-locations`;

const getToken = () =>
  localStorage.getItem("accessToken");

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

/*
====================================================
Get All Village Locations
====================================================
*/

export const getAllVillageLocations =
  async () => {
    const response = await axios.get(
      API_URL,
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Get Village Location By ID
====================================================
*/

export const getVillageLocationById =
  async (id) => {
    const response = await axios.get(
      `${API_URL}/${id}`,
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Create Village Location
====================================================
*/

export const createVillageLocation =
  async (payload) => {
    const response = await axios.post(
      API_URL,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Update Village Location
====================================================
*/

export const updateVillageLocation =
  async (id, payload) => {
    const response = await axios.patch(
      `${API_URL}/${id}`,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Delete Village Location
====================================================
*/

export const deleteVillageLocation =
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/${id}`,
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Publish / Unpublish
====================================================
*/

export const togglePublishVillageLocation =
  async (id) => {
    const response = await axios.patch(
      `${API_URL}/${id}/publish`,
      {},
      authHeaders()
    );

    return response.data.data;
  };

/*
====================================================
Nearby Facility Management
====================================================
*/

export const createFacility =
  async (locationId, payload) => {
    const response = await axios.post(
      `${API_URL}/${locationId}/facilities`,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

export const updateFacility =
  async (
    locationId,
    facilityId,
    payload
  ) => {
    const response = await axios.patch(
      `${API_URL}/${locationId}/facilities/${facilityId}`,
      payload,
      authHeaders()
    );

    return response.data.data;
  };

export const deleteFacility =
  async (
    locationId,
    facilityId
  ) => {
    const response = await axios.delete(
      `${API_URL}/${locationId}/facilities/${facilityId}`,
      authHeaders()
    );

    return response.data.data;
  };