import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const CurrentAffairsPage = () => {
  return (
    <VillageLayout>
      <ModuleLayout>
        <ModulePageHeader
          badge="Updates"
          title="Current Affairs"
          description="Latest developments and village news."
        />

        <div className="space-y-4">
          <div className="border rounded-xl p-5">
            New community center inaugurated.
          </div>

          <div className="border rounded-xl p-5">
            Solar lighting project launched.
          </div>
        </div>
      </ModuleLayout>
    </VillageLayout>
  );
};

export default CurrentAffairsPage;