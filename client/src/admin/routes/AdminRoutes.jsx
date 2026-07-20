import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage
  from "../pages/LoginPage";

import DashboardPage
  from "../pages/DashboardPage";

import AdminLayout
  from "../layouts/AdminLayout";

  import PagesPage from "../pages/PagesPage";

  import NavigationPage from "../pages/NavigationPage";

  import NewsManagementPage from "../pages/NewsManagementPage";
  import SuccessStoriesPage from "../pages/SuccessStoriesPage";

  import PageEditPage
  from "../pages/PageEditPage";

  import PageSectionsPage from "../pages/PageSectionsPage";

  import EditSectionPage from "../pages/EditSectionPage";

  import CreateNewsPage
  from "../pages/CreateNewsPage";

  import EditNewsPage
  from "../pages/EditNewsPage";


  import LaboratoriesPage
  from "../pages/LaboratoriesPage";

  import CreateSuccessStoryPage
  from "../pages/CreateSuccessStoryPage";

  import CreateLaboratoryPage from "../pages/CreateLaboratoryPage";

  import EditLaboratoryPage from "../pages/EditLaboratoryPage"

  import EditSuccessStoryPage
  from "../pages/EditSuccessStoryPage";

  import CreateNavigationPage
  from "../pages/CreateNavigationPage";

  import EditNavigationPage
  from "../pages/EditNavigationPage";

  import MediaLibraryPage
  from "../pages/MediaLibraryPage";

  import VideosPage
  from "../pages/VideosPage";

import CreateVideoPage
  from "../pages/CreateVideoPage";

import EditVideoPage
  from "../pages/EditVideoPage";

import AnnouncementsPage from "../pages/AnnouncementsPage";
import CreateAnnouncementPage from "../pages/CreateAnnouncementPage";
import EditAnnouncementPage from "../pages/EditAnnouncementPage";
import HomeSectionsPage
from "../pages/HomeSectionsPage";

import SuccessStoryVillagesPage
  from "../pages/SuccessStoryVillagesPage";

import CreateSuccessStoryVillagePage
  from "../pages/CreateSuccessStoryVillagePage";

import EditSuccessStoryVillagePage
  from "../pages/EditSuccessStoryVillagePage";


import SmartVillageDashboard from "../pages/SmartVillageDashboard";
import VillageProfilesPage from "../pages/VillageProfilesPage";
import CreateVillageProfilePage from "../pages/CreateVillageProfilePage";
import EditVillageProfilePage from "../pages/EditVillageProfilePage";


import DevelopmentPlanManagementPage from "../pages/DevelopmentPlanManagementPage";
import CreateDevelopmentPlanPage from "../pages/CreateDevelopmentPlanPage";
import EditDevelopmentPlanPage from "../pages/EditDevelopmentPlanPage";

import EventsManagementPage from "../pages/EventsManagementPage";
import CreateEventPage from "../pages/CreateEventPage";
import EditEventPage from "../pages/EditEventPage";

import PoliciesSchemesPage from "../pages/PoliciesSchemesPage";
import CreatePoliciesSchemePage from "../pages/CreatePoliciesSchemePage";
import EditPoliciesSchemePage from "../pages/EditPoliciesSchemePage";

import VillageLocationsPage from "../pages/VillageLocationsPage";
import CreateVillageLocationPage from "../pages/CreateVillageLocationPage";
import EditVillageLocationPage from "../pages/EditVillageLocationPage";
const ProtectedRoute = ({
  children,
}) => {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  return token
    ? children
    : (
      <Navigate
        to="/admin/login"
      />
    );
};

