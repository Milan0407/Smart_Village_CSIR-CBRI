import mongoose from "mongoose";

const siteSettingsSchema =
  new mongoose.Schema(
    {
      siteName: {
        type: String,
        required: true,
        trim: true,
      },

      organizationName: {
        type: String,
        required: true,
        trim: true,
      },

      logoUrl: {
        type: String,
        default: null,
      },

      faviconUrl: {
        type: String,
        default: null,
      },

      contactEmail: {
        type: String,
        trim: true,
      },

      contactPhone: {
        type: String,
        trim: true,
      },

      address: {
        type: String,
        trim: true,
      },

      socialLinks: {
        facebook: String,
        twitter: String,
        linkedin: String,
        youtube: String,
        instagram: String,
      },

      copyrightText: {
        type: String,
      },

      footerDescription: {
        type: String,
      },

      updatedBy: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "Admin",
      },
    },
    {
      timestamps: true,
    }
  );

const SiteSettings =
  mongoose.model(
    "SiteSettings",
    siteSettingsSchema
  );

export default SiteSettings;