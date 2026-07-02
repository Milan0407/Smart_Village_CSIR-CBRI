import mongoose from "mongoose";

const successStoryVillageSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },

      shortDescription: {
        type: String,
        default: "",
        trim: true,
      },

      fullDescription: {
        type: String,
        default: "",
        trim: true,
      },

      coverImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
        default: null,
      },

      bannerImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
        default: null,
      },

video: {
  type: {
    type: String,
    enum: ["YOUTUBE", "EXTERNAL", "UPLOAD"],
    default: "YOUTUBE",
  },

  url: {
    type: String,
    default: "",
    trim: true,
  },

  embedUrl: {
    type: String,
    default: "",
    trim: true,
  },

  media: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
    default: null,
  },
},

      isPublished: {
        type: Boolean,
        default: true,
      },

      sortOrder: {
        type: Number,
        default: 0,
      },

      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        default: null,
      },

      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

const SuccessStoryVillage =
  mongoose.model(
    "SuccessStoryVillage",
    successStoryVillageSchema
  );

export default SuccessStoryVillage;