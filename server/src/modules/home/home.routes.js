import { Router } from "express";

import * as homeController from "./home.controller.js";

const router = Router();

router.get(
  "/stats",
  homeController.getHomeStats
);

export default router;
