import express from "express";

import * as stateController from "./state.controller.js";

import validate from "../../middleware/validate.middleware.js";

import {
  createStateSchema,
  updateStateSchema,
} from "./state.validation.js";

// Later we'll add:
// import auth from "../../middleware/auth.middleware.js";
// import rbac from "../../middleware/rbac.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/public",
  stateController.getPublishedStates
);

router.get(
  "/slug/:slug",
  stateController.getStateBySlug
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  validate(createStateSchema),
  stateController.createState
);

router.get(
  "/",
  stateController.getAllStates
);

router.get(
  "/:id",
  stateController.getStateById
);

router.patch(
  "/:id",
  validate(updateStateSchema),
  stateController.updateState
);

router.delete(
  "/:id",
  stateController.deleteState
);

export default router;