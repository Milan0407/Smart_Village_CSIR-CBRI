import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Analytics"
  title="Development Indicators"
  description="Key development metrics and statistics."
/>

<div className="grid md:grid-cols-4 gap-4">
  <div className="border rounded-xl p-5">
    Literacy: 85%
  </div>

  <div className="border rounded-xl p-5">
    Sanitation: 92%
  </div>

  <div className="border rounded-xl p-5">
    Internet Access: 78%
  </div>

  <div className="border rounded-xl p-5">
    Electrification: 100%
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;