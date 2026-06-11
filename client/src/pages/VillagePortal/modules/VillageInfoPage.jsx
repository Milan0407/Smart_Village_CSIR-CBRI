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
          description="Overview of demographics, geography, history and infrastructure."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Basic Details</h3>
            <p>District: Nashik</p>
            <p>State: Maharashtra</p>
            <p>Population: 12,300</p>
            <p>Area: 9.5 km²</p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Infrastructure</h3>
            <p>Schools: 4</p>
            <p>Health Centers: 2</p>
            <p>Road Connectivity: Good</p>
            <p>Internet Coverage: 80%</p>
          </div>
        </div>
      </ModuleLayout>
    </VillageLayout>
  );
};

export default VillageInfoPage;