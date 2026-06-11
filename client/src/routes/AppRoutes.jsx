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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

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