const AdminRoutes = () => {
  return (
    <Routes>

      <Route
        path="/login"
        element={
          <LoginPage />
        }
      />

      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
           }
          >
  <Route
    path="/dashboard"
    element={<DashboardPage />}
  />

  <Route
    path="/pages"
    element={<PagesPage />}
  />

  <Route
    path="/navigation"
    element={<NavigationPage />}
  />

  <Route
    path="/news"
    element={<NewsManagementPage />}
  />

  <Route
    path="/success-stories"
    element={<SuccessStoriesPage />}
  />


  <Route
  path="/success-story-villages"
  element={
    <SuccessStoryVillagesPage />
  }
/>




<Route
  path="/success-story-villages/create"
  element={
    <CreateSuccessStoryVillagePage />
  }
/>

<Route
  path="/success-story-villages/:id"
  element={
    <EditSuccessStoryVillagePage />
  }
/>


<Route
  path="smart-village"
  element={<SmartVillageDashboard />}
/>

<Route
  path="village-profiles"
  element={<VillageProfilesPage />}
/>

<Route
  path="village-profiles/create"
  element={<CreateVillageProfilePage />}
/>

<Route
  path="village-profiles/:id/edit"
  element={<EditVillageProfilePage />}
/>


<Route
  path="development-plans"
  element={<DevelopmentPlanManagementPage />}
/>

<Route
  path="development-plans/create"
  element={<CreateDevelopmentPlanPage />}
/>

<Route
  path="development-plans/:id/edit"
  element={<EditDevelopmentPlanPage />}
/>


<Route
  path="events"
  element={<EventsManagementPage />}
/>

<Route
  path="events/create"
  element={<CreateEventPage />}
/>

<Route
    path="events/:id/edit"
    element={<EditEventPage />}
/>

<Route
  path="policies-schemes"
  element={<PoliciesSchemesPage />}
/>

<Route
  path="policies-schemes/create"
  element={<CreatePoliciesSchemePage />}
/>

<Route
  path="policies-schemes/:id/edit"
  element={<EditPoliciesSchemePage />}
/>

<Route
  path="village-locations"
  element={<VillageLocationsPage />}
/>

<Route
  path="village-locations/create"
  element={<CreateVillageLocationPage />}
/>

<Route
  path="village-locations/:id/edit"
  element={<EditVillageLocationPage />}
/>



  <Route
  path="announcements"
  element={<AnnouncementsPage />}
/>

<Route
  path="announcements/create"
  element={<CreateAnnouncementPage />}
/>

<Route
  path="announcements/edit/:id"
  element={<EditAnnouncementPage />}
/>

  <Route
  path="/pages/:id"
  element={
    <PageEditPage />
  }
/>

<Route
  path="/pages/:pageId/sections"
  element={
    <PageSectionsPage />
  }
/>

<Route
  path="/sections/:id"
  element={
    <EditSectionPage />
  }
/>

<Route
  path="/news/create"
  element={
    <CreateNewsPage />
  }
/>

<Route
  path="/news/:id"
  element={
    <EditNewsPage />
  }
/>

<Route
  path="/laboratories"
  element={
    <LaboratoriesPage />
  }
/>


<Route
  path="/laboratories/create"
  element={
    <CreateLaboratoryPage />
  }
/>

<Route
  path="/laboratories/:id"
  element={<EditLaboratoryPage />}
/>

<Route
  path="/success-stories/create"
  element={
    <CreateSuccessStoryPage />
  }
/>

<Route
  path="/success-stories/:id"
  element={
    <EditSuccessStoryPage />
  }
/>


<Route
  path="/videos"
  element={
    <VideosPage />
  }
/>

<Route
  path="/videos/create"
  element={
    <CreateVideoPage />
  }
/>

<Route
  path="/videos/:id"
  element={
    <EditVideoPage />
  }
/>



<Route
  path="/navigation/create"
  element={
    <CreateNavigationPage />
  }
/>

<Route
  path="/navigation/:id"
  element={
    <EditNavigationPage />
  }
/>

<Route
  path="/media"
  element={
    <MediaLibraryPage />
  }
/>

<Route
  path="*"
  element={
    <Navigate
      to="/admin/dashboard"
      replace
    />
  }
/>

<Route
  path="home-sections"
  element={
    <HomeSectionsPage />
  }
/>

</Route>

    </Routes>
  );
};

export default AdminRoutes;
