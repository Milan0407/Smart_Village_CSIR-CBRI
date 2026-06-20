import mongoose from "mongoose";

const newsSchema =
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

      summary: {
        type: String,
        trim: true,
      },

      content: {
        type: String,
      },

    featuredImage: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Media",
},

      category: {
        type: String,
        enum: [
          "GENERAL",
          "EVENT",
          "ANNOUNCEMENT",
          "SUCCESS_STORY",
          "POLICY",
        ],
        default: "GENERAL",
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

      isFeatured: {
        type: Boolean,
        default: false,
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

const News =
  mongoose.model(
    "News",
    newsSchema
  );

export default News;