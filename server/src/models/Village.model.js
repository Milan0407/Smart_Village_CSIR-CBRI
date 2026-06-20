import mongoose from "mongoose";

const villageSchema =
  new mongoose.Schema(
    {
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

      district: {
        type: String,
        required: true,
        trim: true,
      },

      state: {
        type: String,
        required: true,
        trim: true,
      },

      pinCode: {
        type: String,
      },

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

      population: {
        type: Number,
        default: 0,
      },

      coverImageUrl: {
        type: String,
      },

      languages: {
        type: [String],
        default: ["en"],
      },

      isActive: {
        type: Boolean,
        default: true,
      },

      createdBy: {
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


villageSchema.index({
  location: "2dsphere",
});

export default mongoose.model(
  "Village",
  villageSchema
);