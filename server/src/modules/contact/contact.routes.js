import { Router } from "express";

import * as contactController from "./contact.controller.js";
import { sendContactMessageSchema } from "./contact.validation.js";

import validate from "../../middleware/validate.middleware.js";

const router = Router();

/**
 * @route   POST /api/contact
 * @desc    Send contact form message
 * @access  Public
 */
router.post(
  "/",
  validate(sendContactMessageSchema),
  contactController.sendContactMessage
);

export default router;