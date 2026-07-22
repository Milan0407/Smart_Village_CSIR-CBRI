import { execFile } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import os from "os";
import path from "path";
import { randomUUID } from "crypto";
import Survey from "../../models/Survey.model.js";
import Village from "../../models/Village.model.js";
import ApiError from "../../utils/ApiError.js";

const execFileAsync = promisify(execFile);
const processor = path.resolve("src/processors/vdi_processor.py");

const processWorkbook = async (file) => {
  const temp = path.join(os.tmpdir(), `${randomUUID()}.xlsx`);
  await fs.writeFile(temp, file.buffer);
  try {
    const { stdout } = await execFileAsync(process.env.PYTHON_BIN || "python", [processor, temp], { maxBuffer: 10 * 1024 * 1024, timeout: 120000 });
    return JSON.parse(stdout);
  } catch (error) {
    throw new ApiError(422, `Unable to process VDI workbook: ${error.stderr || error.message}`);
  } finally { await fs.unlink(temp).catch(() => undefined); }
};

export const createSurvey = async ({ villageId, surveyYear, file, adminId }) => {
  const village = await Village.findById(villageId);
  if (!village) throw new ApiError(404, "Village not found.");

  // Persist workbook locally so Delete can remove the Excel file.
  const uploadDir = path.resolve("uploads/surveys");
  await fs.mkdir(uploadDir, { recursive: true });

  const storedName = `${villageId}-${surveyYear}-${randomUUID()}.xlsx`;
  const uploadedFilePath = path.join(uploadDir, storedName);
  await fs.writeFile(uploadedFilePath, file.buffer);

  const processedData = await processWorkbook(file);

  return Survey.findOneAndUpdate(
    { village: village._id, surveyYear },
    {
      state: village.state,
      village: village._id,
      surveyYear,
      file: { originalName: file.originalname, mimeType: file.mimetype, size: file.size },
      uploadedFilePath,
      processedData,
      uploadedBy: adminId,
      isPublished: true,
    },
    { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
  );
};

export const getSurveyYears = async (state, village) => (await Survey.find({ state, village, isPublished: true }).sort({ surveyYear: -1 }).select("surveyYear -_id")).map(x => x.surveyYear);
export const getSurveyByYear = async (state, village, surveyYear) => {
  const survey = await Survey.findOne({ state, village, surveyYear, isPublished: true }).select("surveyYear processedData updatedAt");
  if (!survey) throw new ApiError(404, "No survey exists for this village and year.");
  return survey;
};

export const getSurveyHistory = async () => Survey.find()
  .populate("village", "name slug")
  .populate("state", "name slug")
  .sort({ updatedAt: -1 })
  .select("surveyYear file isPublished village state createdAt updatedAt");

export const setSurveyPublication = async (id, isPublished) => {
  const survey = await Survey.findByIdAndUpdate(id, { isPublished }, { new: true });
  if (!survey) throw new ApiError(404, "Survey not found.");
  return survey;
};

export const deleteSurvey = async (id) => {
  const survey = await Survey.findByIdAndDelete(id);
  if (!survey) throw new ApiError(404, "Survey not found.");

  if (survey.uploadedFilePath) {
    try {
      await fs.unlink(path.resolve(survey.uploadedFilePath));
    } catch (e) {
      // ignore if already missing
    }
  }
};