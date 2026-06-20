import { Router }
  from "express";

import verifyJWT
  from "../../middleware/auth.middleware.js";

import authorize
  from "../../middleware/rbac.middleware.js";

import {
  getPages,
  getPage,
  updatePage,
} from "./pageManagement.controller.js";

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
  "/",
  getPages
);

router.get(
  "/:id",
  getPage
);

router.put(
  "/:id",
  updatePage
);

export default router;