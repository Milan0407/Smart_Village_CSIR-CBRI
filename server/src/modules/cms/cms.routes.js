import { Router } from "express";
import {
  navigation,
} from "./cms.controller.js";

import {
  getPage,
} from "./cms.controller.js";

const router = Router();

router.get(
  "/navigation",
  navigation
);

router.get(
  "/pages/:slug",
  getPage
);

export default router;