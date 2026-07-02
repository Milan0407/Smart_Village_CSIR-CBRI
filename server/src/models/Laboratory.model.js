import mongoose from "mongoose";

const laboratorySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },

      type: {
        type: String,
        enum: [
          "NODAL",
          "PARTICIPATING",
        ],
        required: true,
      },

      heroImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },

      directorName: {
        type: String,
        default: "",
      },

      overview: {
        type: String,
        default: "",
      },

      researchAreas: [
        String,
      ],

      contributions: [
        String,
      ],

      address: {
        type: String,
        default: "",
      },

      phone: {
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

      isPublished: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Laboratory",
  laboratorySchema
);