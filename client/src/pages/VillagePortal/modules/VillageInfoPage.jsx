import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModuleLayout>
        <ModulePageHeader
          badge="Village Profile"
          title="Village Information"
          description="Overview of demographics, geography, infrastructure and historical background of the village."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Demographics
            </h3>
            <p>Population, households and literacy information.</p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Geography
            </h3>
            <p>Location, area and environmental information.</p>
          </div>
        </div>
      </ModuleLayout>
    </VillageLayout>
  );
};

export default VillageInfoPage;