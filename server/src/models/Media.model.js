import mongoose from "mongoose";

const mediaSchema =
  new mongoose.Schema(
    {
      filename: {
        type: String,
        required: true,
      },

      originalName: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
      
      publicId: {
  type: String,
  required: true,
},

resourceType: {
  type: String,
  enum: [
    "image",
    "video",
    "raw",
  ],
  default: "image",
},

      mimeType: {
        type: String,
        required: true,
      },

      size: {
        type: Number,
        required: true,
      },

      uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
      },
    },
    {
      timestamps: true,
    }
  );

const Media =
  mongoose.model(
    "Media",
    mediaSchema
  );

export default Media;