import mongoose from "mongoose";

const SeoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "",
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    keywords: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    _id: false,
  }
);

export default SeoSchema;