import { Router } from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import * as policiesSchemeController from "./policiesScheme.controller.js";

import {
  createPoliciesSchemeSchema,
  updatePoliciesSchemeSchema,
  policiesSchemeIdSchema,
  policiesSchemeSlugSchema,
  villageSlugSchema,
  policiesSchemeQuerySchema,
} from "./policiesScheme.validation.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/village/:villageSlug",
  validate(villageSlugSchema),
  policiesSchemeController.getByVillage
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/admin",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(policiesSchemeQuerySchema),
  policiesSchemeController.getAll
);

router.post(
  "/admin",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createPoliciesSchemeSchema),
  policiesSchemeController.create
);

router.get(
  "/admin/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(policiesSchemeIdSchema),
  policiesSchemeController.getById
);

router.patch(
  "/admin/:id",
  verifyJWT,
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updatePoliciesSchemeSchema),
  policiesSchemeController.update
);

router.delete(
  "/admin/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  validate(policiesSchemeIdSchema),
  policiesSchemeController.remove
);

router.get(
  "/:schemeSlug",
  validate(policiesSchemeSlugSchema),
  policiesSchemeController.getBySlug
);

export default router;
