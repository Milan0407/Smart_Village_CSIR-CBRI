import { Router }
  from "express";

import * as navigationController
  from "./navigationManagement.controller.js";

const router = Router();

router.get(
  "/",
  navigationController.getAllNavigation
);

router.get(
  "/:id",
  navigationController.getNavigationById
);

router.post(
  "/",
  navigationController.createNavigation
);

router.put(
  "/:id",
  navigationController.updateNavigation
);

router.delete(
  "/:id",
  navigationController.deleteNavigation
);

export default router;