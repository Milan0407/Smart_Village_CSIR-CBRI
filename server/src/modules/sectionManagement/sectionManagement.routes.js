import { Router }
  from "express";

import verifyJWT
  from "../../middleware/auth.middleware.js";

import authorize
  from "../../middleware/rbac.middleware.js";

import {
  getSectionsByPage,
  getSection,
  updateSection,
} from "./sectionManagement.controller.js";

const router =
  Router();

router.use(
  verifyJWT
);

router.use(
  authorize(
    "SUPER_ADMIN",
    "ADMIN"
  )
);

router.get(
  "/page/:pageId",
  getSectionsByPage
);

router.get(
  "/:id",
  getSection
);

router.put(
  "/:id",
  updateSection
);

export default router;