const API_BASE_URL =
  "http://localhost:5000/api";

export const getPageBySlug =
  async (slug) => {
    const response =
      await fetch(
        `${API_BASE_URL}/public/pages/${slug}`
      );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to fetch page"
      );
    }

    return data.data;
  };