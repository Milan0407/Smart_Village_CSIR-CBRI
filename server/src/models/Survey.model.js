import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true, index: true },
  village: { type: mongoose.Schema.Types.ObjectId, ref: "Village", required: true, index: true },
  surveyYear: { type: Number, required: true, min: 1900, max: 3000 },
  file: { originalName: String, mimeType: String, size: Number },
  uploadedFilePath: { type: String, default: null },
  processedData: { type: mongoose.Schema.Types.Mixed, required: true },
  isPublished: { type: Boolean, default: true, index: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
}, { timestamps: true });

surveySchema.index({ village: 1, surveyYear: 1 }, { unique: true });
export default mongoose.model("Survey", surveySchema);