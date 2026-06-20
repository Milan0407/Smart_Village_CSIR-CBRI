import express from "express";

import * as controller from "./announcement.controller.js";

import verifyJWT from "../../middleware/auth.middleware.js";

import validate from "../../middleware/validate.middleware.js";

import {
  createAnnouncementSchema,
  updateAnnouncementSchema,
} from "./announcement.validation.js";

const router =
  express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/public",
  controller.getLatestAnnouncements
);

router.get(
  "/public/:slug",
  controller.getAnnouncementBySlug
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  verifyJWT,
  controller.getAnnouncements
);




router.post(
  "/",
  verifyJWT,
  validate(
    createAnnouncementSchema
  ),
  controller.createAnnouncement
);

router.get(
  "/:id",
  verifyJWT,
  controller.getAnnouncementById
);


router.put(
  "/:id",
  verifyJWT,
  validate(
    updateAnnouncementSchema
  ),
  controller.updateAnnouncement
);

router.delete(
  "/:id",
  verifyJWT,
  controller.deleteAnnouncement
);

export default router;