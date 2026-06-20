import { Router } from "express";

import validate from "../../middleware/validate.middleware.js";
import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";

import {
  login,
  getCurrentAdmin,
  refreshToken,
  logout,
} from "./auth.controller.js";

import {
  authLimiter,
} from "../../middleware/rateLimit.middleware.js";


import { loginSchema } from "./auth.validation.js";

const router = Router();

router.use(authLimiter);
router.post(
  "/login",
  validate(loginSchema),
  login
);

router.post(
  "/refresh",
  refreshToken
);

router.post(
  "/logout",
  verifyJWT,
  logout
);

router.get(
  "/me",
  verifyJWT,
  getCurrentAdmin
);

router.get(
  "/admin-only",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message:
        "SUPER_ADMIN access granted",
    });
  }
);

export default router;