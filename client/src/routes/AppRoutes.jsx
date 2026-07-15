import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import MissionObjectivesPage from "../pages/AboutPage/MissionObjectivesPage";
import DGDeskPage from "../pages/AboutPage/DGDeskPage";
import DirectorDeskPage from "../pages/AboutPage/DirectorDeskPage";
import NodalLabPage from "../pages/NodalLabPage/NodalLabPage";
import ParticipatingLabsPage from "../pages/ParticipatingLabsPage/ParticipatingLabsPage";
import LaboratoryDetailPage from "../pages/LaboratoryPage/LaboratoryDetailPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import NewsDetailPage from "../pages/NewsPage/NewsDetailPage";
import SuccessStoriesPage from "../pages/SuccessStoriesPage/SuccessStoriesPage";
import VillageSuccessStoriesPage from "../pages/SuccessStoriesPage/VillageSuccessStoriesPage";
import SuccessStoryDetailPage from "../pages/SuccessStoriesPage/SuccessStoryDetailPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AnnouncementDetailPage from "../pages/AnnouncementPage/AnnouncementDetailPage";
import AdminRoutes from "../admin/routes/AdminRoutes";


import VillageLayout from "../pages/VillagePortal/layout/VillageLayout";

import VillageInfoPage from "../pages/VillagePortal/modules/VillageInfo/VillageInfoPage";
import DevelopmentPlanPage from "../pages/VillagePortal/modules/DevelopmentPlan/DevelopmentPlanPage";
import DevelopmentPlanDetailPage from "../pages/VillagePortal/modules/DevelopmentPlan/DevelopmentPlanDetailPage";
import CurrentAffairsPage from "../pages/VillagePortal/modules/CurrentAffairs/CurrentAffairsPage";
import EventsPage from "../pages/VillagePortal/modules/Events/EventsPage";
import EventDetailPage from "../pages/VillagePortal/modules/Events/EventDetailPage";
import TraditionalFoodPage from "../pages/VillagePortal/modules/TraditionalFood/TraditionalFoodPage";
import VillageMapPage from "../pages/VillagePortal/modules/VillageMap/VillageMapPage";
import PoliciesPage from "../pages/VillagePortal/modules/Policies/PoliciesPage";
import KnowledgeHubPage from "../pages/VillagePortal/modules/KnowledgeHub/KnowledgeHubPage";
import IndicatorsPage from "../pages/VillagePortal/modules/Indicators/IndicatorsPage";
import TechnologyMappingPage from "../pages/VillagePortal/modules/TechnologyMapping/TechnologyMappingPage";
import FeedbackPage from "../pages/VillagePortal/modules/Feedback/FeedbackPage";
const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= ADMIN ================= */}

      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* ================= PUBLIC ================= */}

      <Route path="/" element={<HomePage />} />

      {/* About */}

      <Route path="/about" element={<AboutPage />} />

      <Route
        path="/about/mission-objectives"
        element={<MissionObjectivesPage />}
      />

      <Route
        path="/about/dg-desk"
        element={<DGDeskPage />}
      />

      <Route
        path="/about/director-desk"
        element={<DirectorDeskPage />}
      />

      {/* Announcements */}

      <Route
        path="/announcements/:slug"
        element={<AnnouncementDetailPage />}
      />

      {/* CSIR Labs */}

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

      {/* News */}

      <Route
        path="/news-updates"
        element={<NewsPage />}
      />

      <Route
        path="/news/:slug"
        element={<NewsDetailPage />}
      />

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

      <Route
        path="/contact"
        element={<ContactPage />}
      />

      <Route
  path="/village/:slug"
  element={<VillageLayout />}
>
  <Route
    index
    element={<VillageInfoPage />}
  />

  <Route
    path="development-plan"
    element={<DevelopmentPlanPage />}
  />

  <Route
  path="development-plan/:id"
  element={<DevelopmentPlanDetailPage />}
/>

  <Route
    path="current-affairs"
    element={<CurrentAffairsPage />}
  />

  <Route
    path="events"
    element={<EventsPage />}
  />

  <Route
  path="events/:eventSlug"
  element={<EventDetailPage />}
/>

  <Route
    path="traditional-food"
    element={<TraditionalFoodPage />}
  />

  <Route
    path="map"
    element={<VillageMapPage />}
  />

  <Route
    path="policies"
    element={<PoliciesPage />}
  />

  <Route
    path="knowledge-hub"
    element={<KnowledgeHubPage />}
  />

  <Route
    path="indicators"
    element={<IndicatorsPage />}
  />

  <Route
    path="technology-mapping"
    element={<TechnologyMappingPage />}
  />

  <Route
    path="feedback"
    element={<FeedbackPage />}
  />
     </Route>

    </Routes>
  );
};

export default AppRoutes;