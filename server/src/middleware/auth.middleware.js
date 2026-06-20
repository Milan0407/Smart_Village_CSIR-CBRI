import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

import Admin from "../models/Admin.model.js";
import ApiError from "../utils/ApiError.js";

const verifyJWT = async (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      throw new ApiError(
        401,
        "Unauthorized"
      );
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      env.accessSecret
    );

    const admin =
      await Admin.findById(decoded._id)
        .select("-password");

    if (!admin) {
      throw new ApiError(
        401,
        "Admin not found"
      );
    }

    req.admin = admin;

    next();
  } catch (error) {
    next(error);
  }
};

export default verifyJWT;