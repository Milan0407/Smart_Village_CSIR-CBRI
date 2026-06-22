const API_BASE_URL =
  import.meta.env.VITE_API_URL;

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