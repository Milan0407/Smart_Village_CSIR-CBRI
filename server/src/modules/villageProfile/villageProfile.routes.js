import { Router } from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import * as villageProfileController from "./villageProfile.controller.js";

import {
  createVillageProfileSchema,
  updateVillageProfileSchema,
} from "./villageProfile.validation.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

/**
 * Get village profile by village slug
 * Used by the public Village Portal
 */
router.get(
  "/slug/:slug",
  villageProfileController.getVillageProfileBySlug
);

/**
 * Get village profile by village id
 */
router.get(
  "/village/:villageId",
  villageProfileController.getVillageProfileByVillage
);

/**
 * Get village profile by profile id
 */
router.get(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageProfileController.getVillageProfile
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

/**
 * Get all village profiles
 */
router.get(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageProfileController.getAllVillageProfiles
);

/**
 * Create village profile
 */
router.post(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  validate(createVillageProfileSchema),
  villageProfileController.createVillageProfile
);

/**
 * Update village profile
 */
router.patch(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  validate(updateVillageProfileSchema),
  villageProfileController.updateVillageProfile
);

/**
 * Delete village profile
 */
router.delete(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageProfileController.deleteVillageProfile
);

export default router;
