import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

const API_URL =
  `${API}/development-plans`;

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

/*
====================================================
Get All Development Plans
====================================================
*/

export const getAllDevelopmentPlans =
  async () => {
    const response =
      await axios.get(API_URL, {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      });

    return response.data.data;
  };

/*
====================================================
Get Development Plan By ID
====================================================
*/

export const getDevelopmentPlanById =
  async (id) => {
    const response =
      await axios.get(
        `${API_URL}/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

/*
====================================================
Create Development Plan
====================================================
*/

export const createDevelopmentPlan =
  async (payload) => {
    const response =
      await axios.post(
        API_URL,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

/*
====================================================
Update Development Plan
====================================================
*/

export const updateDevelopmentPlan =
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
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

/*
====================================================
Delete Development Plan
====================================================
*/

export const deleteDevelopmentPlan =
  async (id) => {
    const response =
      await axios.delete(
        `${API_URL}/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

/*
====================================================
Publish / Unpublish
====================================================
*/

export const togglePublishDevelopmentPlan =
  async (id) => {
    const response =
      await axios.patch(
        `${API_URL}/${id}/publish`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };