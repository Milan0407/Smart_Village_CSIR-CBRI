import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Innovation"
  title="Technology Mapping"
  description="Technology deployments across the village."
/>

<div className="space-y-4">
  <div className="border rounded-xl p-5">
    Solar Street Lights
  </div>

  <div className="border rounded-xl p-5">
    Smart Irrigation System
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;