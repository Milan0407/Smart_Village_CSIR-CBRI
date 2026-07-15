import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
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

    caption: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    _id: false,
  }
);

export default GallerySchema;