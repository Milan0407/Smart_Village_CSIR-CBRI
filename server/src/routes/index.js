import { Router } from "express";

import healthRoutes from "./health.routes.js";
import authRoutes from "../modules/auth/auth.routes.js";
import villageRoutes from "../modules/village/village.routes.js";

import cmsRoutes from "../modules/cms/cms.routes.js";
import newsRoutes
  from "../modules/news/news.routes.js";

  import successStoryRoutes
  from "../modules/successStory/successStory.routes.js";

  import pageManagementRoutes
  from "../modules/pageManagement/pageManagement.routes.js";

  import sectionManagementRoutes
  from "../modules/sectionManagement/sectionManagement.routes.js";

  import navigationManagementRoutes
  from "../modules/navigationManagement/navigationManagement.routes.js";

  import mediaManagementRoutes
  from "../modules/mediaManagement/mediaManagement.routes.js";

  import videoRoutes
  from "../modules/video/video.routes.js";

  import announcementRoutes
from "../modules/announcement/announcement.routes.js";


const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use(
  "/public",
  cmsRoutes
);

router.use("/villages", villageRoutes);
router.use(
  "/news",
  newsRoutes
);


router.use(
  "/announcements",
  announcementRoutes
);


router.use(
  "/success-stories",
  successStoryRoutes
);

router.use(
  "/videos",
  videoRoutes
);

router.use(
  "/admin/pages",
  pageManagementRoutes
);

router.use(
  "/admin/sections",
  sectionManagementRoutes
);

router.use(
  "/admin/navigation",
  navigationManagementRoutes
);

router.use(
  "/admin/media",
  mediaManagementRoutes
);



export default router;