import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    publicId: {
      type: String,
      trim: true,
      default: "",
    },

    type: {
      type: String,
      trim: true,
      default: "pdf",
    },
  },
  {
    _id: false,
  }
);

export default DocumentSchema;