import Admin from "../../models/Admin.model.js";
import ApiError from "../../utils/ApiError.js";

import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";

export const loginAdmin = async (
  username,
  password
) => {
  const admin = await Admin.findOne({
    username,
  });

  if (!admin) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  // Check account status
  if (!admin.isActive) {
    throw new ApiError(
      403,
      "Account is inactive"
    );
  }

  // Check lockout
  if (
    admin.lockUntil &&
    admin.lockUntil > Date.now()
  ) {
    throw new ApiError(
      423,
      "Account temporarily locked. Try again later."
    );
  }

  const isPasswordValid =
    await admin.isPasswordCorrect(
      password
    );

  // Failed login handling
  if (!isPasswordValid) {
    admin.loginAttempts += 1;

    if (admin.loginAttempts >= 5) {
      admin.lockUntil = new Date(
        Date.now() +
          15 * 60 * 1000
      );

      admin.loginAttempts = 0;
    }

    await admin.save({
      validateBeforeSave: false,
    });

    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  // Successful login
  admin.loginAttempts = 0;
  admin.lockUntil = null;

  const accessToken =
    admin.generateAccessToken();

  const refreshToken =
    admin.generateRefreshToken();

  admin.refreshToken = refreshToken;

  admin.lastLogin = new Date();

  await admin.save({
    validateBeforeSave: false,
  });

  return {
    admin,
    accessToken,
    refreshToken,
  };
};


export const refreshAccessToken =
  async (incomingRefreshToken) => {
    if (!incomingRefreshToken) {
      throw new ApiError(
        401,
        "Refresh token missing"
      );
    }

    const decoded = jwt.verify(
      incomingRefreshToken,
      env.refreshSecret
    );

    const admin =
      await Admin.findById(decoded._id);

    if (!admin) {
      throw new ApiError(
        401,
        "Admin not found"
      );
    }

    if (
      admin.refreshToken !==
      incomingRefreshToken
    ) {
      throw new ApiError(
        401,
        "Invalid refresh token"
      );
    }

    const accessToken =
      admin.generateAccessToken();

    return accessToken;
  };

  export const logoutAdmin = async (
  adminId
) => {
  await Admin.findByIdAndUpdate(
    adminId,
    {
      refreshToken: null,
    }
  );

  return true;
};