import { Router } from "express";

import * as siteSettingsController from "./siteSettings.controller.js";
import { updateSiteSettingsSchema } from "./siteSettings.validation.js";

import validate from "../../middleware/validate.middleware.js";
import authenticate from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";

const router = Router();

/**
 * Public
 * GET /api/site-settings
 */
router.get(
  "/",
  siteSettingsController.getSiteSettings
);

/**
 * Admin
 * PUT /api/site-settings
 */
router.put(
  "/",
  authenticate,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateSiteSettingsSchema),
  siteSettingsController.updateSiteSettings
);

export default router;