import { Router }
  from "express";

import * as successStoryController
  from "./successStory.controller.js";

const router =
  Router();

router.get(
  "/",
  successStoryController.getAllStories
);

router.get(
  "/id/:id",
  successStoryController.getStoryById
);

router.get(
  "/:slug",
  successStoryController.getStoryBySlug
);

router.post(
  "/",
  successStoryController.createStory
);

router.put(
  "/:id",
  successStoryController.updateStory
);

router.delete(
  "/:id",
  successStoryController.deleteStory
);

export default router;