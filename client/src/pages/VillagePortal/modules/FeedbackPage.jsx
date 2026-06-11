import VillageLayout from "../layout/VillageLayout";
import ModuleLayout from "../shared/ModuleLayout";
import ModulePageHeader from "../shared/ModulePageHeader";

const VillageInfoPage = () => {
  return (
    <VillageLayout>
      <ModulePageHeader
  badge="Community"
  title="Feedback & Activities"
  description="Share feedback and participate in village activities."
/>

<form className="space-y-4 max-w-xl">
  <input
    className="w-full border rounded-lg p-3"
    placeholder="Your Name"
  />

  <textarea
    className="w-full border rounded-lg p-3"
    rows="5"
    placeholder="Write your feedback..."
  />

  <button
    className="bg-green-700 text-white px-5 py-2 rounded-lg"
  >
    Submit Feedback
  </button>
</form>
    </VillageLayout>
  );
};

export default VillageInfoPage;