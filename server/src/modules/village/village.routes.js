import { Router } from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import authorize from "../../middleware/rbac.middleware.js";

import * as villageController from "./village.controller.js";

const router = Router();

router.get(
  "/",
  villageController.getAllVillages
);

router.get(
  "/:slug",
  villageController.getVillageBySlug
);


//Super- Admin Routes 
router.post(
  "/",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageController.createVillage
);

router.patch(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageController.updateVillage
);

router.delete(
  "/:id",
  verifyJWT,
  authorize("SUPER_ADMIN"),
  villageController.deleteVillage
);

export default router;