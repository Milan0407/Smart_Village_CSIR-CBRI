import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Achievements"
  title="Events & Achievements"
  description="Community events and milestones."
/>

<div className="grid md:grid-cols-2 gap-6">
  <div className="border rounded-xl p-5">
    Annual Village Festival
  </div>

  <div className="border rounded-xl p-5">
    Best Clean Village Award
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;