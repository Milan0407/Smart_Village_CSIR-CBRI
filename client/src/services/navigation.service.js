const API_BASE_URL =
  import.meta.env.VITE_API_URL;

export const getNavigation =
  async () => {
    const response =
      await fetch(
        `${API_BASE_URL}/public/navigation`
      );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to fetch navigation"
      );
    }

    return data.data;
  };