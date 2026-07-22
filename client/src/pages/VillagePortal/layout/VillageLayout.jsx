import { Outlet, useParams } from "react-router-dom";

import useVillage from "../../../hooks/useVillage";

import Header from "../../../components/common/Header/Header";
import Navbar from "../../../components/common/Navbar/Navbar";
import VillageHero from "../components/VillageHero";
import VillageSidebar from "../components/VillageSidebar";
import VillageFooter from "../components/VillageFooter";

const VillageLayout = () => {
  const { slug } = useParams();

  const {
    village,
    profile,
    loading,
    error,
  } = useVillage(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-slate-600">
          Loading village...
        </p>
      </div>
    );
  }

  if (error || !village) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">
          Village not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <Header />

      <Navbar />

      <VillageHero
        village={village}
        profile={profile}
      />

      <div className="mx-auto max-w-[1700px] px-6 py-10">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-8">

          {/* Sidebar */}

          <aside className="min-w-0">
            <VillageSidebar
              village={village}
            />
          </aside>

          {/* Page Content */}

          <main className="min-w-0">

            <Outlet
              context={{
                village,
                profile,
                loading,
              }}
            />

          </main>

        </div>

      </div>

      <VillageFooter
        village={village}
      />

    </div>
  );
};

export default VillageLayout;
