import mongoose from "mongoose";

const villageSchema = new mongoose.Schema(
  {
    /*
    =====================================
    Parent State
    =====================================
    */

    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
      index: true,
    },

    /*
    =====================================
    Identity
    =====================================
    */

    name: {
      en: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },

      regional: {
        type: String,
        trim: true,
        maxlength: 100,
      },
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    villageCode: {
      type: String,
      unique: true,
      trim: true,
    },

    /*
    =====================================
    Administrative Location
    =====================================
    */

    district: {
      type: String,
      required: true,
    },

    block: {
      type: String,
      default: "",
    },

    gramPanchayat: {
      type: String,
      default: "",
    },

    pinCode: {
      type: String,
      default: "",
    },

    /*
    =====================================
    GIS
    =====================================
    */

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },

    /*
    =====================================
    Media
    =====================================
    */

    coverImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
      default: null,
    },

    /*
    =====================================
    Display
    =====================================
    */

    languages: {
      type: [String],
      default: ["en"],
    },

    sortOrder: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: [
        "ACTIVE",
        "INACTIVE",
        "ARCHIVED",
      ],
      default: "ACTIVE",
    },

    /*
    =====================================
    Backward Compatibility
    =====================================
    */

    isActive: {
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

villageSchema.index({
  location: "2dsphere",
});

export default mongoose.model(
  "Village",
  villageSchema
);