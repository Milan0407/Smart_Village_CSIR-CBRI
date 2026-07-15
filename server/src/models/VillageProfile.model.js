import mongoose from "mongoose";

const highlightSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    value: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    icon: {
      type: String,
      default: "",
    },
  },
  {
    _id: false,
  }
);

const villageProfileSchema = new mongoose.Schema(
  {
    /*
    =====================================
    Village Reference
    =====================================
    */

    village: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true,
      unique: true,
      index: true,
    },

    /*
    =====================================
    Hero Section
    =====================================
    */

    heroTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    heroSubtitle: {
      type: String,
      default: "",
      trim: true,
      maxlength: 300,
    },

    heroImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
      default: null,
    },

    /*
    =====================================
    Village Information
    =====================================
    */

    overview: {
      type: String,
      default: "",
    },

    history: {
      type: String,
      default: "",
    },

    geography: {
      type: String,
      default: "",
    },

    climate: {
      type: String,
      default: "",
    },

    culture: {
      type: String,
      default: "",
    },

    strengths: {
      type: String,
      default: "",
    },

    challenges: {
      type: String,
      default: "",
    },

    opportunities: {
      type: String,
      default: "",
    },

    /*
    =====================================
    Highlights
    =====================================
    */

    highlights: {
      type: [highlightSchema],
      default: [],
    },

    /*
    =====================================
    Gallery
    =====================================
    */

    galleryImages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },
    ],

    /*
    =====================================
    Contact Information
    =====================================
    */

    contactPerson: {
      type: String,
      default: "",
    },

    contactDesignation: {
      type: String,
      default: "",
    },

    contactNumber: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    /*
    =====================================
    Display
    =====================================
    */

    sortOrder: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    /*
    =====================================
    Audit
    =====================================
    */

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

export default mongoose.model(
  "VillageProfile",
  villageProfileSchema
);