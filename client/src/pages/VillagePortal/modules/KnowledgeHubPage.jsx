import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Resources"
  title="Knowledge Hub"
  description="Educational resources and technical documents."
/>

<div className="grid md:grid-cols-2 gap-6">
  <div className="border rounded-xl p-5">
    Smart Agriculture Guide
  </div>

  <div className="border rounded-xl p-5">
    Water Management Handbook
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;