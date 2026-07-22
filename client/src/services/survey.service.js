import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getSurveyYears = async (stateId, villageId) => {
  console.log(`[SurveyService] Fetching survey years for state=${stateId}, village=${villageId}`);
  const response = await axios.get(`${API}/states/${stateId}/villages/${villageId}/surveys`);
  console.log(`[SurveyService] Survey years response:`, response.data.data);
  return response.data.data;
};

export const getSurvey = async (stateId, villageId, year) => {
  console.log(`[SurveyService] Fetching survey for state=${stateId}, village=${villageId}, year=${year}`);
  const response = await axios.get(`${API}/states/${stateId}/villages/${villageId}/surveys/${year}`);
  console.log(`[SurveyService] Survey response structure:`, {
    hasProcessedData: !!response.data.data?.processedData,
    categories: response.data.data?.processedData?.categories?.length || 0,
    categoryNames: response.data.data?.processedData?.categories?.map(c => c.category),
    sampleIndicators: response.data.data?.processedData?.categories?.[0]?.indicators?.slice(0, 2)
  });
  return response.data.data;
};