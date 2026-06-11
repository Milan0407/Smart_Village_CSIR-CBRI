import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const DevelopmentPlanPage = () => {
  return (
    <VillageLayout>
      <ModuleLayout>
        <ModulePageHeader
          badge="Planning"
          title="Development Plan"
          description="Roadmap of ongoing and future development initiatives."
        />

        <div className="space-y-4">
          <div className="border-l-4 border-green-600 pl-4">
            Road Infrastructure Project
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            Digital Literacy Program
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            Water Conservation Initiative
          </div>
        </div>
      </ModuleLayout>
    </VillageLayout>
  );
};

export default DevelopmentPlanPage;