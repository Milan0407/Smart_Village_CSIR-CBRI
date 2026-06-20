import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { env } from "../config/env.js";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["SUPER_ADMIN", "ADMIN"],
      required: true,
    },

    assignedVillages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Village",
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
      default: null,
    },

    loginAttempts: {
       type: Number,
       default: 0,
    },

    lockUntil: {
       type: Date,
       default: null,
    },
    
    refreshToken: {
        type: String,
        default: null,
    },
  },
  {
    timestamps: true,
  }
);


adminSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(
    this.password,
    12
  );
});

adminSchema.methods.isPasswordCorrect =
  async function (password) {
    return await bcrypt.compare(
      password,
      this.password
    );
  };

  adminSchema.methods.generateAccessToken =
  function () {
    return jwt.sign(
      {
        _id: this._id,
        role: this.role,
        assignedVillages:
          this.assignedVillages,
      },
      env.accessSecret,
      {
        expiresIn: env.accessExpiry,
      }
    );
  };

  adminSchema.methods.generateRefreshToken =
  function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      env.refreshSecret,
      {
        expiresIn: env.refreshExpiry,
      }
    );
  };

const Admin = mongoose.model(
  "Admin",
  adminSchema
);

export default Admin;