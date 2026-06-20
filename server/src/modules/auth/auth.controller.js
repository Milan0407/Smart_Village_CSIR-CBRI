import ApiResponse from "../../utils/ApiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

import { loginAdmin } from "./auth.service.js";
import {
  refreshAccessToken,
  logoutAdmin,
} from "./auth.service.js";

import { createAuditLog } from "../../services/audit.service.js";

export const login = asyncHandler(
  async (req, res) => {
    const { username, password } = req.body;

    const {
      admin,
      accessToken,
      refreshToken,
    } = await loginAdmin(
      username,
      password
    );

    const cookieOptions = {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    };

    res.cookie(
      "refreshToken",
      refreshToken,
      cookieOptions
    );

    await createAuditLog({
  actor: admin._id,
  action: "LOGIN",
  resource: "AUTH",
  ipAddress: req.ip,
});

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          admin: {
            id: admin._id,
            username: admin.username,
            email: admin.email,
            role: admin.role,
            assignedVillages:
              admin.assignedVillages,
          },

          accessToken,
        },
        "Login successful"
      )
    );
  }
);

// 👇 ADD THIS BELOW LOGIN

export const getCurrentAdmin =
  asyncHandler(async (req, res) => {
    return res.status(200).json(
      new ApiResponse(
        200,
        req.admin,
        "Current admin fetched"
      )
    );
  });

  export const refreshToken =
  asyncHandler(async (req, res) => {
    const token =
      req.cookies.refreshToken;

    const accessToken =
      await refreshAccessToken(
        token
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        { accessToken },
        "Token refreshed"
      )
    );
  });

  export const logout =
  asyncHandler(async (req, res) => {
    await logoutAdmin(
      req.admin._id
    );

    res.clearCookie(
      "refreshToken"
    );

    await createAuditLog({
  actor: req.admin._id,
  action: "LOGOUT",
  resource: "AUTH",
  ipAddress: req.ip,
});

    return res.status(200).json(
      new ApiResponse(
        200,
        {},
        "Logout successful"
      )
    );
  });