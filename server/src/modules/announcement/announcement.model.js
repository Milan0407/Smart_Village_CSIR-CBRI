import mongoose from "mongoose";

const announcementSchema =
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
        lowercase: true,
      },

      summary: {
        type: String,
        required: true,
      },

      content: {
        type: String,
        required: true,
      },

      pdfUrl: {
        type: String,
        default: "",
      },

      externalLink: {
        type: String,
        default: "",
      },

      publishDate: {
        type: Date,
        default: Date.now,
      },

      expiryDate: {
        type: Date,
      },

      isFeatured: {
        type: Boolean,
        default: false,
      },

      isActive: {
        type: Boolean,
        default: true,
      },

      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
      },
    },
    {
      timestamps: true,
    }
  );

const Announcement =
  mongoose.model(
    "Announcement",
    announcementSchema
  );

export default Announcement;