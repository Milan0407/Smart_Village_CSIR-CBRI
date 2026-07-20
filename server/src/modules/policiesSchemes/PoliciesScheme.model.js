import mongoose from "mongoose";
import slugify from "slugify";

import MediaSchema from "../../shared/Media.schema.js";

export const POLICY_SCHEME_CATEGORIES = [
  "CENTRAL",
  "STATE",
];

const policiesSchemeSchema = new mongoose.Schema(
  {
    village: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true,
      index: true,
    },

    category: {
      type: String,
      enum: POLICY_SCHEME_CATEGORIES,
      required: true,
      index: true,
    },

    schemeName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    detailedDescription: {
      type: String,
      required: true,
      trim: true,
    },

    featuredImage: MediaSchema,

    beneficiariesCount: {
      type: Number,
      min: 0,
      default: 0,
    },

    officialWebsiteUrl: {
      type: String,
      trim: true,
      default: "",
    },

    displayOrder: {
      type: Number,
      default: 0,
      index: true,
    },

    published: {
      type: Boolean,
      default: true,
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

policiesSchemeSchema.pre("validate", function () {
  if (!this.slug && this.schemeName) {
    this.slug = slugify(this.schemeName, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
});

policiesSchemeSchema.index({
  village: 1,
  category: 1,
  published: 1,
  displayOrder: 1,
});

const PoliciesScheme = mongoose.model(
  "PoliciesScheme",
  policiesSchemeSchema
);

export default PoliciesScheme;
