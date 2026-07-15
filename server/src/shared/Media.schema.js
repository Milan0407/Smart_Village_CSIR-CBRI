import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },

    publicId: {
      type: String,
      required: true,
      trim: true,
    },

    alt: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    _id: false,
  }
);

export default MediaSchema;