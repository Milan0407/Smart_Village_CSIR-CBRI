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
  sectorParamsSchema,
  technologyParamsSchema,
  createSectorSchema,
  updateSectorSchema,
  createTechnologySchema,
  updateTechnologySchema,
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
 * Create sector
 */
router.post(
  "/:id/sectors",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createSectorSchema),
  developmentPlanController.addSector
);

/**
 * Update sector
 */
router.patch(
  "/:id/sectors/:sectorId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateSectorSchema),
  developmentPlanController.editSector
);

/**
 * Delete sector
 */
router.delete(
  "/:id/sectors/:sectorId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(sectorParamsSchema),
  developmentPlanController.removeSector
);

/**
 * Create technology
 */
router.post(
  "/:id/sectors/:sectorId/technologies",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createTechnologySchema),
  developmentPlanController.addTechnology
);

/**
 * Update technology
 */
router.patch(
  "/:id/sectors/:sectorId/technologies/:technologyId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateTechnologySchema),
  developmentPlanController.editTechnology
);

/**
 * Delete technology
 */
router.delete(
  "/:id/sectors/:sectorId/technologies/:technologyId",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(technologyParamsSchema),
  developmentPlanController.removeTechnology
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
