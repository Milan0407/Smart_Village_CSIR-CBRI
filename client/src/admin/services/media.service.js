import axios from "axios";

const API =import.meta.env.VITE_API_URL;
const API_URL =
  `${API}/admin/media`;

const getToken = () =>
  localStorage.getItem(
    "accessToken"
  );

export const getAllMedia =
  async () => {
    const response =
      await axios.get(
        API_URL,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.data.data;
  };

export const uploadMedia =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await axios.post(
        `${API_URL}/upload`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`,
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data.data;
  };

export const deleteMedia =
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