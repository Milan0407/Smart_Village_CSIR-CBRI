import { useParams } from "react-router-dom";

import VillageSidebar from "../components/VillageSidebar";
import VillageHeader from "../components/VillageHeader";
import VillageHero from "../components/VillageHero";
import VillageStatsCards from "../components/VillageStatsCards";
import VillageBreadcrumb from "../components/VillageBreadcrumb";

import { getVillageBySlug } from "../../../data/villages";

const VillageLayout = ({ children }) => {
  const { slug } = useParams();

  const village = getVillageBySlug(slug);

  if (!village) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Village Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <VillageHeader />

      <div className="max-w-7xl mx-auto px-6 pt-6">
        <VillageBreadcrumb />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        <VillageHero village={village} />

        <div className="mt-8">
          <VillageStatsCards village={village} />
        </div>

        <div className="grid lg:grid-cols-[250px_1fr] gap-6 mt-8">
          <VillageSidebar />

          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageLayout;