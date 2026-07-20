import mongoose from "mongoose";

/*
=====================================================
Facility Categories
=====================================================
*/

export const FACILITY_CATEGORIES = [
  "EDUCATION",
  "HEALTHCARE",
  "BANK",
  "POLICE",
  "TRANSPORT",
  "GOVERNMENT",
  "MARKET",
  "RELIGIOUS",
  "OTHER",
];

/*
=====================================================
Nearby Facility Schema
=====================================================
*/

const nearbyFacilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    category: {
      type: String,
      enum: FACILITY_CATEGORIES,
      default: "OTHER",
    },

    description: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },

    address: {
      type: String,
      trim: true,
      default: "",
      maxlength: 300,
    },

    contactNumber: {
      type: String,
      trim: true,
      default: "",
      maxlength: 20,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number],
        required: true,

        validate: {
          validator(value) {
            return (
              Array.isArray(value) &&
              value.length === 2 &&
              value[0] >= -180 &&
              value[0] <= 180 &&
              value[1] >= -90 &&
              value[1] <= 90
            );
          },

          message:
            "Coordinates must be in [longitude, latitude] format.",
        },
      },
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: true,
  }
);

/*
=====================================================
Village Location Schema
=====================================================
*/

const villageLocationSchema = new mongoose.Schema(
  {
    /*
    =====================================================
    Village Reference
    =====================================================
    */

    village: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true,
      unique: true,
      index: true,
    },

    /*
    =====================================================
    Basic Information
    =====================================================
    */

    overview: {
      type: String,
      default: "",
      trim: true,
      maxlength: 1000
    },

    zoomLevel: {
      type: Number,
      default: 15,
      min: 1,
      max: 22,
    },

googleMapsLink: {
  type: String,
  trim: true,
  default: "",
  validate: {
    validator(value) {
      return (
        value === "" ||
        /^https?:\/\/.+/i.test(value)
      );
    },
    message: "Please provide a valid Google Maps URL.",
  },
},

    /*
    =====================================================
    Nearby Facilities
    =====================================================
    */

    nearbyFacilities: {
      type: [nearbyFacilitySchema],
      default: [],
    },

    /*
    =====================================================
    Publication
    =====================================================
    */

    isPublished: {
      type: Boolean,
      default: true,
    },

    /*
    =====================================================
    Audit
    =====================================================
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

/*
=====================================================
Indexes
=====================================================
*/

villageLocationSchema.index({
  village: 1,
});

villageLocationSchema.index({
  isPublished: 1,
});

villageLocationSchema.index({
  "nearbyFacilities.location": "2dsphere",
});

/*
=====================================================
Model
=====================================================
*/

const VillageLocation = mongoose.model(
  "VillageLocation",
  villageLocationSchema
);

export default VillageLocation;