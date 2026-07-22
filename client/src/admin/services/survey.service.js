import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
});

export const uploadSurvey = async (formData) => {
  const response = await axios.post(`${API}/admin/survey`, formData, {
    headers: headers(),
  });
  return response.data.data;
};

export const getSurveyHistory = async () => {
  const response = await axios.get(`${API}/admin/surveys`, {
    headers: headers(),
  });
  return response.data.data;
};

export const updateSurveyPublication = async (id, isPublished) => {
  const response = await axios.patch(
    `${API}/admin/surveys/${id}/publication`,
    { isPublished },
    { headers: headers() }
  );
  return response.data.data;
};

export const deleteSurvey = async (id) => {
  const response = await axios.delete(`${API}/admin/surveys/${id}`, {
    headers: headers(),
  });
  return response.data.data;
};