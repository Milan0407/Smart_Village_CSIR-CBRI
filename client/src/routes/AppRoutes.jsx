import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

import VillageInfoPage from "../pages/VillagePortal/modules/VillageInfoPage";
import DevelopmentPlanPage from "../pages/VillagePortal/modules/DevelopmentPlanPage";
import CurrentAffairsPage from "../pages/VillagePortal/modules/CurrentAffairsPage";
import EventsPage from "../pages/VillagePortal/modules/EventsPage";
import TraditionalFoodPage from "../pages/VillagePortal/modules/TraditionalFoodPage";
import VillageMapPage from "../pages/VillagePortal/modules/VillageMapPage";
import PoliciesPage from "../pages/VillagePortal/modules/PoliciesPage";
import KnowledgeHubPage from "../pages/VillagePortal/modules/KnowledgeHubPage";
import IndicatorsPage from "../pages/VillagePortal/modules/IndicatorsPage";
import TechnologyMappingPage from "../pages/VillagePortal/modules/TechnologyMappingPage";
import FeedbackPage from "../pages/VillagePortal/modules/FeedbackPage";

import AboutPage from "../pages/AboutPage/AboutPage";
import MissionObjectivesPage from "../pages/AboutPage/MissionObjectivesPage";
import DGDeskPage from "../pages/AboutPage/DGDeskPage";
import DirectorDeskPage from "../pages/AboutPage/DirectorDeskPage";

import NodalLabPage from "../pages/NodalLabPage/NodalLabPage";
import ParticipatingLabsPage from "../pages/ParticipatingLabsPage/ParticipatingLabsPage";
import LaboratoryDetailPage from "../pages/LaboratoryPage/LaboratoryDetailPage";

import SmartVillagePage from "../pages/SmartVillagePage/SmartVillagePage";

import NewsPage from "../pages/NewsPage/NewsPage";
import NewsDetailPage from "../pages/NewsPage/NewsDetailPage";

import SuccessStoriesPage from "../pages/SuccessStoriesPage/SuccessStoriesPage";
import VillageSuccessStoriesPage from "../pages/SuccessStoriesPage/VillageSuccessStoriesPage";
import SuccessStoryDetailPage from "../pages/SuccessStoriesPage/SuccessStoryDetailPage";

import ContactPage from "../pages/ContactPage/ContactPage";

import AnnouncementDetailPage from "../pages/AnnouncementPage/AnnouncementDetailPage";

import AdminRoutes from "../admin/routes/AdminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Public main pages */}
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/about/mission-objectives"
        element={<MissionObjectivesPage />}
      />
      <Route path="/about/dg-desk" element={<DGDeskPage />} />
      <Route
        path="/about/director-desk"
        element={<DirectorDeskPage />}
      />

      {/* Announcements */}
      <Route
        path="/announcements/:slug"
        element={<AnnouncementDetailPage />}
      />

      {/* CSIR Laboratories */}
      <Route
        path="/csir-laboratories/nodal-lab"
        element={<NodalLabPage />}
      />
      <Route
        path="/csir-laboratories/participating-labs"
        element={<ParticipatingLabsPage />}
      />
      <Route
        path="/participating-labs/:slug"
        element={<LaboratoryDetailPage />}
      />

      {/* Smart Village */}
      <Route
        path="/csir-smart-village"
        element={<SmartVillagePage />}
      />

      {/* News */}
      <Route path="/news-updates" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsDetailPage />} />

      {/* Success Stories */}
      <Route
        path="/success-stories"
        element={<SuccessStoriesPage />}
      />
      <Route
        path="/success-stories/:villageSlug"
        element={<VillageSuccessStoriesPage />}
      />
      <Route
        path="/success-stories/:villageSlug/:storySlug"
        element={<SuccessStoryDetailPage />}
      />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* Village Portal Modules */}
      <Route
        path="/village/:slug/info"
        element={<VillageInfoPage />}
      />
      <Route
        path="/village/:slug/development-plan"
        element={<DevelopmentPlanPage />}
      />
      <Route
        path="/village/:slug/current-affairs"
        element={<CurrentAffairsPage />}
      />
      <Route
        path="/village/:slug/events"
        element={<EventsPage />}
      />
      <Route
        path="/village/:slug/traditional-food"
        element={<TraditionalFoodPage />}
      />
      <Route
        path="/village/:slug/map"
        element={<VillageMapPage />}
      />
      <Route
        path="/village/:slug/policies"
        element={<PoliciesPage />}
      />
      <Route
        path="/village/:slug/knowledge-hub"
        element={<KnowledgeHubPage />}
      />
      <Route
        path="/village/:slug/indicators"
        element={<IndicatorsPage />}
      />
      <Route
        path="/village/:slug/technology-mapping"
        element={<TechnologyMappingPage />}
      />
      <Route
        path="/village/:slug/feedback"
        element={<FeedbackPage />}
      />
    </Routes>
  );
};

export default AppRoutes;