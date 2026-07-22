  import { Router } from "express";

  import healthRoutes from "./health.routes.js";
  import authRoutes from "../modules/auth/auth.routes.js";
  import villageRoutes from "../modules/village/village.routes.js";
  import stateRoutes from "../modules/state/state.routes.js";
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

  import laboratoryRoutes
  from "../modules/laboratory/laboratory.routes.js";

  import contactRoutes
  from "../modules/contact/contact.routes.js";

  import siteSettingsRoutes
  from "../modules/siteSettings/siteSettings.routes.js";

  import successStoryVillageRoutes
  from "../modules/successStoryVillage/successStoryVillage.routes.js";

  import villageProfileRoutes from "../modules/villageProfile/villageProfile.routes.js";

  import developmentPlanRoutes from "../modules/developmentPlan/developmentPlan.routes.js";
  import surveyRoutes from "../modules/survey/survey.routes.js";

  import eventRoutes from "../modules/events/event.routes.js";

  import homeRoutes from "../modules/home/home.routes.js";

  import villageLocationRoutes
  from "../modules/villageLocation/villageLocation.routes.js";

  import policiesSchemeRoutes from "../modules/policiesSchemes/policiesScheme.routes.js";
  import {
  publicLimiter,
  adminLimiter,
} from "../middleware/rateLimit.middleware.js";

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use(
  "/public",
  publicLimiter,
  cmsRoutes
);

router.use(
  "/states",
  publicLimiter,
  stateRoutes
);

router.use(
  "/villages",
  publicLimiter,
  villageRoutes
);

router.use(
  "/news",
  publicLimiter,
  newsRoutes
);


router.use(
  "/village-profiles",
  publicLimiter,
  villageProfileRoutes
);

router.use(
  "/announcements",
  publicLimiter,
  announcementRoutes
);


router.use(
  "/success-stories",
  publicLimiter,
  successStoryRoutes
);


router.use(
  "/success-story-villages",
  publicLimiter,
  successStoryVillageRoutes
);

router.use(
  "/videos",
  publicLimiter,
  videoRoutes
);

router.use(
  "/laboratories",
  publicLimiter,
  laboratoryRoutes
);

router.use(
  "/contact",
  publicLimiter,
  contactRoutes
);

router.use(
  "/site-settings",
  publicLimiter,
  siteSettingsRoutes
);

router.use(
  "/development-plans",
  publicLimiter,
  developmentPlanRoutes
);

router.use("/", surveyRoutes);

router.use(
  "/village-locations",
  publicLimiter,
  villageLocationRoutes
);

router.use(
  "/events",
  publicLimiter,
  eventRoutes
);

router.use(
  "/home",
  publicLimiter,
  homeRoutes
);

router.use(
  "/policies-schemes",
  publicLimiter,
  policiesSchemeRoutes
);

router.use(
  "/admin/pages",
  adminLimiter,
  pageManagementRoutes
);

router.use(
  "/admin/sections",
  adminLimiter,
  sectionManagementRoutes
);

router.use(
  "/admin/navigation",
  adminLimiter,
  navigationManagementRoutes
);

router.use(
  "/admin/media",
  adminLimiter,
  mediaManagementRoutes
);

export default router;
