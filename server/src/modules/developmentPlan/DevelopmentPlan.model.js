import mongoose from "mongoose";

const developmentPlanSchema = new mongoose.Schema(
  {
    /*
    =====================================================
    RELATION
    =====================================================
    */

    village: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true,
      index: true,
    },

    /*
    =====================================================
    BASIC INFORMATION
    =====================================================
    */

    title: {
      type: String,
      required: true,
      trim: true,
    },

category: {
  type: String,
  required: true,
  enum: [
    "INFRASTRUCTURE",
    "WATER",
    "ENERGY",
    "HEALTH",
    "EDUCATION",
    "AGRICULTURE",
    "DIGITAL",
    "SANITATION",
    "SKILL_DEVELOPMENT",
    "OTHER",
  ],
  default: "OTHER",
},

    description: {
      type: String,
      required: true,
      trim: true,
    },

    objectives: [
      {
        type: String,
        trim: true,
      },
    ],

    /*
    =====================================================
    STATUS
    =====================================================
    */

    status: {
      type: String,
      enum: [
        "PLANNED",
        "IN_PROGRESS",
        "COMPLETED",
        "ON_HOLD",
        "CANCELLED",
      ],
      default: "PLANNED",
    },

    priority: {
      type: String,
      enum: [
        "LOW",
        "MEDIUM",
        "HIGH",
        "CRITICAL",
      ],
      default: "MEDIUM",
    },

    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    /*
    =====================================================
    FINANCIAL
    =====================================================
    */

    budget: {
      type: Number,
      default: 0,
    },

    fundingAgency: {
      type: String,
      trim: true,
    },

    implementingAgency: {
      type: String,
      trim: true,
    },

    /*
    =====================================================
    TIMELINE
    =====================================================
    */

    startDate: Date,

    targetDate: Date,

    completedDate: Date,

    /*
    =====================================================
    MEDIA
    =====================================================
    */

    coverImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
    },

    gallery: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },
    ],

    documents: [
      {
        title: String,
        file: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Media",
        },
      },
    ],

    /*
    =====================================================
    PUBLICATION
    =====================================================
    */

    sortOrder: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },


    sdgGoals: [
  {
    type: Number,
    min: 1,
    max: 17,
  },
],

beneficiaries: {
  type: Number,
  default: 0,
},

    /*
    =====================================================
    AUDIT
    =====================================================
    */

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

developmentPlanSchema.index({
  village: 1,
  status: 1,
});

developmentPlanSchema.index({
  village: 1,
  category: 1,
});

const DevelopmentPlan = mongoose.model(
  "DevelopmentPlan",
  developmentPlanSchema
);

export default DevelopmentPlan;