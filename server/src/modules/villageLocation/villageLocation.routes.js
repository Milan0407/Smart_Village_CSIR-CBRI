import { Router } from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import * as villageLocationController from "./villageLocation.controller.js";

import {
  createVillageLocationSchema,
  updateVillageLocationSchema,
  villageLocationIdSchema,
  villageSlugSchema,
  facilityParamsSchema,
  createFacilitySchema,
  updateFacilitySchema,
} from "./villageLocation.validation.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

/**
 * Get published village location by village slug
 */
router.get(
  "/public/village/:slug",
  validate(villageSlugSchema),
  villageLocationController.getByVillage
);

/**
 * Get village location by ID
 */
router.get(
  "/public/:id",
  validate(villageLocationIdSchema),
  villageLocationController.getById
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

/**
 * Get all village locations
 */
router.get(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  villageLocationController.getAll
);

/**
 * Create village location
 */
router.post(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createVillageLocationSchema),
  villageLocationController.create
);

/**
 * Add nearby facility
 */
router.post(
  "/:id/facilities",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createFacilitySchema),
  villageLocationController.addFacility
);

/**
 * Update nearby facility
 */
router.patch(
  "/:id/facilities/:facilityId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateFacilitySchema),
  villageLocationController.editFacility
);

/**
 * Delete nearby facility
 */
router.delete(
  "/:id/facilities/:facilityId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(facilityParamsSchema),
  villageLocationController.removeFacility
);

/**
 * Get village location by ID
 */
router.get(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(villageLocationIdSchema),
  villageLocationController.getById
);

/**
 * Update village location
 */
router.patch(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateVillageLocationSchema),
  villageLocationController.update
);

/**
 * Delete village location
 */
router.delete(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  validate(villageLocationIdSchema),
  villageLocationController.remove
);

/**
 * Publish / Unpublish village location
 */
router.patch(
  "/:id/publish",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(villageLocationIdSchema),
  villageLocationController.togglePublish
);

export default router;