import { Router }
  from "express";

import * as mediaController
  from "./mediaManagement.controller.js";

import upload
  from "../../middleware/upload.middleware.js";

const router = Router();

router.get(
  "/",
  mediaController.getAllMedia
);

router.get(
  "/:id",
  mediaController.getMediaById
);

router.post(
  "/upload",
  upload.single("file"),
  mediaController.uploadMedia
);

router.post(
  "/",
  mediaController.createMedia
);

router.delete(
  "/:id",
  mediaController.deleteMedia
);

export default router;