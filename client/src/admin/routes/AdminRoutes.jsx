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

  import CreateSuccessStoryPage
  from "../pages/CreateSuccessStoryPage";

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