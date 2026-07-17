import { Outlet, useParams } from "react-router-dom";

import useVillage from "../../../hooks/useVillage";

import VillageHeader from "../components/VillageHeader";
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

      <VillageHeader
        village={village}
      />

      <VillageHero
        village={village}
        profile={profile}
      />

      <div className="mx-auto max-w-[1700px] px-6 py-10">

        <div className="grid grid-cols-12 gap-6 xl:gap-8">

          {/* Sidebar */}

          <aside className="col-span-12 lg:col-span-3 xl:col-span-2">
            <VillageSidebar
              village={village}
            />
          </aside>

          {/* Page Content */}

          <main className="col-span-12 lg:col-span-9 xl:col-span-10">

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
