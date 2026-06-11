import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Culture"
  title="Traditional Food"
  description="Local cuisine and culinary heritage."
/>

<div className="grid md:grid-cols-3 gap-6">
  <div className="border rounded-xl p-5">
    Millet Roti
  </div>

  <div className="border rounded-xl p-5">
    Traditional Lentil Curry
  </div>

  <div className="border rounded-xl p-5">
    Local Sweet Dish
  </div>
</div>
    </VillageLayout>
  );
};

export default VillageInfoPage;