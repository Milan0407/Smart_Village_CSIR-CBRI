import { Router } from "express";

import * as controller
  from "./successStoryVillage.controller.js";

import validate
  from "../../middleware/validate.middleware.js";

import {
  createSuccessStoryVillageSchema,
  updateSuccessStoryVillageSchema,
} from "./successStoryVillage.validation.js";

import verifyJWT
  from "../../middleware/auth.middleware.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public
|--------------------------------------------------------------------------
*/

router.get(
  "/published",
  controller.getPublishedVillages
);

router.get(
  "/slug/:slug",
  controller.getVillageBySlug
);

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  verifyJWT,
  controller.getAllVillages
);

router.get(
  "/id/:id",
  verifyJWT,
  controller.getVillageById
);

router.post(
  "/",
  verifyJWT,
  validate(
    createSuccessStoryVillageSchema
  ),
  controller.createVillage
);

router.put(
  "/:id",
  verifyJWT,
  validate(
    updateSuccessStoryVillageSchema
  ),
  controller.updateVillage
);

router.delete(
  "/:id",
  verifyJWT,
  controller.deleteVillage
);

export default router;