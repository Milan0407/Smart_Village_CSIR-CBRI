import mongoose from "mongoose";

const successStorySchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

      villageName: {
        type: String,
        required: true,
        trim: true,
      },

      summary: {
        type: String,
      },

      story: {
        type: String,
      },

      impact: {
        type: String,
      },

      beneficiaries: {
        type: Number,
        default: 0,
      },

      featuredImage: {
  type:
    mongoose.Schema.Types.ObjectId,
  ref: "Media",
  default: null,
},

      isFeatured: {
        type: Boolean,
        default: false,
      },

      status: {
        type: String,
        enum: [
          "DRAFT",
          "PUBLISHED",
          "ARCHIVED",
        ],
        default: "DRAFT",
      },

      publishedAt: {
        type: Date,
        default: null,
      },

      createdBy: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        default: null,
      },

      updatedBy: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

const SuccessStory =
  mongoose.model(
    "SuccessStory",
    successStorySchema
  );

export default SuccessStory;