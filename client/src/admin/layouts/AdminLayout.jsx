import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  const handleLogout = () => {
    localStorage.removeItem(
      "accessToken"
    );

    localStorage.removeItem(
      "admin"
    );

    window.location.href =
      "/admin/login";
  };

  const navClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="w-64 fixed h-screen border-r bg-white p-6 flex flex-col">

        <div>
          <h2 className="font-bold text-2xl mb-2">
            CMS Admin
          </h2>

          <p className="text-sm text-gray-500 mb-8">
            {admin?.username}
          </p>

          <nav className="space-y-2">

            <NavLink
              to="/admin/dashboard"
              className={navClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/pages"
              className={navClass}
            >
              Pages
            </NavLink>

            <NavLink
              to="/admin/navigation"
              className={navClass}
            >
              Navigation
            </NavLink>

            <NavLink to="/admin/media"
             className={navClass}
             >
              Media Library
            </NavLink>

            <NavLink
              to="/admin/news"
              className={navClass}
            >
              News
            </NavLink>

            <NavLink
  to="/admin/laboratories"
  className={navClass}
>
  Laboratories
</NavLink>

            <NavLink
              to="/admin/announcements"
              className={navClass}
            >
              Announcements
            </NavLink>

            <NavLink
              to="/admin/success-stories"
              className={navClass}
            >
              Success Stories
            </NavLink>

            <NavLink
              to="/admin/success-story-villages"
              className={navClass}
            >
              Success Story Villages
            </NavLink>

            <NavLink
               to="/admin/videos"
               className={navClass}
            >
               Videos
            </NavLink>

            <NavLink
              to="/admin/home-sections"
              className={navClass}
            >
  Home Sections
</NavLink>

          </nav>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

      </aside>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;