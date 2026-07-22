import { logger } from "../../config/logger.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import * as surveyService from "./survey.service.js";

export const uploadSurvey = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, "Upload an .xlsx survey workbook.");
  const surveyYear = Number(req.body.surveyYear);
  if (!req.body.villageId || !Number.isInteger(surveyYear) || surveyYear < 1900 || surveyYear > 3000) throw new ApiError(400, "Choose a village and enter a valid survey year.");
  const survey = await surveyService.createSurvey({ villageId: req.body.villageId, surveyYear, file: req.file, adminId: req.admin._id });
  logger.info(`Survey uploaded: village=${req.body.villageId}, year=${surveyYear}`);
  return res.status(201).json(new ApiResponse(201, survey, "Survey processed and saved successfully."));
});
export const getSurveyYears = asyncHandler(async (req, res) => {
  const years = await surveyService.getSurveyYears(req.params.stateId, req.params.villageId);
  logger.info(`Survey years fetched: state=${req.params.stateId}, village=${req.params.villageId}, years=${JSON.stringify(years)}`);
  return res.json(new ApiResponse(200, years, "Survey years fetched successfully."));
});
export const getSurveyByYear = asyncHandler(async (req, res) => {
  const year = Number(req.params.year);
  logger.info(`Survey fetch requested: state=${req.params.stateId}, village=${req.params.villageId}, year=${year}`);
  const survey = await surveyService.getSurveyByYear(req.params.stateId, req.params.villageId, year);
  const categoryCount = survey?.processedData?.categories?.length || 0;
  const indicatorCount = survey?.processedData?.categories?.reduce((sum, c) => sum + (c.indicators?.length || 0), 0) || 0;
  logger.info(`Survey fetched: ${categoryCount} categories, ${indicatorCount} indicators total`);
  return res.json(new ApiResponse(200, survey, "Survey data fetched successfully."));
});
export const getSurveyHistory = asyncHandler(async (req, res) => res.json(new ApiResponse(200, await surveyService.getSurveyHistory(), "Survey history fetched successfully.")));
export const updatePublication = asyncHandler(async (req, res) => res.json(new ApiResponse(200, await surveyService.setSurveyPublication(req.params.id, Boolean(req.body.isPublished)), "Survey publication updated.")));
export const removeSurvey = asyncHandler(async (req, res) => {
  await surveyService.deleteSurvey(req.params.id);
  return res.json(new ApiResponse(200, null, "Survey deleted."));
});