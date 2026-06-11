import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="GIS"
  title="Village Map"
  description="Interactive village map and infrastructure overview."
/>

<div className="h-[500px] rounded-xl border flex items-center justify-center">
  Leaflet Map Coming Soon
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;