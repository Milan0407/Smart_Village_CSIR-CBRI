import {
  Router,
} from "express";

import * as newsController
  from "./news.controller.js";

const router =
  Router();

router.get(
  "/",
  newsController.getAllNews
);

router.get(
  "/id/:id",
  newsController.getNewsById
);


router.get(
  "/:slug",
  newsController.getNewsBySlug
);

router.post(
  "/",
  newsController.createNews
);

router.put(
  "/:id",
  newsController.updateNews
);

router.delete(
  "/:id",
  newsController.deleteNews
);
export default router;