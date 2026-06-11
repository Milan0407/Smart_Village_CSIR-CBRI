import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Government"
  title="Policies & Schemes"
  description="Government schemes available to villagers."
/>

<div className="space-y-4">
  <div className="border rounded-xl p-5">
    PM Awas Yojana
  </div>

  <div className="border rounded-xl p-5">
    Jal Jeevan Mission
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;