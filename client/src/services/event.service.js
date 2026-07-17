import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/events`;

/*
====================================
Get Public Events
====================================
*/

export const getPublicEvents = async (
  filters = {}
) => {
  const params = {
    published: true,
  };

  Object.entries(filters).forEach(
    ([key, value]) => {
      if (
        value !== "" &&
        value !== null &&
        value !== undefined
      ) {
        params[key] = value;
      }
    }
  );

  const response = await axios.get(API_URL, {
    params,
  });

  return response.data;
};

/*
====================================
Featured Event
====================================
*/

export const getFeaturedEvent =
  async () => {
    const response = await axios.get(
      `${API_URL}/featured`
    );

    return response.data;
  };

/*
====================================
Event By Slug
====================================
*/

export const getEventBySlug = async (
  slug
) => {
  const response = await axios.get(
    `${API_URL}/slug/${slug}`
  );

  return response.data;
};

/*
====================================
Related Events
====================================
*/

export const getRelatedEvents = async (
  slug,
  limit = 3
) => {
  const response = await axios.get(
    `${API_URL}/slug/${slug}/related`,
    {
      params: { limit },
    }
  );

  return response.data;
};

export const getEventStatistics =
  async () => {
    const response = await axios.get(
      `${API_URL}/statistics`
    );

    return response.data;
  };

export const getVillageInfoHighlights = async (
  villageId
) => {
  const response = await axios.get(API_URL, {
    params: {
      village: villageId,
      published: true,
      showOnVillageInfo: true,
      limit: 4,
    },
  });

  return response.data.data?.data || [];
};
