import express from "express";

import * as eventController from "./event.controller.js";

import validate from "../../middleware/validate.middleware.js";
import auth from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";

import {
  createEventSchema,
  updateEventSchema,
  eventIdSchema,
  eventSlugSchema,
  eventQuerySchema,
} from "./event.validation.js";

const router = express.Router();

/* ==========================================================
   Public Routes
========================================================== */

router.get(
  "/featured",
  eventController.getFeaturedEvent
);

router.get(
  "/statistics",
  eventController.getEventStatistics
);

router.get(
  "/",
  validate(eventQuerySchema),
  eventController.getEvents
);

router.get(
  "/slug/:slug",
  validate(eventSlugSchema),
  eventController.getEventBySlug
);

router.get(
  "/:id",
  validate(eventIdSchema),
  eventController.getEventById
);

/* ==========================================================
   Admin Routes
========================================================== */

router.use(auth);

router.post(
  "/",
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(createEventSchema),
  eventController.createEvent
);

router.put(
  "/:id",
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(updateEventSchema),
  eventController.updateEvent
);

router.patch(
  "/:id/publish",
  authorize("SUPER_ADMIN", "ADMIN"),
  eventController.togglePublish
);

router.patch(
  "/:id/feature",
  authorize("SUPER_ADMIN", "ADMIN"),
  eventController.toggleFeatured
);

router.delete(
  "/:id",
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(eventIdSchema),
  eventController.deleteEvent
);

export default router;
