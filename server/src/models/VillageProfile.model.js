import mongoose from "mongoose";

const galleryItemSchema = new mongoose.Schema(
  {
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
      required: true,
    },

    caption: {
      type: String,
      default: "",
      trim: true,
      maxlength: 200,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: true,
  }
);

const contactPersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    designation: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
      maxlength: 20,
    },

    alternatePhone: {
      type: String,
      default: "",
      trim: true,
      maxlength: 20,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    officeAddress: {
      type: String,
      default: "",
      trim: true,
      maxlength: 500,
    },

    gramPanchayat: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    block: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    district: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    state: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    pinCode: {
      type: String,
      default: "",
      trim: true,
      maxlength: 6,
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

    overview: {
      type: String,
      default: "",
    },

    aboutHeading: {
      type: String,
      default: "About Village",
      trim: true,
      maxlength: 200,
    },

    aboutSubtitle: {
      type: String,
      default: "",
      trim: true,
      maxlength: 300,
    },

    /*
    =====================================
    Gallery
    =====================================
    */

    galleryImages: {
      type: [galleryItemSchema],
      default: [],
    },

    /*
    =====================================
    Contact Information
    =====================================
    */

    contactPersons: {
      type: [contactPersonSchema],
      default: [],
    },

    /*
    Legacy single-contact fields retained only to read older documents.
    New writes use contactPersons.
    */

    contactPerson: {
      type: String,
      default: "",
    },

    designation: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    alternatePhone: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    officeAddress: {
      type: String,
      default: "",
    },

    gramPanchayat: {
      type: String,
      default: "",
    },

    block: {
      type: String,
      default: "",
    },

    district: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    pinCode: {
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
