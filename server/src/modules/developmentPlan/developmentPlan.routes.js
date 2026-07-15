import { Router } from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import * as developmentPlanController from "./developmentPlan.controller.js";

import {
  createDevelopmentPlanSchema,
  updateDevelopmentPlanSchema,
  developmentPlanIdSchema,
  villageSlugSchema,
} from "./developmentPlan.validation.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

/**
 * Get all published development plans of a village
 */
router.get(
  "/public/village/:slug",
  validate(villageSlugSchema),
  developmentPlanController.getByVillage
);

/**
 * Get single published development plan
 */
router.get(
  "/public/:id",
  validate(developmentPlanIdSchema),
  developmentPlanController.getById
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

/**
 * Get all development plans
 */
router.get(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  developmentPlanController.getAll
);

/**
 * Create development plan
 */
router.post(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createDevelopmentPlanSchema),
  developmentPlanController.create
);

/**
 * Get development plan by ID
 */
router.get(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(developmentPlanIdSchema),
  developmentPlanController.getById
);

/**
 * Update development plan
 */
router.patch(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateDevelopmentPlanSchema),
  developmentPlanController.update
);

/**
 * Delete development plan
 */
router.delete(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  validate(developmentPlanIdSchema),
  developmentPlanController.remove
);

/**
 * Publish / Unpublish development plan
 */
router.patch(
  "/:id/publish",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(developmentPlanIdSchema),
  developmentPlanController.togglePublish
);

export default router;